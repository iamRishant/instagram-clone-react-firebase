import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { firestore } from '../Firebase/firebase';

const useGetUserProfileById = (userId) => {
  const [loading,setLoading]=useState(true);
  const [userProfile,setUserProfile]=useState(null);

  useEffect(()=>{
    const getUserProfile=async()=>{
        setLoading(true);
        try {

            const userRef=await getDoc(doc(firestore,'users',userId));
            if(userRef.exists()){
                setUserProfile(userRef.data());
            }
            
        } catch (error) {
            toast.error("Error loading user profile"+error.message);
        }
        finally{
            setLoading(false)
        }

    }
    getUserProfile();
  },[userId,setUserProfile])

  return {loading,userProfile,setUserProfile};
}

export default useGetUserProfileById
