import React, { useState } from 'react'
import Avatar from 'react-avatar'
import useFollowUser from '../../hooks/useFollowUser'
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';
const SuggestedUser = ({user,setUser}) => {
    const {loadingFollow,isFollowing,handleFollowUser} =useFollowUser(user?.uid);
    const authUser=useAuthStore(state=>state.user);

    const handleFollow=(e)=>{
      // handleFollowUser();
      // e.stopPropagation();
    }
    // console.log(user);
    

    
  return (
    
    <div className='flex items-center justify-between my-3'>
    <Link to={`/${user?.username}`}>
    <div className='flex gap-2 items-center'>
        <Avatar size='45' src={user?.profileURL} round/>
        <div className='flex flex-col'>
            <span>{user?.fullname}</span>
            <span className='text-sm text-gray-500'>{user?.followers.length} Followers</span>
        </div>
    </div>
    </Link>
    {
      authUser?.uid!==user?.uid && loadingFollow?"Loading": <button className='text-blue-500 hover:text-white' onClick={handleFollowUser} >{isFollowing ?"Unfollow":"Follow"}</button>
    }
    
    </div>
  )
}

export default SuggestedUser
