import React from 'react'
import 'ldrs/quantum'


const Loading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <l-quantum
        size="145"
        speed="1.75"
        color="white" 
        ></l-quantum>
    </div>
  )
}

export default Loading
