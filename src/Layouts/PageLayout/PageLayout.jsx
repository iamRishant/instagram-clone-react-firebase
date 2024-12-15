import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading/Loading'
import Navbar from '../../Components/Navbar/Navbar';

const PageLayout = ({children}) => {

    const {pathname}=useLocation();
    // const isAuthPage=pathname==='/auth';
    const [user, loading, error] = useAuthState(auth);
    const canRender= pathname!=='/auth' && user;//user ka state pehle hi check kar le rhe hai taaki screen flicker na kre

    // also agr user authenicated nhi hai and koi doosra page khole to wha usko login and signup buttton dikhna chahiye
    const canRenderNavbar=!user && !loading && pathname!=='/auth';

    if(loading) return <Loading/>
  return (
    <div className='bg-[#000000] min-h-screen flex text-white'>
        {/* show navbar if user is not authenicated */}
        {
            canRenderNavbar?<Navbar/>:null
        }
    {/* only show side bar if it is not an auth page */}

        {canRender?(
            <div className='w-[20vw] border-r-2 border-r-[#262626]'>
                <Sidebar/>
            </div>
        ):null}
        

        <div className='w-[100vw]'>
            {children}
        </div>
    </div>
  )
}

export default PageLayout
