import React from "react";
import "./BasketballEvent.css"; // External CSS file for styling

const BasketballEvent = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Basketball</h1>
        <div className="fees-section">
          <span className="label">Fees</span>
          <span className="per-team">Per Team</span>
          <span className="amount">&#8377;1500</span>
        </div>
        <div className="details">
          <p>
            <strong>Prize Money:</strong> <br />
            Winners: &#8377;99 &nbsp; <span className="pipe">|</span> &nbsp; Runner
            Up: &#8377;99
          </p>
          <p>
            <strong>Schedule:</strong> <a href="#">Download Schedule</a>
          </p>
          <p>
            <strong>Rule Book:</strong> <a href="#">Download</a>
          </p>
        </div>
        <div className="coordinators">
          <p><strong>Coordinators:</strong></p>
          <p>Name &nbsp; <span className="pipe">|</span> &nbsp; Name</p>
        </div>
        <div className="button-group">
          <button className="register">Register</button>
          <button className="results">Results</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src="basketball.png" alt="Basketball Player" className="image" />
      </div>
    </div>
  );
};

export default BasketballEvent;