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
      navigate(`/Reg_Pg1`, { state: {...category, "eventName" : name} })
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
                <p className="strong ">Prize Money:&nbsp;</p>
                <span className="card-prize">
                  <span className="pipe">|</span> &nbsp;
                  Winner: &nbsp;<span className="main-prize" >&#8377;{prizeWinner}/-</span> &nbsp;
                  <br/>
                  <span className="pipe">|</span> &nbsp; Runner Up: &nbsp;<span className="main-prize"> &#8377;
                  {prizeRunnerUp}/-</span>
                  
                </span>
              </div>
            </div>
            <div className="button-group">
              <button
                className="card-results"
                onClick={() => navigateToRegistraion()}
                
              >
                Register
              </button>
              <button
                className="card-results"
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
