import React from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'
const Profiletabs = () => {
  return (
    <div className='w-full flex items-center justify-center gap-3 p-3'>
        <h1 className='flex items-center gap-1 font-semibold hover:font-bold cursor-pointer'><BsGrid3X3/>POSTS</h1>     
        <h1 className='flex items-center gap-1 font-semibold hover:font-bold cursor-pointer'><BsBookmark/>SAVED</h1>     
        <h1 className='flex items-center gap-1 font-semibold hover:font-bold cursor-pointer'><BsSuitHeart/>LIKED</h1>     
    </div>
  )
}

export default Profiletabs
