import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./nav.css";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Gallery_Button from "../Gallery_Button/Gallery_Button";
import { FaCaretDown } from "react-icons/fa";
import image from "../../assets/yellowline.png";

function Nav() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const navRef = useRef();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showNav = () => {
    navRef.current.classList.toggle("show-nav");
  };

  const handleNavigation = (path) => {
    toggleModal(); // Close the modal before navigation (if modal is open)
    navigate(path); // Redirect to the specified path
  };

  return (
    <nav>
      <div className="logo-left">
        {/* Link the SPHURTI logo to the "home" section */}
        <Link to="home" offset={-80} smooth={true} duration={500}>
          <img src={SPH} alt="SPHURTI" className="logo" />
        </Link>
      </div>
      <div className="main-nav" ref={navRef}>
        <div className="nav-logo-container">
          <img src={DIT} alt="DIT" className="nav-logo" />
          <img src={NAAC} alt="NAAC" className="nav-logo" />
          <img src={SPHURTI} alt="SPHURTI" className="nav-logo" />
        </div>
        <div className="center-button">
          <Link to="home" offset={-80} smooth={true} duration={500}>
            <li onClick={showNav}>HOME</li>
          </Link>
          <Link to="" offset={-80}>
            <li onClick={showNav}>
              <div className="A_section">ARCHIVE</div>
              <FaCaretDown />
              <ul className="dropdown">
                {[...Array(11).keys()].map((i) => {
                  const year = 2024 - i;
                  return (
                    <div key={year} className="content">
                      <a href="#" onClick={toggleModal}>
                        {year}
                      </a>
                    </div>
                  );
                })}
              </ul>
            </li>
          </Link>
          <Link to="nav-sports" offset={-80} smooth={true} duration={500}>
            <li onClick={showNav}>SPORTS</li>
          </Link>
          <Link to="acc-section" offset={-80} smooth={true} duration={500}>
            <li onClick={showNav}>ACCOMMODATION</li>
          </Link>
          <Link to="team-nav" offset={-80} smooth={true} duration={500}>
            <li onClick={showNav}>CONTACT</li>
          </Link>

          <Gallery_Button />

          {/* LOGIN and SIGNUP links */}
          <div className="login_signup">
            <li onClick={() => handleNavigation("/Loginpage")}>LOGIN</li>
            <li onClick={() => handleNavigation("/Signinpage")}>SIGNUP</li>
          </div>
        </div>
        <button className="nav-button nav-close-button" onClick={showNav}>
          <MdClose />
        </button>
      </div>
      <button className="nav-button" onClick={showNav}>
        <GiHamburgerMenu />
      </button>

      {isModalVisible && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="yeldivlin">
            <img src={image} className="image" />
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              ✕
            </button>
            <button
              className="modal-button"
              onClick={() => handleNavigation("/comingsoon")}
            >
              Gallery
            </button>
            <button
              className="modal-button"
              onClick={() => handleNavigation("/comingsoon")}
            >
              Report
            </button>
          </div>
          <div className="yeldivlin">
            <img src={image} className="image" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
