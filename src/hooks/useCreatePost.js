import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';
import useUserProfileStore from '../store/useProfileStore';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { firestore } from '../Firebase/firebase';
import { addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from 'firebase/firestore';

const useCreatePost = () => {
  const [loading,setLoading]=useState(false);
  const authUser=useAuthStore(state=>state.user);
  const createPost=usePostStore(state=>state.createPost)
  const addPost=useUserProfileStore(state=>state.addPost)
  const {pathname}=useLocation();

  const handleCreatePost=async(URL,caption)=>{
    if(loading) return;// stopping multiple clicks
    if(!URL){
        toast.warning("Please Upload an image")
        return ;
    }
    setLoading(true);
    const newPost={
        caption:caption,
        likes:[],
        comments:[],
        createdAt:Date.now(),
        createdBy:authUser.uid,
        imageUrl:URL,
    }

    try {
       


        const postDocRef= await addDoc(collection(firestore,"posts"),newPost);// iss line se ek new collection jiska naam posts hoga
        // wo bnega and uske newPost add hoga

        const userDocRef=doc(firestore,"users",authUser.uid);// getting reference of user
        

        await updateDoc(userDocRef,{posts:arrayUnion(postDocRef.id)});// updating posts of user
        

        createPost({...newPost,id:postDocRef.id})//adding id to avoid any react error
        addPost({...newPost,id:postDocRef.id})
        toast.success("Post created Succesfully")
        
    } catch (error) {
        console.log(error);
        
        toast.error("Error yha hai "+error.message);
    }finally{
        setLoading(false);
    }
  }
  return {loading,handleCreatePost};
}

export default useCreatePost
