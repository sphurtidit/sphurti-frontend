import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  console.log(hamburgerOpen);
  return (
    <div>
      <div className="nav-container">
        <div>
          <img src={SPH} alt="SPH Logo" className="logo" />
        </div>
        <div>
          <img src={NAAC} alt="NAAC Logo" className="logo" />
        </div>
        <span
          className="hamburger-icon"
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          {hamburgerOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </span>
      </div>
      <div className={`dropdown ${hamburgerOpen ? "show" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/">SPORTS</Link>
        <Link to="#">GENERAL RULES</Link>
        <Link to="#">ORGANISING LEADERS</Link>
        <Link to="#">AMABASSADORS</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="#">ARCHIVE</Link>
        <Link to="#">CONTACT US</Link>
        
        
      </div>
      
    </div>
  );
}

export default Navbar;
