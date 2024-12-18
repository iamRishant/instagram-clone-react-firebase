import React from 'react'
import { Link } from 'react-router-dom'
import { HomeLogo } from '../../assets/Constants'

const Home = () => {
  return (
    <>
     <Link to={'/'} className='hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <HomeLogo/>
                <span>Home</span>
        </Link> 
    </>
  )
}

export default Home
