import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import "./Navbar.css";

import { Link as ScrollLink, scroller } from "react-scroll";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const navRef = useRef();
  const isLoggedIn = localStorage.getItem("authToken") != null;
  const handleNavigateAndScroll = (path, section) => {
    navigate(path);
    console.log("Navigating to", path);
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }, 1000);
  };
  const showNav = () => {
    navRef.current.classList.toggle("show-nav");
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleNavigation = (path) => {
    toggleModal();
    navigate(path);
  };

  return (
    <div>
      <div className="nav-container" ref={navRef}>
        {/* Logo Container */}
        <div className="logo-container">
          <ScrollLink to="home" offset={-80} smooth={true} duration={500}>
            <img
              src={SPH}
              alt="SPH Logo"
              className="logo"
              onClick={() => handleNavigateAndScroll("/", "home-section")}
            />
          </ScrollLink>
          <img
            src={NAAC}
            alt="NAAC Logo"
            className="logo"
            onClick={() => window.open("http://www.naac.gov.in/", "_blank")}
            style={{ cursor: "pointer" }}
          />

          <img
            src={DIT}
            alt="DIT Logo"
            className="logo"
            onClick={() =>
              window.open("https://www.dituniversity.edu.in", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
        </div>
        {!isLoggedIn ? (
          <div className="login-btn" onClick={() => navigate("/Loginpage")}>
            Login
          </div>
        ) : (
          <div className="login-btn" onClick={() => navigate("/ProfilePage")}>
            Profile
          </div>
        )}

        <span
          className="hamburger-icon"
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          {hamburgerOpen ? <X size={32} /> : <Menu size={32} />}
        </span>
      </div>

      <div className={`dropdown-container ${hamburgerOpen ? "show" : ""}`}>
        <div className="dropdown">
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/", "home-section")}
          >
            <div>HOME</div>
          </ScrollLink>
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/", "sports-section")}
          >
            <div>SPORTS</div>
          </ScrollLink>
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/RulesSection")}
          >
            <div>GENERAL RULES</div>
          </ScrollLink>
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/Coordinators")}
          >
            <div>STUDENT COORDINATORS</div>
          </ScrollLink>
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/AMBASSADORS_page")}
          >
            <div>AMBASSADORS</div>
          </ScrollLink>
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/FAQ")}
          >
            <div>FAQ</div>
          </ScrollLink>
          {/* <ScrollLink to="" offset={-80}>
                      <div onClick={showNav}>
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
                      </div>
                    </ScrollLink> */}
          <ScrollLink
            offset={-80}
            onClick={() => handleNavigateAndScroll("/", "contact-section")}
          >
            <div>CONTACT US</div>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
