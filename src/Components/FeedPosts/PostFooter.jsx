import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/Constants';
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';

const PostFooter = ({post,username,isProfile=false}) => {
  
  const [liked,setLiked]=useState(false);
  const [likeCount,setLikeCount]=useState(1000);
  const {loading,handlePostComment}=usePostComment();
  const [comment,setComment]=useState('');
  const authUser=useAuthStore(state=>state.user);
  const commentRef=useRef(null);

  const handleLike=()=>{
    setLiked(!liked);
    liked ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1);
    
  }

  const handleSubmitComment = async()=>{
    await handlePostComment(post.id,comment);
    setComment('')
  }
  return (
    <div className='mt-5 mb-10 gap-2 flex flex-col '>

    <div className='flex gap-2'>
      <div onClick={handleLike} className='cursor-pointer'>
        {liked ?<UnlikeLogo/>:<NotificationsLogo/>}
      </div>
      <div className='cursor-pointer' onClick={()=>commentRef.current.focus()}>
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


{/* only authenticated user can post */}
    {
      authUser ?<div className='border-b-gray-400 hover:border-b-blue-400 border-b-2  text-white flex justify-between items-center w-full'>
      <input ref={commentRef} value={comment} onChange={(e)=>setComment(e.target.value)} className='outline-none bg-transparent p-2 w-[90%]' placeholder='Add a comment...' type="text" />
      <button onClick={handleSubmitComment} className='font-semibold text-blue-500'>{loading ?"Posting...":"Post"}</button>
      </div> : "Login To Post"
    }
    
    
    </div>
  )
}

export default PostFooter
