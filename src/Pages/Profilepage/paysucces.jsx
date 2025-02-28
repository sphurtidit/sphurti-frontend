import React from "react";
import "./paysuccess.css";

import lowertri from "../../assets/lowertriangle.png";
import uppertri from "../../assets/uppertri.png";
function PaySuccess() {
  return (
    <div className="mainbox">
      <div className="uppersection">
        <div className="icon-container">
        <img src ={uppertri} alt="triangle" />
        </div>
        <div><img src ={lowertri} alt="triangle" /></div>
      </div>
      <div className="lowersection">
        <h1>Success!</h1>
        <p>Your payment received successfully.</p>
        <button className="payment">Continue</button>
      </div>
    </div>
  );
}

export default PaySuccess;

