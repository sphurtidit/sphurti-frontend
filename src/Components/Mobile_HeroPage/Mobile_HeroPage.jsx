import './Mobile_HeroPage.css';
import BgMobile from '../../assets/BgMobile.svg';
import MobileBG_2 from '../../assets/Mobile_BG_2.svg';

const Mobile_HeroPage = () => {
    return (
        <>
        <div className="main-container">
            <div className="top-section">
                <img src={BgMobile} alt="" className="top"/>
            </div>
            <div className="bottom-section">
                <img src={MobileBG_2} alt="" className="top"/>
            </div>
            <div className="button-section">
                <button href="/" className="register">Register</button>
            </div>
        </div>
        </>
    )
}

export default Mobile_HeroPage;