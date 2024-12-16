import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileHeader from '../../Components/Profile/ProfileHeader';
import Profiletabs from '../../Components/Profile/Profiletabs';
import Profileposts from '../../Components/Profile/Profileposts';
import useGetUserProfileByName from '../../hooks/useGetUserProfileByName';

const ProfilePage = () => {
    const navigate=useNavigate();
    const {username}=useParams();
    const{loading,userProfile}=useGetUserProfileByName(username);//custom hook to get user profile data

    if(!loading && !userProfile){
      // mtlb loading bhi nhi ho rha and user bhi nhi hai
      alert("User Not Found");
      navigate('/');// user nhi hai to home page par chale jao
      return;
    }

    // console.log(userProfile);
    
  return (
    <div className='w-full flex flex-col items-center justify-center'>

    <div className='w-[70%]  mx-auto mt-10 p-5'>
        <div className=''>
        {loading && <h1>Loading Profile...</h1>}
        {!loading && userProfile && <ProfileHeader/> }
            
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
