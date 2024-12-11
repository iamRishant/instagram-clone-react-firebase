import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const Feedpost = ({img,username,avatar}) => {
  return (
    <div className='w-full'>
      <PostHeader username={username} avatar={avatar}/>
      <div className='w-full'>
        <img src={img}/>
      </div>
      <PostFooter username={username}/>
    </div>
  )
}

export default Feedpost
