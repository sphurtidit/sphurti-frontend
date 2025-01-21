import React from "react";
import "./Sport_Card.css";

const SportsCard = ({ isOpen, onClose, gameDetails = {}, category = {} , eventName}) => {
  if (!isOpen) return null;

  // Destructure category details
  const {
    categoryName = "N/A",
    registrationFees = "N/A",
    prizeWinner = "N/A",
    prizeRunnerUp = "N/A",
    minNumber = "N/A",
    maxNumber = "N/A",
  } = category;
  console.log('details-> ', category)

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          {/* Left Section */}
          <div className="left-section">
            <h1>{eventName}</h1>
            <div className="fees-section">
              <span className="label">Fees</span>
              <span className="per-team">Per Team</span>
              <span className="amount">&#8377;{registrationFees}</span>
            </div>
            <div className="details">
              <p>
                <strong>Prize Money:</strong> <br />
                Winners: &#8377;{prizeWinner} &nbsp; <span className="pipe">|</span> &nbsp;
                Runner Up: &#8377;{prizeRunnerUp}
              </p>
              <p>
                <strong>Team Size:</strong> {minNumber} - {maxNumber} players
              </p>
            </div>
            <div className="button-group">
              <button className="register">Register</button>
              <button className="results">Results</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <img
              src="basketball.png"
              alt={`${categoryName || "Game"} Player`}
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
