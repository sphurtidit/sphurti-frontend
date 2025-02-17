import React, { useState } from "react";
import SportsContainer from "../Sports_container/sports_container";
import "./Sports_section.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table_tennis.png";
import SportsCard from "../Sport_Card/Sport_Card";

const SportsSection = ({ rule, gameDetails = [] }) => {
  const [eventName, setEventName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState("");

  console.log("Game Details:", gameDetails);

  const openModal = (category, eventName) => {
    setIsModalOpen(true);
    setCategory(category);
    setEventName(eventName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    return (index % 2) + 1;
  };

  return (
    <div className="nav-sports" id="sports-section">
      <div className="parent-container-sports">
        <div className="heading">
          <h1>SPORTS</h1>
        </div>
        <div className="allsports">
          {Array.isArray(gameDetails) && gameDetails.length > 0 ? (
            gameDetails.map((event, index) => (
              <SportsContainer
                openModal={openModal}
                closeModal={closeModal}
                key={event._id || index}
                rule={rule}
                event={event}
                type={getEventType(index)}
                image={getImageForEvent(event.name || "")}
              />
            ))
          ) : (
            <p>No sports events available</p>
          )}
        </div>
      </div>
      <SportsCard
        isOpen={isModalOpen}
        onClose={closeModal}
        category={category}
        eventName={eventName}
      />
    </div>
  );
};

export default SportsSection;