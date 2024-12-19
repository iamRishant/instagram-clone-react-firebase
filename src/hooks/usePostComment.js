import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';
import usePostStore from '../store/postStore';

const usePostComment = () => {
  const [loading,setLoading]=useState(false);
  const authUser=useAuthStore(state=>state.user);
  const addComment=usePostStore(state=>state.addComment);

  const handlePostComment=async(postId,comment)=>{
    if(loading) return;
    if(!authUser) return toast.warn("Login To comment")
    setLoading(true);
    
    try {
        const newComment={
            comment:comment,
            createAt:Date.now(),
            createdBy:authUser.uid,
            postId:postId,//we can simple write postId that will also work when lhs and rhs are equal
        }
        //with this comment will be added to the database
        await updateDoc(doc(firestore,"posts",postId),{
            comments:arrayUnion(newComment)
        })
        // but we also want to show it to the user interface
        addComment(postId,newComment);
        
    } catch (error) {
        toast.error("Error while commenting "+error.message);
    }
    finally{
        setLoading(false)
    }

  }

  return {loading,handlePostComment};
}

export default usePostComment
