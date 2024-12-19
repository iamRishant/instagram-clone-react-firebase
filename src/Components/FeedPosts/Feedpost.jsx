import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const Feedpost = ({post}) => {
  // console.log(post);
  
  return (
    <div className='w-full'>
      <PostHeader post={post}/>
      <div className='w-full'>
        <img className='w-full' src={post.imageUrl}/>
      </div>
      <PostFooter post={post}/>
    </div>
  )
}

export default Feedpost
