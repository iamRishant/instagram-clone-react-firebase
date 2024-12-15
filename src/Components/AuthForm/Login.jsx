import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const [inputs,setInputs]=useState({
        email:'',
        password:'',
    });

    const {login,loading,error}=useLogin();

    // if(error) toast.error("Error while logging in", error.message);
  return (
    <>

        <div className='flex flex-col gap-3 w-[75%] mx-auto'>
            <input onChange={(e)=>setInputs({...inputs,email:e.target.value})} value={inputs.email} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Email' type="text" />

            <input onChange={(e)=>setInputs({...inputs,password:e.target.value})} value={inputs.password} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Password' type="password" />
            
        </div>
        <button onClick={()=>login(inputs)}  className='mt-5 px-10 py-1 bg-[#0069AD] rounded-md w-[75%] mx-auto'>{loading ?"Logging in":"Log in"}</button> 
    </>
  )
}

export default Login
