import React from 'react'
import SuggestedUserHeader from './SuggestedUserHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <div className='w-full px-5'>
        <SuggestedUserHeader/>
        <div className='flex items-center justify-between mt-5 mb-8'>
            <span className='text-gray-500 text-sm font-semibold'>Suggested For You</span>
            <button className='text-sm font-semibold text-white'>See All</button>
        </div>
        <SuggestedUser username={"User 1"} avatar={'/img1.png'} followers={"1234"}/>
        <SuggestedUser username={"User 2"} avatar={'/img2.png'} followers={"134"}/>
        <SuggestedUser username={"User 3"} avatar={'/img3.png'} followers={"234"}/>
    </div>
  )
}

export default SuggestedUsers
