import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { firestore } from '../Firebase/firebase';
import useUserProfileStore from '../store/useProfileStore';

const useGetUserProfileByName = (username) => {// this is not a react component this is a custom hook which is taking username as parameter
    const [loading,setLoading] =useState(true);

    // const userProfile=useUserProfileStore(state=>state.userProfile);instead of this we can also destructure
    const {userProfile,setUserProfile}=useUserProfileStore();// getting data of user from store

    useEffect(()=>{
        const getUserProfile=async ()=>{
            setLoading(true);
            try {
                const q=query(collection(firestore,"users"),where("username","==",username))
                const querySnapshot=await getDocs(q);//use getDocs instead of useDoc

                if(querySnapshot.empty){
                    setUserProfile(null);
                    return;
                }
                // it means we have the data of user in array format

                let userDoc;
                querySnapshot.forEach(doc => {// it will just have one doc par qki array hai thats why we have to do this
                    userDoc=doc.data();
                });

                setUserProfile(userDoc);
                
            } catch (error) {
                toast.error("Error "+error.message+error);
            }
            finally{
                setLoading(false);
            }
        }
        getUserProfile();
    },[username,setUserProfile])

    return {loading,userProfile};//returning the hook
}

export default useGetUserProfileByName
