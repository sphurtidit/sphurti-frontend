import React, { useEffect, useState } from "react";
import axios from "axios";
import SportsContainer from "../Sports_container/sports_container";
import "./Sports_section.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table_tennis.png";
import SportsCard from "../Sport_Card/Sport_Card"; // Import the BasketballEvent component

const SportsSection = ({ rule , gameDetails = {}}) => {
  const [eventName, setEventName] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [category, setCategory] = useState()

console.log(gameDetails);
  const openModal = (category, eventName) => {
    setIsModalOpen(true); // Open the modal
    setCategory(category)
    setEventName(eventName)
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

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

  const getEventType = (index) => {
    return (index % 3) + 1;
  };

  return (
    <div className="nav-sports">
        <div className="parent-container-sports">
          <div className="heading">
            <h1>SPORTS</h1>
          </div>
          <div className="allsports">
            {gameDetails.map((event, index) => (
              <SportsContainer
                openModal={openModal}
                closeModal={closeModal}
                key={event._id}
                rule={rule}
                event={event}
                type={getEventType(index)}
                image={getImageForEvent(event.name)}
              />
            ))}
          </div>
        </div>
      <SportsCard isOpen={isModalOpen} onClose={closeModal} category={category} eventName={eventName}/>
    </div>
  );
};

export default SportsSection;