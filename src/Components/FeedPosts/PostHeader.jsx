import React from 'react'
import Avatar from 'react-avatar';
const PostHeader = ({username,avatar}) => {
  return (
    <div className='w-full flex items-center justify-between mb-3'>
        <div className='flex gap-2 items-center'>
            <Avatar name="Venom" round size='35' src={avatar}/>
            <div className='flex gap-2 items-center'>
                <span>{username}</span>
                <span className='text-sm text-gray-400'>12 week</span>
            </div>
        </div>
        
        <h1 className='text-blue-500 text-sm font-semibold cursor-pointer hover:text-white duration-150'>
            Unfollow
        </h1>
      
    </div>
  )
}

export default PostHeader
