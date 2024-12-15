import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useLogout from '../../hooks/useLogout'

const SuggestedUserHeader = () => {
  const [loggingOut,setLoggingOut]=useState(false);

  const authUser=useAuthStore((state)=>state.user)
  
  const {handleLogout,loading} = useLogout();

  if(!authUser) return null;
  
  return (
    <div className='w-full flex items-center justify-between mt-3'>
    <div className='flex gap-2  items-center'>
      <Link to={`${authUser?.username}`}>
        <Avatar size='40' src={authUser.profileURL} round/>
      </Link>
      <Link to={`${authUser.username}`}>
        <span className='text-semibold'>{authUser.username}</span>
      </Link>
    </div>      
    <button onClick={handleLogout} className='text-blue-500 hover:text-white duration-100'>{loggingOut ? "Logging Out":"Log Out"}</button>
    </div>
  )
}

export default SuggestedUserHeader
