import React, { useState } from "react";
import "./paymodal.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table_tennis.png";

function PayModal() {
  const sports = [
    { name: "Badminton", price: 1500 },
    { name: "Cricket", price: 1500 },
    { name: "Football", price: 1500 },
    { name: "Volleyball", price: 1500 },
    { name: "Basketball", price: 1500 },
    { name: "Table Tennis", price: 1500 }
  ];

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

  const [total, setTotal] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index, price) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [index]: !prev[index] };
      const newTotal = Object.keys(newCheckedItems)
        .filter((key) => newCheckedItems[key])
        .reduce((sum, key) => sum + sports[key].price, 0);
      setTotal(newTotal);
      return newCheckedItems;
    });
  };

  return (
    <div className="paymodepage">
      {sports.map((sport, index) => (
        <div className="container1" key={index}>
          <div className="container2">
            <div className="sports-images">
              <img src={getImageForEvent(sport.name)} alt={sport.name} />
            </div>
            <div className="text-of-sports">{sport.name}</div>
          </div>
          <div className="prize">
            {sport.price}/- <input type="checkbox" checked={checkedItems[index] || false} onChange={() => handleCheckboxChange(index, sport.price)} />
          </div>
        </div>
      ))}
      <hr />
      <div className="total"><div className="total2"> Total: </div><div>{total}/-</div></div>
      <button type="button" className="proceedpay">Proceed to pay</button>
    </div>
  );
}

export default PayModal;
