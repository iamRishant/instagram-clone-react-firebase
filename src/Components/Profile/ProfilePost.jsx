import React, { useState } from 'react';
import { CommentLogo, NotificationsLogo } from '../../assets/Constants';
import Modal from '../../Components/Modal/Modal';
import Avatar from 'react-avatar';
import { FaDeleteLeft } from 'react-icons/fa6';
import PostFooter from '../FeedPosts/PostFooter';
import Comments from '../Comments/Comments';

const ProfilePost = ({ img }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(false); 
  };

  return (
    <>

    <div className="w-[30%] h-[40vh] mr-5 mb-4 relative  cursor-pointer" onClick={() => setModalOpen(true)} >
      <div
        className="flex items-center justify-center absolute top-0 left-0 w-full bg-black h-full hover:opacity-55 opacity-0 duration-150"
      >
        <div className="flex gap-5">
          <div className="flex gap-1">
            <NotificationsLogo />
            <span>7</span>
          </div>
          <div className="flex gap-1">
            <CommentLogo />
            <span>4</span>
          </div>
        </div>
      </div>

      <img className="w-full h-full aspect-auto" src={img} alt="" />
      </div>

      {/* {isModalOpen && ( */}

      
        <Modal isOpen={isModalOpen} onClose={modalClose}>
         <div className='w-full  mt-5 flex'>
          {/* left */}
          <div className='w-[50%]'>
            <img className='w-[100%] aspect-auto max-h-[80vh]' src={img} alt="" />
          </div>

          {/* right */}

          <div className='w-[50%] px-5'>
              <div className='flex items-center justify-between py-2 border-b-2 border-gray-500'>
                <div className='flex items-center gap-2'>
                  <Avatar src={img} size='55' round/>
                  <span>asaprogrammer_</span>
                </div>
                <i class="ri-delete-bin-line"></i>
              </div>
              <div className='border-b-2 border-gray-500 overflow-y-scroll max-h-[40vh] py-5'>

              <Comments/>
              </div>

              <PostFooter isProfile={true}/>
          </div>
         </div>
        </Modal>
      {/* )} */}
    
    </>
  );
};

export default ProfilePost;
