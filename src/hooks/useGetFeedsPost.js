import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore';
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/useProfileStore';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useGetFeedsPost = () => {
  const [loading,setLoading]=useState(true);
  const {posts,setPosts}=usePostStore();
  const authUser=useAuthStore(state=>state.user);
  const {setUserProfile}=useUserProfileStore();

  useEffect(()=>{
    const getFeedPost=async()=>{
        setLoading(true);
        if(authUser.following.length===0){
            setLoading(false)
            setPosts([]);
            return;
        }
        try {
            const q=query(collection(firestore,"posts"),where("createdBy","in",authUser.following));
            const querySnapshot=await getDocs(q);
            const feedPost=[]
            querySnapshot.forEach((doc)=>{
                feedPost.push({id:doc.id,...doc.data()})
            })
            feedPost.sort((a,b)=> b.createAt-a.createAt);// latest above

            setPosts(feedPost);
        } catch (error) {
            toast.error("Error: " + error.message)
        }
        finally{
            setLoading(false);
        }
    }
    if(authUser) getFeedPost();
  },[authUser,setPosts,setUserProfile])

  return {loading,posts}
}

export default useGetFeedsPost
