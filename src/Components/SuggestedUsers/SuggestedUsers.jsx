import React from 'react'
import SuggestedUserHeader from './SuggestedUserHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser'




const SuggestedUsers = () => {
  const {loading,suggestedUser}=useGetSuggestedUser();
  return (
    <div className='w-full px-5'>
        <SuggestedUserHeader/>
        {
          suggestedUser.length>0 && <div className='flex items-center justify-between mt-5 mb-8'>
            <span className='text-gray-500 text-sm font-semibold'>Suggested For You</span>
            <button className='text-sm font-semibold text-white'>See All</button>
        </div>
        }
        
        {
          loading?"Loading...":suggestedUser.map((singleUser)=>{
            return <SuggestedUser key={singleUser.id} user={singleUser}/>
          })
        }
        <a target='_blank' href="https://www.linkedin.com/in/iamrishant/">

        <p>© 2024 Built By <span className='text-blue-500 hover:underline cursor-pointer'>Rishant Rana</span></p>
        </a>
      
    </div>
  )
}

export default SuggestedUsers
