import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'

const Authpage = () => {
  return (
    <div className='bg-[#000000] min-h-screen flex justify-center items-center w-full'>
    <div className='  flex w-[70vw]  min-h-[90vh] '>
      <div className='left  w-[50%] flex justify-center items-center'>
        <img src="/auth.png" alt="" />
      </div>
      <div className='right w-[50%]'>
        <AuthForm/>
      </div>

    </div>
    
  </div>
  )
}

export default Authpage
