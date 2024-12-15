import { doc, setDoc } from 'firebase/firestore';
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth, firestore } from '../../Firebase/firebase';
import useAuthStore from '../../store/authStore';
import Loading from '../Loading/Loading';

const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const loginUser=useAuthStore((state)=>state.login);


  const login =async()=>{
    try {
      const newUser=await signInWithGoogle();
      if(!newUser && error){
        toast.error("Error",error.message,error);
        return;
      }

      if(newUser){
        // if the user is created then we need to create this user in the database also
                console.log(newUser);
                const userDoc={
                  uid:newUser.user.uid,
                  email:newUser.user.email,
                  username:newUser.user.email.split("@")[0],//email ka first part will be user name
                  fullname:newUser.user.displayName,
                  bio:"",
                  profileURL:newUser.user.photoURL,
                  followers:[],
                  following:[],
                  posts:[],
                  createdAt:Date.now()
              }

              await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);// users is the collection name and then 2nd para is the unique id of the user then the data
              // after that we will store in local storage also
              localStorage.setItem("user-info",JSON.stringify(userDoc));
              // alert("Sign Up Successfull");
              // toast.success("Account Created Successfull");
              loginUser(userDoc)//we are storing the same data which we are storing in the database
      }
    } catch (error) {
      toast.error("Error "+error.message,error);
    }
  }

  return (
    <>
        <div onClick={login} className='w-[75%] mx-auto flex items-center justify-center gap-5 mt-5'>
            <button className='hover:underline text-[#0069AD] text-xl font-semibold flex items-center gap-3'><img className='w-[2vw]' src="/google.png" alt="" />{prefix} with google</button>
        </div> 
    </>
  )
}

export default GoogleAuth
