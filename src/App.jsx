import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import Authpage from "./Pages/Authpage/Authpage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import ProfilePage from "./Pages/ProfilePage/ProfilePage"


function App() {


  return (
    // page layout ke ander wala sbb page layout ka children hai
    <PageLayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/auth" element={<Authpage/>}/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
  )
}

export default App
