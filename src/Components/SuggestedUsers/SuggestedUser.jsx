import React, { useState } from 'react'
import Avatar from 'react-avatar'
const SuggestedUser = ({username, avatar, followers}) => {
    const [isFollowed,setIsFollowed]=useState(false);
  return (
    <div className='flex items-center justify-between my-3'>
    <div className='flex gap-2 items-center'>
        <Avatar size='45' src={avatar} round/>
        <div className='flex flex-col'>
            <span>{username}</span>
            <span className='text-sm text-gray-500'>{followers} Followers</span>
        </div>
    </div>
    <button className='text-blue-500 hover:text-white' onClick={()=>setIsFollowed(!isFollowed)}>{isFollowed ?"Unfollowed":"Follow"}</button>
    </div>
  )
}

export default SuggestedUser
