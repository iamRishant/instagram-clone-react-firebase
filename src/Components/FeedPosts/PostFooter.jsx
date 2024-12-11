import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/Constants';

const PostFooter = ({username,isProfile=false}) => {
  const [liked,setLiked]=useState(false);
  const [likeCount,setLikeCount]=useState(1000);

  const handleLike=()=>{
    setLiked(!liked);
    liked ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1);
    
  }
  return (
    <div className='mt-5 mb-10 gap-2 flex flex-col '>

    <div className='flex gap-2'>
      <div onClick={handleLike} className='cursor-pointer'>
        {liked ?<UnlikeLogo/>:<NotificationsLogo/>}
      </div>
      <div className='cursor-pointer'>
        <CommentLogo/>
      </div>
    </div>

    <div className='text-sm'>
      <h1>{likeCount} likes</h1>
    </div>
    {
      !isProfile && <div>
      <span className='text-md font-bold'>{username}</span><span className='text-sm'> Looking good</span>
      <p className='text-sm text-gray-400'>View all 1,000 comments</p>
    </div>
    }
    
    <div className='border-b-gray-400 hover:border-b-blue-400 border-b-2 w-full text-white flex justify-between items-center w-full'>
      <input className='outline-none bg-transparent p-2 w-[90%]' placeholder='Add a comment...' type="text" />
      <button className='font-semibold text-blue-500'>Post</button>
    </div>
    </div>
  )
}

export default PostFooter
