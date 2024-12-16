import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/useProfileStore';
import { toast } from 'react-toastify';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useFollowUser = (userId) => {
  const [loadingFollow,setLoading]=useState(false);
  const [isFollowing,setIsFollowing]=useState(false);
  const authUser=useAuthStore(state=>state.user);
  const setAuthUser=useAuthStore(state=>state.setUser);
  const {userProfile,setUserProfile}=useUserProfileStore();

  const handleFollowUser=async()=>{
    setLoading(true);
    try {
        const currentUserRef=doc(firestore,"users",authUser.uid);
        const userToFollowOrUnfollowRef=doc(firestore,"users",userId);

        await updateDoc(currentUserRef,{
            following:isFollowing ? arrayRemove(userId):arrayUnion(userId)// agr already following tha then unfollow else follow krdo
        })

        await updateDoc(userToFollowOrUnfollowRef,{
            followers:isFollowing ? arrayRemove(authUser.uid):arrayUnion(authUser.uid) // ab uss user ke follower bhi badhana ghatana pdega n
        })

        if(isFollowing){
            //unfollow
            setAuthUser({
                ...authUser,
                following:authUser.following.filter(uid=>uid!==userId)// we are removing following list
            })
            setUserProfile({
                ...userProfile,
                followers:userProfile.followers.filter(uid=>uid!==authUser.uid)// removing follower list
            })
            localStorage.setItem('user-info',JSON.stringify({
                ...authUser,
                following:authUser.following.filter(uid=>uid!==userId)// we are removing following list
            }))

            setIsFollowing(false);
        }
        else{
            //follow
            setAuthUser({
                ...authUser,
                following: [...authUser.following,userId]// adding new following
            })
            setUserProfile({
                ...userProfile,
                followers: [...userProfile.followers,authUser.uid]// adding new follower
            })
            localStorage.setItem('user-info',JSON.stringify({
                ...authUser,
                following: [...authUser.following,userId]// adding new following
            }))
            setIsFollowing(true);
        }
        
    } catch (error) {
        toast.error("Error "+error.message+" : "+error.stack);

    }
    finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
    if(authUser){
        const isFollowing=authUser.following.includes(userId);//checking if the current profile is followed by authenticated user
        setIsFollowing(isFollowing);
    }
  },[authUser,userId])//checking for each authenticated user and differenct user id

  return {loadingFollow,isFollowing,handleFollowUser};
}

export default useFollowUser
