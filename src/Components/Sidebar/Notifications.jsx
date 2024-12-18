import React from 'react'
import { NotificationsLogo } from '../../assets/Constants'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <>
     <Link to={'/'} className='hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <NotificationsLogo/>
                <span>Notifications</span>
        </Link>  
    </>
  )
}

export default Notifications
