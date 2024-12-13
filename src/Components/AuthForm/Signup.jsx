import React, { useState } from 'react'
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword';

const Signup = () => {
    const[inputs,setInputs]=useState({
        email:'',
        username:'',
        fullname:'',
        password:''
    })
    const [isLoading,setIsloading]=useState(false)
    const[show,setShow]=useState(false);

    const {loading,error,signup}=useSignupWithEmailAndPassword()
  return (
    <>
        <div className='flex flex-col gap-3 w-[75%] mx-auto'>
            <input onChange={(e)=>setInputs({...inputs,email:e.target.value})} value={inputs.email} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Email' type="text" />

            <input onChange={(e)=>setInputs({...inputs,username:e.target.value})} value={inputs.username} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Username' type="text" />

            <input onChange={(e)=>setInputs({...inputs,fullname:e.target.value})} value={inputs.fullname} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Full Name' type="text" />

            <div className='w-full relative'>
                <input onChange={(e)=>setInputs({...inputs,password:e.target.value})} value={inputs.password} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3 w-full' placeholder='Password' type={show ? "text":"password"} />

                {!show ? <i onClick={()=>setShow(!show)} class="ri-eye-fill absolute right-2 top-1"></i>:<i onClick={()=>setShow(!show)} class="ri-eye-off-fill absolute right-2 top-1"></i>}
            </div>
        </div>
            <button disabled={loading} className='mt-5 px-10 py-1 bg-[#0069AD] rounded-md w-[75%] mx-auto' onClick={()=>signup(inputs)}>{loading?"Loading":"Sign Up"}</button>
        
         
    </>
  )
}

export default Signup
