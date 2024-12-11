import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <>
      <Comment img={"/img1.png"} username={"Edin Rose"} text={"Looking Good"} time={"5h"}/>
      <Comment img={"/img2.png"} username={"Karan Veer"} text={"Good"} time={"8h"}/>
      <Comment img={"/img3.png"} username={"Vivian Dsena"} text={"Noice"} time={"2h"}/>
      <Comment img={"/img4.png"} username={"Chum Darang"} text={"Looking Good"} time={"4h"}/>
      
      
    </>
  )
}

export default Comments
