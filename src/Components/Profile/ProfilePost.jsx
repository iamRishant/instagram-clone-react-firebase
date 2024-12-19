import React, { useState } from 'react';
import { CommentLogo, NotificationsLogo } from '../../assets/Constants';
import Modal from '../../Components/Modal/Modal';
import Avatar from 'react-avatar';
import { FaDeleteLeft } from 'react-icons/fa6';
import PostFooter from '../FeedPosts/PostFooter';
import Comments from '../Comments/Comments';
import useAuthStore from '../../store/authStore';
import { toast } from 'react-toastify';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../Firebase/firebase';
import usePostStore from '../../store/postStore';
import useUserProfileStore from '../../store/useProfileStore';

const ProfilePost = ({ post,userProfile }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const authUser=useAuthStore(state=>state.user);
  const [isDeleting,setIsDeleting]=useState(false);
  const deletePost=usePostStore(state=>state.deletePost);
  const deletePostFromProfile=useUserProfileStore(state=>state.deletePost);

  const modalClose = () => {
    setModalOpen(false); 
  };

  const handleDeletePost = async () => {

    if(isDeleting) return;// this simple things are optimization that if already deleting then just return
    if(!window.confirm('Are you sure you want to delete this post ?')) return;
    setIsDeleting(true);
    try {

      // users ka posts array me se remove krna hai
      const userRef=doc(firestore,"users",authUser.uid);
      await deleteDoc(doc(firestore,"posts",post.id))// posts collection se delete kiye
      await updateDoc(userRef,{     //doc me se posts array me se delete kiye
        posts:arrayRemove(post?.id)
      })

      // setting store
      deletePost(post.id);//updating the poststore
      deletePostFromProfile(post.id)// updateing the profile store
      toast.success("Post Deleted Successfully");
      
    } catch (error) {
      toast.error("Error deleting post "+error.message);
    }
    finally{
      setIsDeleting(false);
    }
  
  }

  return (
    <>

    <div className="w-[30%] h-[40vh] mr-5 mb-4 relative  cursor-pointer" onClick={() => setModalOpen(true)} >
      <div
        className="flex items-center justify-center absolute top-0 left-0 w-full bg-black h-full hover:opacity-55 opacity-0 duration-150"
      >
        <div className="flex gap-5">
          <div className="flex gap-1">
            <NotificationsLogo />
            <span>{post.comments.length}</span>
          </div>
          <div className="flex gap-1">
            <CommentLogo />
            <span>{post.likes.length}</span>
          </div>
        </div>
      </div>

      <img className="w-full h-full aspect-auto" src={post.imageUrl} alt="" />
      </div>

      {/* {isModalOpen && ( */}

      
        <Modal isOpen={isModalOpen} onClose={modalClose}>
         <div className='w-full  mt-5 flex'>
          {/* left */}
          <div className='w-[50%]'>
            <img className='w-[100%] aspect-auto max-h-[80vh]' src={post?.imageUrl} alt="" />
          </div>

          {/* right */}

          <div className='w-[50%] px-5'>
              <div className='flex items-center justify-between py-2 border-b-2 border-gray-500'>
                <div className='flex items-center gap-2'>
                  <Avatar src={userProfile?.profileURL} size='55' round/>
                  <span>{post?.caption}</span>
                </div>
                  {/* only owner of the post should be able to delete the post */}
                {
                  authUser?.uid === userProfile?.uid && <button onClick={handleDeletePost} className='hover:scale-105 duration-150 hover:text-red-500'>
                    {isDeleting ? "Deleting...":<i class="ri-delete-bin-line"></i>}
                    
                </button>
                }
                
              </div>
              <div className='border-b-2 border-gray-500 overflow-y-scroll max-h-[40vh] py-5'>

                <Comments post={post}/>
              </div>

              <PostFooter post={post} isProfile={true}/>
          </div>
         </div>
        </Modal>
      {/* )} */}
    
    </>
  );
};

export default ProfilePost;
