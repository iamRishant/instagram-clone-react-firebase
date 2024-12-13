import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Authpage from "./Pages/Authpage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* ToastContainer should be a sibling to the main application structure */}
      <ToastContainer />
      
      <PageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
