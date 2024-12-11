import React from 'react'
import Avatar from 'react-avatar'

const ProfileHeader = ({username}) => {
  return (
    <div className='w-full flex gap-5'>
        <Avatar size='140' round src='/img1.png'/>
        <div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='font-semibold'>{username}</h1>
                    <button className='text-black bg-white px-2 py-1 rounded-md font-semibold hover:scale-90 duration-100'>Edit Profile</button>
                </div>
                <div className='flex gap-2 mt-2'>
                    <p className='text-slate-400'><span className='font-semibold text-white'>4</span> Posts</p>
                    <p className='text-slate-400'><span className='font-semibold text-white'>200</span> Followings</p>
                    <p className='text-slate-400'><span className='font-semibold text-white'>300</span> Followers</p>
                    
                </div>
                <h1 className='font-bold mt-2'>As a Programmer</h1>
                <p className='mt-1 text-sm text-slate-400'>This is simple description</p>
        </div>

      
    </div>
  )
}

export default ProfileHeader
