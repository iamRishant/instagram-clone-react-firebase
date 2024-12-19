import React from 'react'
import Avatar from 'react-avatar'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';

const Comment = ({singleComment}) => {
  // console.log(singleComment);
  // single comment has createBy property which will tell us about user who created the comment
  const {loading,userProfile}=useGetUserProfileById(singleComment.createdBy);
  if(loading) return <p>Loading...</p>
  // console.log(userProfile);
  
  
  return (
    <>
      <Link to={`/${userProfile.username}`} className='flex gap-2 mt-5 border-b-[1px] border-b-gray-500 pb-2'>
                <Avatar src={userProfile.profileURL} round size='40'/>
                <div className='flex flex-col items-start  gap-1 text-sm'>
                    <p className='font-bold'>{userProfile.username}</p>
                    <p className='font-sm text-gray-500'>{timeAgo(singleComment.createAt)}</p>
                </div>
                <p className='font-md'>{singleComment.comment}</p>
        </Link>
    </>
  )
}

export default Comment
