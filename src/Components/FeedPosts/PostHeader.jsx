import React from 'react'
import Avatar from 'react-avatar';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { timeAgo } from '../../utils/timeAgo';
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser';
const PostHeader = ({post}) => {
  const {userProfile}=useGetUserProfileById(post.createdBy);
  const {loadingFollow,isFollowing,handleFollowUser}=useFollowUser(post.createdBy);//for follow and unfollow user
  // console.log(userProfile);
  
  return (
    <div className='flex items-center justify-between'>

    <Link to={`/${userProfile?.username}`} className='w-full flex items-center justify-between mb-3'>
        <div className='flex gap-2 items-center'>
            <Avatar name="Venom" round size='35' src={userProfile?.profileURL}/>
            <div className='flex flex-col'>
                <span>{userProfile?.fullname}</span>
                <span className='text-sm text-gray-400'>{timeAgo(userProfile?.createdAt)}</span>
            </div>
        </div>
    </Link>
        {
          loadingFollow ?"Loading...":<h1 onClick={handleFollowUser} className='text-blue-500 text-sm font-semibold cursor-pointer hover:text-white duration-150'>
            {isFollowing ? "Unfollow" : "Follow"}
        </h1>
        }
        
    </div>
      
  )
}

export default PostHeader
