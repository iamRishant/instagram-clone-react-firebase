import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/Constants';
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import  Modal  from '../Modal/Modal';
import Avatar from 'react-avatar';
import Comments from '../Comments/Comments';

const PostFooter = ({post,isProfile=false}) => {
  
  const {loading,handlePostComment}=usePostComment();
  const [comment,setComment]=useState('');
  const authUser=useAuthStore(state=>state.user);
  const commentRef=useRef(null);

  const {userProfile}=useGetUserProfileById(post.id);
  // console.log(userProfile);
  


  const handleSubmitComment = async()=>{
    await handlePostComment(post.id,comment);
    setComment('')
  }


  const { isLiked, likes, handleLikePost, loadingLike}=useLikePost(post);

  // for modal

  const [isOpen,SetIsOpen]=useState(false);

  return (
    <div className='mt-5 mb-10 gap-2 flex flex-col '>

    <div className='flex gap-2'>
      <div onClick={handleLikePost}  className='cursor-pointer'>
        {isLiked ?<UnlikeLogo/>:<NotificationsLogo/>}
      </div>
      <div className='cursor-pointer' onClick={()=>commentRef.current.focus()}>
        <CommentLogo/>
      </div>
    </div>

    <div className='text-sm'>
      <h1>{likes} likes</h1>
    </div>
    {
      !isProfile && <div>
      <span className='text-md font-bold'>{userProfile?.username}</span><span className='text-sm'>{post?.caption}</span>
      {
        post.comments.length>0 && <p onClick={()=>SetIsOpen(true)} className='text-sm text-gray-400 cursor-pointer hover:text-gray-500'>View all {post.comments.length} comments</p>
      }
      
    </div>
    }


{/* only authenticated user can post */}
    {
      authUser ?<div className='border-b-gray-400 hover:border-b-blue-400 border-b-2  text-white flex justify-between items-center w-full'>
      <input ref={commentRef} value={comment} onChange={(e)=>setComment(e.target.value)} className='outline-none bg-transparent p-2 w-[90%]' placeholder='Add a comment...' type="text" />
      <button onClick={handleSubmitComment} className='font-semibold text-blue-500'>{loading ?"Posting...":"Post"}</button>
      </div> : "Login To Post"
    }

    {/* when we click on show comments then this modal will open */}

    <Modal isOpen={isOpen} onClose={()=>SetIsOpen(false)}>
         <div className='w-full   mt-5 flex'>
          {/* left */}
          <div className='w-[50%]'>
            <img className='w-[100%] aspect-auto max-h-[80vh]' src={post?.imageUrl} alt="" />
          </div>

          {/* right */}

          <div className='w-[50%] px-5'>
              <div className='flex items-center justify-between py-2 border-b-2 border-gray-500'>
                <div className='flex items-center gap-2'>
                  <Avatar src={userProfile?.profileURL} size='55' round/>
                  <div className='flex flex-col gap-1'>
                  <p>{userProfile?.fullname}</p>
                  <span>{post?.caption || "No Caption "}</span>
                  </div>
                </div>
                  {/* only owner of the post should be able to delete the post */}
                {
                  authUser?.uid === userProfile?.uid && <button onClick={handleDeletePost} className='hover:scale-105 duration-150 hover:text-red-500'>
                    {isDeleting ? "Deleting...":<i class="ri-delete-bin-line"></i>}
                    
                </button>
                }
                
              </div>
              <div className='border-b-2 border-gray-500 overflow-y-scroll max-h-[40vh] py-5'>

                <Comments post={post}/>
              </div>

              <PostFooter post={post} isProfile={true}/>
          </div>
         </div>
        </Modal>
    
    
    </div>
  )
}

export default PostFooter
