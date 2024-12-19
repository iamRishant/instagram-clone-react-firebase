
import { create } from 'zustand';

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  setPosts: (posts) => set({ posts }),
  
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id), 
    })),

  addComment: (postId, newComment) =>
    set((state) => ({
      posts: state.posts.map((post) => {//sare posts par iterate krke wo post dhunde jisme change krna hai
        if (post.id === postId) {
          return {
            ...post,//post ke sare properties ko spread kr diye 
            comments: [...post.comments, newComment],//aur usme comments section ko update kar diye comment getting added to last
          };
        }
        return post;// finally wo wala updated post return kar diye and baaki bhi post return hoga...jo update nhi hua hai
      }),
    })),
  
    
}));

export default usePostStore;


// set function takes previous state and do modification in it