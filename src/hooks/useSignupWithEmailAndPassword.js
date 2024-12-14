import React from 'react'
import {auth, firestore} from '../Firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import useAuthStore from '../store/authStore';

const useSignupWithEmailAndPassword = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    //   lets update the store
    const loginUser=useAuthStore(state=>state.login)// it will return the login fxn in store

      const signup=async(inputs)=>{
        // first lets check inputs
        if(!inputs.password || !inputs.fullname || !inputs.username || !inputs.email){
            console.log("Fill all the details");
            return;
            
        }

        try {
            const newUser=await createUserWithEmailAndPassword(inputs.email,inputs.password);
            // now if we dont have and user
            if(!newUser && error){
                toast.error(`Error is Sign Up ${error.message}` );
                // alert("Some Error has Occured")
                console.log(error);
                return;
            }
            if(newUser){
                // if the user is created then we need to create this user in the database also
                // console.log(newUser);
                const userDoc={
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullname:inputs.fullname,
                    bio:"",
                    profileURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);// users is the collection name and then 2nd para is the unique id of the user then the data
                // after that we will store in local storage also
                localStorage.setItem("user-info",JSON.stringify(userDoc));
                // alert("Sign Up Successfull");
                toast.success("Account Created Successfull");
                loginUser(userDoc)//we are storing the same data which we are storing in the database
                
            }
        } catch (error) {
            // alert("Some Error has Occured")
            toast.error(`Error is Sign Up ${error.message}` );
            console.log(error);
            
        }
      }
  
    return {
        loading,error,signup
    }
}

export default useSignupWithEmailAndPassword
