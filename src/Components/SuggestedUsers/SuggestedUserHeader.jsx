import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const SuggestedUserHeader = () => {
  return (
    <div className='w-full flex items-center justify-between mt-3'>
    <div className='flex gap-2  items-center'>
        <Avatar size='40' src='/img1.png' round/>
        <span className='text-semibold'>asaprogrammer</span>
    </div>      
    <Link to={'/auth'} className='text-blue-500'>Logout</Link>
    </div>
  )
}

export default SuggestedUserHeader
