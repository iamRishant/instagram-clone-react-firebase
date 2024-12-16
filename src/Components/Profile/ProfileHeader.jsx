import React, { useRef, useState } from 'react'
import Avatar from 'react-avatar'
import useUserProfileStore from '../../store/useProfileStore'
import useAuthStore from '../../store/authStore';
import EditProfileModal from '../Modal/EditProfileModal';
import usePreviewImg from '../../hooks/usePreviewImg';
import useEditProfile from '../../hooks/useEditProfile';
import { toast } from 'react-toastify';

const ProfileHeader = () => {

  console.log("wer are here1");
  
  
  
  // now we will get data from the store 
  const {userProfile}=useUserProfileStore();
  const authUser=useAuthStore(state=>state.user);
  
  const visitingOwnProfileAndAuth=authUser && authUser.username===userProfile.username;// checking first if the user is authenticated
  // and the checking if the profile visited by user is his or some one elese profle edit profile button self accoung par dikhega
  const visitingAnotherProfileAndAuth=authUser && authUser.username!==userProfile.username;
  
  // if(!authUser) return null;
  // if(!userProfile) return null;
  console.log("wer are here2");

  const [isOpen,setIsOpen]=useState(false);

  // edit profile button section
  const {editProfile,loading}=useEditProfile();

  const [inputs,setInputs]=useState({
    fullname:'',
    username:'',
    bio:'',
    URL:'',

  })

  const handleEditProfile=async ()=>{
    try {
      await editProfile(inputs);
      setIsOpen(false);
    } catch (error) {
      toast.error(`Error ${error.message}`);
      
    } 
  }

  const handleCancel=(e)=>{
    setIsOpen(false);
    setInputs({...inputs,URL:''})
  }

  return (
    <div className='w-full flex gap-5'>
        <Avatar size='140' round src={userProfile?.profileURL}/>
        <div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='font-semibold'>{userProfile?.username}</h1>
                    {visitingOwnProfileAndAuth && <button onClick={()=>setIsOpen(true)} className='text-black bg-white px-2 py-1 rounded-md font-semibold hover:scale-90 duration-100'>Edit Profile</button>}
                    {visitingAnotherProfileAndAuth && <button className='text-white bg-blue-500 px-2 py-1 rounded-md font-semibold hover:scale-90 duration-100'>Follow</button>}
                    
                </div>
                <div className='flex gap-2 mt-2'>
                    <p className='text-slate-400'><span className='font-semibold text-white'>{userProfile?.posts.length}</span> Posts</p>
                    <p className='text-slate-400'><span className='font-semibold text-white'>{userProfile?.following.length}</span> Followings</p>
                    <p className='text-slate-400'><span className='font-semibold text-white'>{userProfile?.followers.length}</span> Followers</p>
                    
                </div>
                <h1 className='font-bold mt-2'>{userProfile?.fullname}</h1>
                <p className='mt-1 text-sm text-slate-400'>{userProfile?.bio}</p>
        </div>


        {/* when i click edit profile */}

        <EditProfileModal  isOpen={isOpen} onClose={handleCancel}>

        <div onClick={()=>fileRef.current.click()} className="p-6 ">
          
          <h2  className="text-2xl font-semibold mb-4 text-white">Edit Profile</h2>
          {/* <input type="file" hidden ref={fileRef} onChange={handleImageChange} /> */}


          <div className="flex justify-center mb-4">
            <Avatar size='100' round src={inputs.URL || authUser?.profileURL }/>
          </div>
          
          {/* <button className="w-full bg-gray-700 text-white py-2 mb-4 rounded hover:bg-gray-600">
            Edit Profile Picture
          </button> */}

          {/* <form> */}
            
            <div className="mb-4">
              <label className="block text-white mb-1">Profile URL</label>
              <input
                onChange={(e)=>setInputs({...inputs,URL:e.target.value})}
                value={inputs.URL || authUser?.profileURL}
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1">Full Name</label>
              <input
                onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
                value={inputs.fullname || authUser?.fullname}
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div className="mb-4">
              <label className="block text-white mb-1">Username</label>
              <input
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                value={inputs.username || authUser?.username}
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div className="mb-4">
              <label className="block text-white mb-1">Bio</label>
              <textarea
                onChange={(e)=>setInputs({...inputs,bio:e.target.value})}
                value={inputs.bio || authUser?.bio}
                placeholder="Write something about yourself..."
                rows="3"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            
            <div className="flex justify-between">
              <button
                onClick={(e)=>handleCancel(e)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleEditProfile}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          {/* </form> */}
        </div>

              

        </EditProfileModal>

      
    </div>
  )
}

export default ProfileHeader
