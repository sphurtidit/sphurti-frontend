import React, { useState } from "react";
import "./paymodal.css";
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

function PayModal({ show, onClose, data }) {
  const [total, setTotal] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index, amount) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [index]: !prev[index] };

      // Calculate total dynamically
      const newTotal = Object.keys(newCheckedItems)
        .filter((key) => newCheckedItems[key])
        .reduce((sum, key) => sum + data[key].amount, 0);

      setTotal(newTotal);
      return newCheckedItems;
    });
  };

  if (!show) return null; // Don't render if modal is closed

  return (
    <div className="pay-modal-overlay">
      <div className="pay-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Select for Payment</h2>
        {data.map((sport, index) => (
          <div className="container1" key={index}>
            <div className="container2">
              <div className="sports-images">
                <img src={getImageForEvent(sport.eventName)} alt={sport.name} />
              </div>
              <div className="text-of-sports">{sport.teamName}</div>
            </div>
            <div className="prize">
              {sport.amount}/-
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index, sport.amount)}
              />
            </div>
          </div>
        ))}
        <hr />
        <div className="total">
          <div className="total2">Total:</div>
          <div>{total}/-</div>
        </div>
        <div className="modal-buttons">
          <button className="proceedpay">Proceed to Pay</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PayModal;
