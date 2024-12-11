import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import Loading from '../../Components/Loading/Loading'
const Profileposts = () => {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000) // simulate loading delay of 1 second
  },[])


  if(isLoading) return <Loading/>
  return (
    <div className='w-full flex flex-wrap mt-5'>
        <ProfilePost img={"/img1.png"}/>    
        <ProfilePost img={"/img2.png"}/>    
        <ProfilePost img={"/img3.png"}/>    
        <ProfilePost img={"/img4.png"}/>    
    </div>
  )
}

export default Profileposts
