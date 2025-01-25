import React from "react";
import "./Sport_Card.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table tennis.png";

  const getImageForEvent = (eventName) => {
    switch (eventName.toLowerCase()) {
      case "badminton":
        return badmintonimg;
      case "cricket":
        return cricketimg;
      case "football":
        return footballimg;
      case "volleyball":
        return volleyballimg;
      case "basketball":
        return basketballimg;
      case "table tennis":
        return tabletennisimg;
      default:
        return "";
    }
  };
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
  const eventImage = getImageForEvent(eventName);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="borcontent">
          {/* Left Section */}
          <div className="left-section">
            <h1>{eventName}</h1>
            <div className="fees-section"><div className="fe">
              <span className="label">Fees</span>
              <span className="per-team">Per Team</span></div>
              <span className="amount">&#8377;{registrationFees}</span>
            </div>
            <div className="details">
              <div >
                <p className="strong">Prize Money:</p> <br />
                Winners: &#8377;{prizeWinner} &nbsp; 
                <span className="pipe">|</span> &nbsp;
                Runner Up: &#8377;{prizeRunnerUp}
              </div>
              <p>
                <strong>Team Size:</strong> {minNumber} - {maxNumber} players
              </p>
              <div className="details">
              <p className="strong">Schedule: <a href="" className="amt">Download Schedule</a></p>
              <p className="strong">Rule Book:  <a href="" className="amt">Download</a></p>
              </div>
            </div>
            <div className="button-group">
              <button className="results">Register</button>
              <button className="results">Results</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <img
              src={eventImage}
              alt={`${categoryName || "Game"} Player`}
              className="spimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
