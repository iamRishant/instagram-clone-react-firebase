import React, { useEffect } from 'react'
import { useState } from 'react'
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';
import { firestore } from '../Firebase/firebase';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';




const useGetSuggestedUser = () => {
    const [loading,setLoading]=useState(true);
    const [suggestedUser,setSuggestedUser] = useState([]);
    const authUser=useAuthStore(state=>state.user);
  
    useEffect(()=>{
      const getSuggestedUser=async()=>{
          setLoading(true);
          try {
              const userRef=collection(firestore,"users")
              const q=query(
                  userRef,
                  where("uid","not-in",[authUser.uid,...authUser.following]),// dont suggest myself and users i am following
                  orderBy("uid"),
                  limit(3)
              )
              const querySnapshot=await getDocs(q);
  
              const users=[];
              querySnapshot.forEach(doc => {
                  users.push({...doc.data(),id:doc.id});//array of objects having all the doc data and new variable id
              })
  
              setSuggestedUser(users)
              
          } catch (error) {
              toast.error("Error: " + error.message);
          }
          finally{
              setLoading(false);
          }
      }
      if(authUser) getSuggestedUser();// only call the fxn if user is authenticated
    },[authUser])
  
    return {loading,suggestedUser};
  }

export default useGetSuggestedUser

