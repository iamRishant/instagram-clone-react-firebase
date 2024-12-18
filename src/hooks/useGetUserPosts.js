import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore';
import useUserProfileStore from '../store/useProfileStore';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useGetUserPosts = () => {
  const [loading,setLoading]=useState(true);
  const {posts,setPosts}=usePostStore();
  const userProfile=useUserProfileStore(state=>state.userProfile);

  useEffect(()=>{
    const getPosts=async ()=>{
        if(!userProfile) return;//if profile hi nhi hai then posts kha se aajaega
        setPosts([]);//initally khud ke store me empty rakhenge ya kissy doosre profile ka data hoga to usko empty krenge
        try {
            const q=query(collection(firestore,"posts"),where("createdBy","==",userProfile.uid))
            const querySnapshot=await getDocs(q)

            const currentPost=[]
            querySnapshot.forEach((doc)=>{
                currentPost.push({...doc.data(),id:doc.id})// we are adding id for key purpose we can also add index while mapping
            })
            currentPost.sort((a,b)=>b.createdAt - a.createdAt) //decending order by time
            setPosts(currentPost)
        } catch (error) {
            toast.error("Error: " + error.message)
            setPosts([])
        }
        finally{
            setLoading(false);
        }

    }

    getPosts();
  },[setPosts,userProfile])

  return {loading,posts}
}

export default useGetUserPosts
