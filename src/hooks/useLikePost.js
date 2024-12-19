import React, { useState } from 'react'
import useAuthStore from '../store/authStore'
import { toast } from 'react-toastify';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';

const useLikePost = (post) => {
  const authUser=useAuthStore(state=>state.user);
  const [loadingLike,setLoading]=useState(false);
  const [likes,setLikes]=useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));

  const handleLikePost = async () => {
    if (loadingLike) return;
    if (!authUser) return toast.error("Error", "You must be logged in to like a post", "error");
    setLoading(true);

    try {
        const postRef = doc(firestore, "posts", post.id);
        await updateDoc(postRef, {
            likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
        });

        setIsLiked(!isLiked);
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
        console.log("done");
        
    } catch (error) {
        toast.error("Error", error.message, "error");
    } finally {
        setLoading(false)
    }
};

return { isLiked, likes, handleLikePost, loadingLike };
}

export default useLikePost
