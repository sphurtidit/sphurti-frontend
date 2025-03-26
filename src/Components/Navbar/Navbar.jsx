import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import "./Navbar.css";
import useEventStore from "../../store/eventStore";
import { Link as ScrollLink, scroller } from "react-scroll";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const navRef = useRef();
  const isLoggedIn = localStorage.getItem("authToken") != null;

  const events = useEventStore((state) => state.events);

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

        <div className="schedule-btn" onClick={() => setScheduleOpen(!scheduleOpen)}>
          Schedule
        </div>
        <span className={`schedule-dropdown ${scheduleOpen ? "show" : ""}`}>
          {events.map((event) => (
            <div key={event.name} className="dropdown-item">
              {event.name}
              <div className="sub-dropdown">
               {event["eventCategory"].map((cate, index) => (<div
              // disabled={true}
              key={index}
              onClick={() => navigate(`/ResultTable/${cate._id}`,{state:{...cate, "eventName":event.name}})}
            >
              <span className="btn-text">{cate.categoryName}</span>
            </div>))}
              </div>
            </div>
          ))}
        </span>

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
