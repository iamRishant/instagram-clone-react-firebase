import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import Loading from '../../Components/Loading/Loading'
import useGetUserPosts from '../../hooks/useGetUserPosts'
import useUserProfileStore from '../../store/useProfileStore'
const Profileposts = () => {
  const {loading,posts}=useGetUserPosts();
  const userProfile=useUserProfileStore(state=>state.userProfile);

  const noPostsFound=!loading && posts.length===0;
  if(noPostsFound) return "No posts found";


  if(loading) return <Loading/>
  
  return (
    <div className='w-full flex flex-wrap mt-5'>
        {
          posts && posts.map((post)=>(
            <ProfilePost key={post.id} post={post} userProfile={userProfile}/>
          ))
        }   
    </div>
  )
}

export default Profileposts
