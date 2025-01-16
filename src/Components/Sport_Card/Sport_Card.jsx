import React, { useState } from "react";
import "./Sport_Card.css";

const SportsCard = ({ isOpen, onClose, gameDetails = {} }) => {
  if (!isOpen) return null;

  const {
    name = "N/A",
    fees = "N/A",
    winnerPrize = "N/A",
    runnerUpPrize = "N/A",
    schedule,
    rulebook,
    coordinators = {},
  } = gameDetails;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          {/* Left Section */}
          <div className="left-section">
            <h1>{name}</h1>
            <div className="fees-section">
              <span className="label">Fees</span>
              <span className="per-team">Per Team</span>
              <span className="amount">&#8377;{fees}</span>
            </div>
            <div className="details">
              <p>
                <strong>Prize Money:</strong> <br />
                Winners: &#8377;{winnerPrize} &nbsp; <span className="pipe">|</span> &nbsp;
                Runner Up: &#8377;{runnerUpPrize}
              </p>
              <p>
                <strong>Schedule:</strong>{" "}
                {schedule ? (
                  <a href={schedule} target="_blank" rel="noopener noreferrer">
                    Download Schedule
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
              <p>
                <strong>Rule Book:</strong>{" "}
                {rulebook ? (
                  <a href={rulebook} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
            <div className="coordinators">
              <p>
                <strong>Coordinators:</strong>
              </p>
              {Object.keys(coordinators).length > 0 ? (
                Object.entries(coordinators).map(([key, value], index) => (
                  <p key={index}>
                    {key}: {value || "N/A"}
                  </p>
                ))
              ) : (
                <p>Not Available</p>
              )}
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
              alt={`${name || "Game"} Player`}
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
