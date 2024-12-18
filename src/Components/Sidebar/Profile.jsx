import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

const Profile = () => {
  const authUser=useAuthStore(state=>state.user)
  return (
    <>
     <Link to={`/${authUser?.username}`} className='hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <Avatar name="Venom" round size='25' src={authUser?.profileURL || ""}/>
                <span>Profile</span>
        </Link>  
    </>
  )
}

export default Profile
