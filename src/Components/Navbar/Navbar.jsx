import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div className='absolute flex gap-5 top-6 right-6'>
      <Link to={'/auth'}  className='mt-5 px-5 py-1 bg-[#0069AD] rounded-md hover:scale-90 duration-100'>Log in</Link>
      <Link to={'/auth'}  className='mt-5 px-5 py-1 bg-[#0069AD] rounded-md hover:scale-90 duration-100'>Sign up</Link>
    </div>
  )
}

export default Navbar
