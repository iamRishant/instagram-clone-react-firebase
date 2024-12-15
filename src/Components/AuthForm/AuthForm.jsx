import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login.jsx'
import GoogleAuth from './GoogleAuth.jsx'
import Signup from './Signup.jsx'

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
        <img className='w-[75%] mx-auto my-2' src="/logo.png" alt="" />
        
        {isLogin ? <Login/>:<Signup/>}
        

        <div className='flex items-center justify-center gap-2 mt-5'>
            <div className='w-[30%] border-[1px]' ></div>
            <div className='flex justify-center items-center'>
                <p className=' text-center'>OR</p>
            </div>
            <div className='w-[30%] border-[1px]' ></div>
            
        </div>

        <GoogleAuth prefix={isLogin ? "Login":"Sign Up"}/>

        <div className='w-[75%] border-[1px] border-gray-500 mx-auto mt-10 p-5 flex items-center justify-center'>
            
        <h1 className=''>{isLogin ? "Don't have an account?":"Already have an account?"} <button onClick={()=>setIsLogin(!isLogin)} className='text-[#0095F6] font-bold hover:underline'>{isLogin ?"Sign up":"Login"}</button></h1>
        </div>
                
                
           
      </div>
    </div>
  )
}

export default AuthForm
