import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Sport_Card.css";
import useUserStore from "../../store/userStore";
import useInfoStore from "../../store/infoStore";


const openRules = (pdf) => {
  console.log(pdf)
  if (pdf) {
    window.open(pdf, "_blank"); // Opens PDF in new tab
  }
};

const SportsCard = ({
  isOpen,
  onClose,
  category = {},
  name,
  isOdd,
  image,
  rules,
}) => {
  const {user } = useUserStore();
  const setInfo = useInfoStore.getState().setInfo;
  const navigate = useNavigate(); 
  if (!isOpen) return null;

  const navigateToRegistraion = () => {
    if(user){
      console.log("Category Data:", category);
      navigate(`/Reg_Pg1`, { state: category })
    }else{
      setTimeout(() => {
        setInfo("Please login to register to events", "error");
      }, 1000);
      navigate("/Loginpage");
    }
  };

  const {
    categoryName = "N/A",
    registrationFees = "N/A",
    prizeWinner = "N/A",
    prizeRunnerUp = "N/A",
    minNumber = "N/A",
    maxNumber = "N/A",
  } = category;

  const col = ["badminton", "cricket", "basketball"].includes(
    name.toLowerCase()
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
            <h1>{name}</h1>
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
                  <span className="pipe">|</span> &nbsp;
                  Winners: &#8377;{prizeWinner} &nbsp;
                  <br/>
                  <span className="pipe">|</span> &nbsp; Runner Up: &#8377;
                  {prizeRunnerUp}{" "}
                  
                </span>
                {prizeRunnerUp}
              </div>
              {/* <p>
                <strong>Team Size:</strong> {minNumber} - {maxNumber} players
              </p> */}
              {/* <div className="details">
                <p className="strong">
                  Schedule: <a href="" className="amt">Download Schedule</a>
                </p>
                <p className="strong">
                  Rule Book:{" "}
                  <a href="" className="amt">
                    Download
                  </a>
                </p>
              </div> */}
              {/* <div>
                <p className="strong">Coordinators:</p>
                Name:Mobile Number&nbsp;
                <span className="pipe">|</span> &nbsp; Name:Mobile Number
              </div> */}
            </div>
            <div className="button-group">
              <button
                className="results"
                onClick={() => navigateToRegistraion()}
              >
                Register
              </button>
              <button
                className="results"
                onClick={() => openRules(rules)}
              >
                Rules
              </button>
            </div>
          </div>

          <div className="right-section">
            <img
              src={image}
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
