import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Authpage from "./Pages/Authpage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "./store/authStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/firebase";

function App() {

  //here we need user ka state ki koi user hai ya nhi agar user hai then usko homepage dikhao else navigate to authpage and agar
  // user nhi hai to usko homepage mat dikhao 

  // const authUser=useAuthStore((state)=>state.user);
  const [authUser] =useAuthState(auth);//checking directly from firebase more safe
  return (
    <>


      {/* ToastContainer should be a sibling to the main application structure */}
      <ToastContainer />
      <PageLayout>
        <Routes>
        {/* this is easy way of using protected routes */}
          <Route path="/" element={authUser ? <Homepage/> : <Navigate to={"/auth"}/>} />
          <Route path="/auth" element={!authUser ? <Authpage />:<Navigate to={"/"}/> } />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
