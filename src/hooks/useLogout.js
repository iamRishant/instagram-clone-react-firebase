import React from 'react'
import { auth } from '../Firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useAuthStore from '../store/authStore';

const useLogout = () => {
  
    const [signOut, loading, error] = useSignOut(auth);
    // lets also update the store
    const logoutUser=useAuthStore((state)=>state.logout);

    const handleLogout = async () => {
        try {

            await signOut();
            localStorage.removeItem('user-info');
            // we are removing it from local storage we will also update the store
            logoutUser();
            toast.success("Logged Out Successfully");
            
            
        } catch (error) {
            toast.error("Error Occured ",error.message);
        }
    }

    return {handleLogout,loading, error};


}

export default useLogout
