import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import Profiletabs from '../../Components/Profile/Profiletabs';
import Profileposts from '../../Components/Profile/Profileposts';

const ProfilePage = () => {

    const {username}=useParams();
  return (
    <div className='w-full flex flex-col items-center justify-center'>

    <div className='w-[70%] border-2 mx-auto mt-10 p-5'>
        <div className=''>
            <ProfileHeader username={username}/>
        </div>
        <div className='border-t-2 border-t-slate-500 mt-5 px-5 w-full'>
            <Profiletabs/>
            <Profileposts/>
        </div>     
    </div>
    </div>
  )
}

export default ProfilePage
