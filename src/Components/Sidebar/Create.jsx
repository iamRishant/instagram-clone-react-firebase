import React from 'react'
import { Link } from 'react-router-dom'
import { CreatePostLogo } from '../../assets/Constants'

const Create = () => {
  return (
    <>
     <Link to={'/'} className='hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <CreatePostLogo/>
                <span>Create</span>
        </Link>  
    </>
  )
}

export default Create
