import React, { useEffect, useState } from 'react'
import Feedpost from './Feedpost'
import Loading from '../Loading/Loading';

const Feedposts = () => {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000) // simulate loading delay of 1 second
  },[])



  if(isLoading) return <Loading/>
  return (
    <div className='w-full p-5'>
        <Feedpost img={"/img1.png"} username={"user1"} avatar={"/img1.png"}/>     
        <Feedpost img={"/img2.png"} username={"user2"} avatar={"/img2.png"}/>     
        <Feedpost img={"/img3.png"} username={"user3"} avatar={"/img3.png"}/>     
        <Feedpost img={"/img4.png"} username={"user4"} avatar={"/img4.png"}/>     
           
    </div>
  )
}

export default Feedposts
