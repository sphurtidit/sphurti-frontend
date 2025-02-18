import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import "./Navbar.css";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div>
      <div className="nav-container">
        {/* Logo Container */}
        <div className="logo-container">
          <img src={SPH} alt="SPH Logo" className="logo" />
          <img src={NAAC} alt="NAAC Logo" className="logo" />
          <img src={DIT} alt="DIT Logo" className="logo" />
        </div>

        <Link to="/login" className="login-btn">Login</Link>

        {/* Hamburger Icon */}
        <span
          className="hamburger-icon"
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          {hamburgerOpen ? <X size={32} /> : <Menu size={32} />}
        </span>
      </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-container ${hamburgerOpen ? "show" : ""}`}>
        <div className="dropdown">
          <Link to="/">Home</Link>
          <Link to="/">Sports</Link>
          <Link to="#">General Rules</Link>
          <Link to="#">Organising Leaders</Link>
          <Link to="#">Ambassadors</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="#">Archive</Link>
          <Link to="#">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
