import { HashRouter as Router,Route, Routes } from "react-router-dom"
import App from "./App"
import Nav from "./Components/Navbar/nav"
import Gallery_Section from "./Pages/Gallery_Section/Gallery_Section"
import DevelopersPage from "./Pages/Developers Page/developers"
import Loginpage from "./Components/Login/Loginpage"
import Signinpage from "./Components/signup/Signup"
import ComingSoon from "./Components/comingsoon/comingsoon"
import ProfilePage from "./Components/Profilepage/profile"
import RegistrationForm from "./Components/Registration_Page/Registration_Page1";
import TeamRegistration from "./Components/Registration_Page/Registration_Page2";
import FAQPage from "./Components/FAQ/FAQ";
import ResultTable from "./Components/Result_Table/Result_Table";

export const Home=()=>{
    return(
        <main>
        <Router>
        <Routes>    
        <Route path="/" element={<App/>} />
        <Route path="/gallery" element={<Gallery_Section/>} />
        <Route path="/developers" element={<DevelopersPage/>} />
        <Route path="/Loginpage" element={<Loginpage/>}/>
        <Route path="/Signinpage" element={<Signinpage/>}/>
        <Route path="/comingsoon" element={<ComingSoon/>}/>

        <Route path="/Registration_Page1" element={<RegistrationForm/>}/>
        <Route path="/Registration_Page2" element={<TeamRegistration/>}/>
        <Route path="/FAQ" element={<FAQPage/>}/>
        <Route path="/ResultTable" element={<ResultTable/>}/>
        

        <Route path="/profilepage" element={<ProfilePage/>}/>

        </Routes>
       </Router>
       </main>
    )
}