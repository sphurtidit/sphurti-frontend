import "./HeroPage.css";
import CenterBGI from "../../assets/sphurtibg.png"; // Keeping only the center image
import BgMobile from "../../assets/sphurtiphonebg.png";

const HeroPage = () => {
  return (
    <>
        <div className="center-container">
          <img src={CenterBGI} alt="" className="center"/> {/* Keeping only the center image */}
        </div>
    </>
  );
};

export default HeroPage;
