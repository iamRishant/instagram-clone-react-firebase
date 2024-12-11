import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const[isLogin,setIsLogin]=useState(true);
    const[inputs,setInputs]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })

  return (
    <div className='h-[100%] w-[100%] text-white flex justify-center items-center  '>
      <div className='border-[1px] border-gray-500 w-[80%] h-[90%] flex flex-col'>
        <img className='w-[75%] mx-auto my-6' src="/logo.png" alt="" />
        <div className='flex flex-col gap-3 w-[75%] mx-auto'>
            <input onChange={(e)=>setInputs({...inputs,email:e.target.value})} value={inputs.email} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Email' type="text" />
            <input onChange={(e)=>setInputs({...inputs,password:e.target.value})} value={inputs.password} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Password' type="password" />
            
            {!isLogin && <input value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} className='bg-[#121212] py-1 outline-gray-900 rounded-md px-3' placeholder='Confirm Password' type="password" /> }
        </div>
        <button  className='mt-5 px-10 py-1 bg-[#0069AD] rounded-md w-[75%] mx-auto'>{isLogin ? "Log in":"Sign up"}</button>

        <div className='flex items-center justify-center gap-2 mt-5'>
            <div className='w-[30%] border-[1px]' ></div>
            <div className='flex justify-center items-center'>
                <p className=' text-center'>OR</p>
            </div>
            <div className='w-[30%] border-[1px]' ></div>
            
        </div>

        <div className='w-[75%] mx-auto flex items-center justify-center gap-5 mt-5'>
            <button className='hover:underline text-[#0069AD] text-xl font-semibold flex items-center gap-3'><img className='w-[2vw]' src="/google.png" alt="" />Login with google</button>
        </div>
        
        <div className='w-[75%] border-[1px] border-gray-500 mx-auto mt-10 p-5 flex items-center justify-center'>
            
        <h1 className=''>{isLogin ? "Don't have an account?":"Already have an account?"} <button onClick={()=>setIsLogin(!isLogin)} className='text-[#0095F6] font-bold hover:underline'>{isLogin ?"Sign up":"Login"}</button></h1>
        </div>
                
                
           
      </div>
    </div>
  )
}

export default AuthForm
