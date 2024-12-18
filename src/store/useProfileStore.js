import { create } from 'zustand';

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: state.userProfile?.posts ? [post.id, ...state.userProfile.posts] : [post.id],
      },
    })),
    deletePost:(postId)=>set((state)=>({
      userProfile:{
        ...state.userProfile,// keep all the things
        posts:state.userProfile.posts.filter((id)=>id!==postId)// it will update the post array 
      },
    }))
}));

export default useUserProfileStore;
