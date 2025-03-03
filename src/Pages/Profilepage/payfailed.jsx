import React from "react";
import "./payfailed.css";

import redupper from "../../assets/redupper.png";
import redlower from "../../assets/redlower.png";
function PayFailed() {
  return (
    <div className="redmainbox">
      <div className="reduppersection">
        <div className="icon-container-red">
        <img src ={redupper} alt="triangle" />
        </div>
        <div><img src ={redlower} alt="triangle" /></div>
      </div>
      <div className="redlowersection">
        <h1>Oh Sorry!</h1>
        <p>Your previous Transaction was failed.</p>
        <button className="paymentred">Try Again</button>
      </div>
    </div>
  );
}

export default PayFailed;

