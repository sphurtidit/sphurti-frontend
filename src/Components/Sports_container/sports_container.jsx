import { useState } from "react";
import "./sports_container.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PropTypes from "prop-types";

const SportsContainer = ({ rule, game, type, image, openModal, closeModal }) => {

  let col = type == 1 ? "yellow" : type == 2 ? "red" : "purple";
  let sch = game["schedule"] !== "";

  return (
    <div className={`sports-container ${col}`}>
      <div className="left-column">
        <div className="container">
          <p className="sports-heading">{game["name"]}</p>

          <div className="buttons">
            <button
              // disabled={true}
              title="Registration not open yet"
              className="primary-s"
              onClick={() => openModal(game)} // Open the modal on button click
            >
              Girls
            </button>
            <button title="detail" className="primary-s" onClick={openModal}>
              Boys
            </button>
          </div>
        </div>
      </div>
      <div className="right-column">
        <img src={image} className="image" alt="Sports event" />
      </div>
    </div>
  );
};

SportsContainer.propTypes = {
  type: PropTypes.string,
  rule: PropTypes.string,
  game: PropTypes.object.isRequired, // Changed to object
  image: PropTypes.string.isRequired,
};

export default SportsContainer;
