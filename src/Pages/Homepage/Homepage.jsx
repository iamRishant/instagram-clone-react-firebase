import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'
import Feedposts from '../../Components/FeedPosts/Feedposts'
import SuggestedUsers from '../../Components/SuggestedUsers/SuggestedUsers'

const Homepage = () => {
  return (
   <div className='w-full flex items-center justify-center'>
    <div className='w-[80%] flex  gap-10'>
      <div className='left  w-[65%] mt-10'>
        <Feedposts/>
      </div>
      <div className='right  w-[35%] mt-10'>
        <SuggestedUsers/>
      </div>
    </div>
   </div>
  )
}

export default Homepage
