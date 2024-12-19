import React from 'react'
import Comment from './Comment'

const Comments = ({post}) => {
  console.log(post);
  
  return (
    <>
    {
      post.comments.map((singleComment)=>{
        return <Comment singleComment={singleComment}/>
      })
    }
      
      
      
    </>
  )
}

export default Comments
