import React from 'react'
import {CreatePostLogo, HomeLogo, InstagramLogo, NotificationsLogo, SearchLogo} from  '../../assets/Constants'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import Avatar from 'react-avatar';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
const Sidebar = () => {

    const sideBarItems=[
        {
            icon:<HomeLogo/>,
            text:"Home",
            link:"/",
        },
        {
            icon:<SearchLogo/>,
            text:"Search",
            // link:"/",
        },
        {
            icon:<NotificationsLogo/>,
            text:"Notifications",
            // link:"/",
        },
        {
            icon:<CreatePostLogo/>,
            text:"Create",
            // link:"/",
        },
        {
            icon:<Avatar name="Venom" round size='25' src='/profilepic.png'/>,
            text:"Profile",
            link:"/asaprogrammer",
        },
    ]

    const {handleLogout,loading,error}=useLogout();// custom hook created for logging out
  return (
    <div className='py-10 px-6 sticky top-0 left-0 h-[100vh] '>
      <div className='flex flex-col w-full'>
      <Link to={"/"}>
        <InstagramLogo/>
      </Link>
      <div className='text-white text-md mt-10'>
        {
            sideBarItems.map((item,index)=>(
              <Link to={item.link || null} key={index} className='hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                {item.icon}
                <span>{item.text}</span>
              </Link>
            ))

  
        }
      </div>
      <button onClick={handleLogout} className='text-md mt-[100%] hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <BiLogOut className='text-2xl' />
                <span>{loading ? "Logging out...":"Log out"}</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
