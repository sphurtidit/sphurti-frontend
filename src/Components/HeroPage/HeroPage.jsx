import "./HeroPage.css";
import CenterBGI from "../../assets/sphurtibg.png"; // Keeping only the center image

const HeroPage = () => {
  return (
    <>
      <div className="main-container-d">
      {/* <div className="register-button">
          <button>Register</button>
        </div> */}
        
        <div className="center-container">
          <img src={CenterBGI} alt="" className="center"/> {/* Keeping only the center image */}
        </div>
      
      </div>
    </>
  );
};

export default HeroPage;
