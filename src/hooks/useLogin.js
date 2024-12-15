import React from 'react'
import { auth, firestore } from '../Firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const loginUser=useAuthStore((state)=>state.login)

      const navigate=useNavigate();

      const login=async(inputs)=>{

        if(!inputs.email || !inputs.password){
            toast.warn("Enter Email and password.");
            return;
        }

        try {
            const userCred=await signInWithEmailAndPassword(inputs.email,inputs.password);
            // after getting userdetails we will update our state but for that we need data from firestore
            const docRef = doc(firestore, "users", userCred.user.uid);
            const docSnap = await getDoc(docRef);
            // now lets set this data to local storage
            localStorage.setItem("user-info",JSON.stringify(docSnap.data()))
            // now update the auth store so that it can update the state
            loginUser(docSnap.data());
            
            toast.success("Login Success");
            // navigate("/"); no need to call loginUser from authstore will update the user state and routes will take care of path

        } catch (error) {
            toast.error("Login error:", error);
        }
      }

      return {login,loading,error};//passing the fxn 
}

export default useLogin
