import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { firestore } from '../Firebase/firebase';

const useSearchUser = () => {
  const [loading,setLoading]=useState(false);
  const [user,setUser]=useState(null);


    const getUserProfile=async(username)=>{
        setLoading(true);
        try {

            const q=query(collection(firestore,'users'),where("username","==", username))
            const querySnapshot=await getDocs(q);

            if(querySnapshot.empty){ 
                setUser(null)
                return toast.error("User not found");
            }

            querySnapshot.forEach((doc)=>{
                setUser(doc.data())
            })
            
        } catch (error) {
            toast.error("Error "+error.message+" : "+error.stack);
            setUser(null);
            
        } finally {
            setLoading(false);
        }
    }
    return {loading,user,getUserProfile,setUser};
}

export default useSearchUser
