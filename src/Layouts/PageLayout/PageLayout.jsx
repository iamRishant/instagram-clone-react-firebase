import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {

    const {pathname}=useLocation();
    const isAuthPage=pathname==='/auth';
  return (
    <div className='bg-[#000000] min-h-screen flex text-white'>
    {/* only show side bar if it is not an auth page */}
        {isAuthPage?null:(
            <div className='w-[20vw] border-r-2 border-r-[#262626]'>
                <Sidebar/>
            </div>
        )}
        

        <div className='w-[100vw]'>
            {children}
        </div>
    </div>
  )
}

export default PageLayout
