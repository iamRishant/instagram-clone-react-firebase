import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreatePostLogo } from '../../assets/Constants'
import CreatePostModal from '../Modal/CreatePostModal'
import useCreatePost from '../../hooks/useCreatePost'
import { toast } from 'react-toastify'
import usePostStore from '../../store/postStore'

const Create = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [URL, setURL] = useState('');
  const [caption,setCaption]=useState('');
  const{loading,handleCreatePost}=useCreatePost();
  // const userPost=usePostStore(state=>state.posts);
  // console.log(userPost);
  

  const handleCloseModal=()=>{
    setIsOpen(false);
    setURL('');
  }

  const handlePostCreation=async()=>{
    try {
      await handleCreatePost(URL,caption);
      setIsOpen(false);
      setCaption('');

    } catch (error) {
      toast.error("Error occurred while creating "+error.message)
    }
  }
  return (
    <>
        <button onClick={()=>setIsOpen(true)} className='w-full hover:font-semibold flex items-center gap-4 hover:bg-[#1A1A1A] duration-300 rounded-lg px-2 py-3 mb-3 cursor-pointer'>
                <CreatePostLogo/>
                <span>Create</span>
        </button>  

        <CreatePostModal isOpen={isOpen} onClose={handleCloseModal}>
            <div className="bg-black rounded-lg shadow-lg p-6 w-[400px] relative text-white">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold">Create Post</h2>
              
            </div>

            {/* Input Field */}
            <textarea
              value={caption}
              onChange={(e)=>setCaption(e.target.value)}
              className="w-full bg-gray-800 rounded-md text-white p-2 mb-4 outline-none resize-none h-28"
              placeholder="Post caption..."
            ></textarea>

            {/* Image Icon */}
            <div className="flex items-center mb-4 w-full border-2  rounded-lg">
              <label className="cursor-pointer w-full">
                <input value={URL} onChange={(e)=>setURL(e.target.value)} type="text" placeholder='URL of image ' className='bg-transparent outline-none w-full p-2' />
              </label>
            </div>
            {URL.length>0 && <div className='flex flex-col gap-1 my-4'>
              <img src={URL} alt="Input Valid URL" className='rounded-lg ' />
              <button className='w-20 py-2 bg-gray-800 hover:bg-gray-700 rounded-md' onClick={()=>setURL('')}>Clear URL</button>
            </div> }

            {/* Post Button */}
            <button onClick={handlePostCreation} className="w-20 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
              {loading ? "Posting...":"Post"}
            </button>
          </div>
        </CreatePostModal>
    </>
  )
}

export default Create
