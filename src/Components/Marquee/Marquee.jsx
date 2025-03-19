import React from "react";
import "./Marquee.css"; // Separate CSS file for styling

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span id="text1">🚨 Registrations for Cricket are Closed !!! 🚨</span>
      </div>
    </div>
  );
};

export default Marquee;
