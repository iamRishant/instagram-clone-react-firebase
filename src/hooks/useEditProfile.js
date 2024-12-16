
// note we are not using firebase storage facility as it is paid in future may be appwrite ke help se local file system se file
// upload kre par tb tk url se krenge

import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import { firestore } from '../Firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import useUserProfileStore from '../store/useProfileStore';
import { toast } from 'react-toastify';

const useEditProfile = () => {
  const [loading,setLoading]=useState(false);
  const authUser=useAuthStore(state=>state.user);
  const setAuthUser=useAuthStore(state=>state.setUser);
  const setUserProfile=useUserProfileStore(state=>state.setUserProfile);

  const editProfile=async(inputs)=>{
    if(loading && !authUser) return;// checking for multiple click if loading it means we are updating 
    setLoading(true);

    const userDocRef=doc(firestore,"users",authUser.uid);//getting referece of the user data 
    
    try {
        const updatedUser={
            ...authUser,
            fullname:inputs.fullname || authUser.fullname,
            username:inputs.username || authUser.username,
            bio:inputs.bio || authUser.bio,
            profileURL:inputs.URL || authUser.profileURL,
        }

        await updateDoc(userDocRef,updatedUser);
        localStorage.setItem('user-info',JSON.stringify(updatedUser));
        setAuthUser(updatedUser);
        setUserProfile(updatedUser);
        // hers all the states are in sync userStore,profileStore local storage and firestore
        toast.success("Profile updated Successfully");
    } catch (error) {
        toast.error(`Error Occured ${error.message}`);
        
    }
  }

  return {editProfile,loading};
}

export default useEditProfile
