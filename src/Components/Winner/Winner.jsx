import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Winner.css";

const WinnerCard = ({ name, course, phone, color }) => {
  return (
    <div className={`winner-card ${color}`}>
      <h3>{name}</h3>
      <p>{course}</p>
      <p>{phone}</p>
    </div>
  );
};

const Winner = () => {
  return (
    <div>
      <Navbar />
      <div className="winner-section">
        <h1 className="winner-title">WINNERS</h1>

        <div className="winner-group">
          <h2>1ST POSITION</h2>
          <div className="winner-row">
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="red"
            />
          </div>
        </div>

        <div className="winner-group">
          <h2>2ND & 3RD</h2>
          <div className="winner-row">
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="red"
            />
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
          </div>
        </div>

        <div className="winner-group">
          <h2>5TH, 6TH & 7TH</h2>
          <div className="winner-row">
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="red"
            />
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
          </div>
        </div>

        <div className="winner-group">
          <h2>8TH, 9TH & 10TH</h2>
          <div className="winner-row">
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
            <WinnerCard
              name="NAME"
              course="COURSE"
              phone="93XXXXXXX7"
              color="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;