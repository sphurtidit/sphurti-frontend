import { useState } from "react";
import "./sports_container.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PropTypes from "prop-types";

const SportsContainer = ({ rule, game, type, image, openModal, closeModal, event}) => {
  let col = type == 1 ? "blue" :"red" ;

  return (
    <div className={`sports-container ${col}`}>
    <div className="left-column">
      <div className="containerss">
        <p className="sports-heading">{event.name}</p>
        
        <div className="buttons">
            {event["category"].map((cate, index) => (<button
             // disabled={true}
             title="Registration not open yet"
             className="primary-s"
             onClick={() => openModal(cate, event.name, image)} // Open the modal on button click
           >
             {cate.categoryName}
           </button>))}
          </div>
        </div>
        </div>
      <div className="right-column">
      <img src={image} className="image" alt="Sports event" />
        {/* Modal Component */}
    </div>
    </div>
  );
};

// SportsContainer.propTypes = {
//   type: PropTypes.string,
//   rule: PropTypes.string,
//   game: PropTypes.object.isRequired, // Changed to object
//   image: PropTypes.string.isRequired,
// };

export default SportsContainer;