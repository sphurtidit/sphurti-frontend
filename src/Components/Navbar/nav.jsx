import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./nav.css";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink, scroller } from "react-scroll";
import Button from "../Button/Button";
import { FaCaretDown } from "react-icons/fa";
import image from "../../assets/yellowline.png";

function Nav() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const navRef = useRef();
  const isLoggedIn = localStorage.getItem("authToken") != null;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showNav = () => {
    navRef.current.classList.toggle("show-nav");
  };

  const handleNavigateAndScroll = (path, section) => {
    navigate(path); // Navigate to the target page
    console.log("Navigating to", path);
    setTimeout(() => {
      // Scroll to the section after navigation
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80, // Adjust offset for sticky navbar
      });
    }, 1000); // Delay to ensure the page is fully loaded
  };

  const handleNavigation = (path) => {
    toggleModal();
    navigate(path);
  };

  return (
    <nav>
      <div className="main-nav" ref={navRef}>
        <div className="logo-left">
          <ScrollLink to="home" offset={-80} smooth={true} duration={500}>
            <img src={SPH} alt="SPHURTI" className="logo" />
          </ScrollLink>
        </div>
        <div className="center-button">
          <ScrollLink>
            <li onClick={() => handleNavigateAndScroll("/", "home-section")}>
              HOME  
            </li>
          </ScrollLink>
          <ScrollLink offset={-80}>
            <li onClick={() => handleNavigateAndScroll("/", "sports-section")}>
              SPORTS
            </li>
          </ScrollLink>
          <ScrollLink offset={-80}>
            <li onClick={() => handleNavigateAndScroll("/comingsoon")}>
              GENERAL RULES
            </li>
          </ScrollLink>
          <ScrollLink offset={-80}>
            <li onClick={() => handleNavigateAndScroll("/comingsoon")}>
              ORGANISING LEADERS
            </li>
          </ScrollLink>
          <ScrollLink offset={-80}>
            <li onClick={() => handleNavigateAndScroll("/comingsoon")}>
            AMABASSADORS
            </li>
          </ScrollLink>
          <ScrollLink offset={-80}>
            <li
              onClick={() =>
                handleNavigateAndScroll("/comingsoon")
              }
            >
              FAQ
            </li>
          </ScrollLink>
          <ScrollLink to="" offset={-80}>
            <li onClick={showNav}>
              <div className="A_section">ARCHIVE</div>
              <ul className="dropdown">
                {[...Array(11).keys()].map((i) => {
                  const year = 2024 - i;
                  return (
                    <div key={year} className="saaj">
                      <a href="#" onClick={toggleModal}>
                        {year}
                      </a>
                    </div>
                  );
                })}
              </ul>
            </li>
          </ScrollLink>
        
         
          {/* <ScrollLink offset={-80}>
            <li
              onClick={() =>
                handleNavigateAndScroll("/gallery", "gallery-section")
              }
            >
              GALLERY
            </li>
          </ScrollLink> */}
          <ScrollLink offset={-80}>
            <li
              onClick={() =>
                handleNavigateAndScroll("/", "contact-section")
              }
            >
              CONTACT US
            </li>
          </ScrollLink>
        </div>
        <div className="right-side">
          {isLoggedIn ? (
            <Button text={"PROFILE"} onClick={() => navigate("/ProfilePage")} />
          ) : (
            <Button text={"LOGIN"} onClick={() => navigate("/Loginpage")} />
          )}
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
          <div className="modal-saaj" onClick={(e) => e.stopPropagation()}>
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
