import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Gallery_Section from "./Pages/Gallery_Section/Gallery_Section";
import DevelopersPage from "./Pages/Developers Page/developers";
import Loginpage from "./Pages/Login/Loginpage";
import Signinpage from "./Pages/signup/Signup";
import ComingSoon from "./Pages/comingsoon/comingsoon";
import ProfilePage from "./Pages/Profilepage/profile";
import RegistrationForm from "./Pages/Registration_Page/Registration_Page1";
import TeamRegistration from "./Pages/Registration_Page/Registration_Page2";
import FAQPage from "./Pages/FAQ/FAQ";
import ResultTable from "./Components/Result_Table/Result_Table";
import RulesSection from "./Pages/GeneralRules/GeneralRules_Page";
import Ambassadors from "./Pages/AMBASSADORS/AMBASSADORS_page";
import CoordinatorsPage from "./Pages/coordinators/Coordinators";

export const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery_Section />} />
        <Route path="/developerspage" element={<DevelopersPage />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Signinpage" element={<Signinpage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/Reg_Pg1" element={<RegistrationForm />} />
        <Route path="/Reg_Pg1/:id" element={<RegistrationForm />} />
        <Route path="/Reg_Pg2" element={<TeamRegistration />} />
        <Route path="/Reg_Pg2/:id" element={<TeamRegistration />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/ResultTable/:id" element={<ResultTable />} /> 
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/AMBASSADORS_page" element={< Ambassadors />} />
        <Route path="/RulesSection" element={<RulesSection />} />
        <Route path="/Coordinators" element={<CoordinatorsPage />} />
      </Routes>
    </Router>
  );
};
