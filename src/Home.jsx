import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import App from "./App"
import Nav from "./Components/Navbar/nav"
import Gallery_Section from "./Pages/Gallery_Section/Gallery_Section"
import DevelopersPage from "./Pages/Developers Page/developers"
import Loginpage from "./Components/Login/Loginpage"
import Signinpage from "./Components/signup/Signup"
import ComingSoon from "./Components/comingsoon/comingsoon"
import RegistrationForm from "./Components/Registration_Page/Registration_Page1"
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
        <Route path="/registrationpage" element={<RegistrationForm/>}/>
        </Routes>
       </Router>
       </main>
    )
}