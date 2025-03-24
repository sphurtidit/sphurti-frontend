import "./HeroPage.css";
import CenterBGI from "../../assets/sphurtibg.png"; // Keeping only the center image

const HeroPage = () => {
  return (
    <>
      
      <div className="center-container" id="home-section">
        <img src={CenterBGI} alt="Hero Background" className="center" />
      </div>
    </>
  );
};

export default HeroPage;
