import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Sport_Card.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table_tennis.png";

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

const SportsCard = ({
  isOpen,
  onClose,
  gameDetails = {},
  category = {},
  eventName,
  isOdd, // Add isOdd prop
}) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigation = (path) => {};

  if (!isOpen) return null;

  const {
    categoryName = "N/A",
    registrationFees = "N/A",
    prizeWinner = "N/A",
    prizeRunnerUp = "N/A",
    minNumber = "N/A",
    maxNumber = "N/A",
  } = category;

  console.log("details-> ", category);
  const eventImage = getImageForEvent(eventName);
  const col = ["badminton", "cricket", "basketball"].includes(
    eventName.toLowerCase()
  )
    ? "blue"
    : "red";

  return (
    <div className="modolay">
      <div className={`modner ${col}`}>
        <button className="closeon" onClick={onClose}>
          &times;
        </button>

        <div className="borcontent">
          <div className="left-section">
            <h1>{eventName}</h1>
            <span className="categoryname">{categoryName}</span>
            <div className="fees-section">
              <div className="fe">
                <span className="label">Registration Fees</span>
              </div>
              <span className="amount">
                &#8377;{registrationFees}
                <span className="per-team"> Per Team</span>
              </span>
            </div>
            <div className="details">
              <div>
                <p className="strong Subhodeep">Prize Money:</p>
                <span className="prize">
                  {" "}
                  Winners: &#8377;{prizeWinner} &nbsp;
                  <span className="pipe">|</span> &nbsp;Runner Up: &#8377;
                  {prizeRunnerUp}{" "}
                </span>
                {prizeRunnerUp}
              </div>
              {/* <p>
                <strong>Team Size:</strong> {minNumber} - {maxNumber} players
              </p> */}
              <div className="details">
                {/* <p className="strong">
                  Schedule: <a href="" className="amt">Download Schedule</a>
                </p> */}
                <p className="strong">
                  Rule Book:{" "}
                  <a href="" className="amt">
                    Download
                  </a>
                </p>
              </div>
              {/* <div>
                <p className="strong">Coordinators:</p>
                Name:Mobile Number&nbsp;
                <span className="pipe">|</span> &nbsp; Name:Mobile Number
              </div> */}
            </div>
            <div className="button-group">
              <button
                className="results"
                onClick={() => handleNavigation("/Reg_Pg1")}
              >
                Register
              </button>
              <button
                className="results"
                onClick={() => handleNavigation("/comingsoon")}
              >
                Schedule
              </button>
            </div>
          </div>

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
