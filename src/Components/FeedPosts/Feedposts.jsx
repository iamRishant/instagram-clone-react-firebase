import React, { useEffect, useState } from 'react'
import Feedpost from './Feedpost'
import Loading from '../Loading/Loading';
import useGetFeedsPost from '../../hooks/useGetFeedsPost';

const Feedposts = () => {
  const {loading,posts}=useGetFeedsPost();
  



  if(loading) return <Loading/>
  return (
    <div className='w-full p-5'>
        {
          !loading && 
          !posts.length>0 ? <h1>Follow People to see their Posts</h1> :
          posts.map((post)=>{
            return <Feedpost post={post}/>
          })
        }   
           
    </div>
  )
}

export default Feedposts
