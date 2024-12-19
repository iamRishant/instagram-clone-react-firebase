import React from 'react'
import Avatar from 'react-avatar'

const Comment = ({singleComment}) => {
  console.log(singleComment);
  
  return (
    <>
      <div className='flex gap-2 mt-5 border-b-[1px] border-b-gray-500 pb-2'>
                {/* <Avatar src={img} round size='40'/> */}
                <div className='flex flex-col items-start  gap-1 text-sm'>
                    {/* <p className='font-bold'>{username}</p> */}
                    {/* <p className='font-sm text-gray-500'>{time}</p> */}
                </div>
                <p className='font-md'>{singleComment.comment}</p>
        </div>
    </>
  )
}

export default Comment
