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
import SportsCard from "../Sport_Card/Sport_Card";

const SportsSection = ({ gameDetails = {} }) => {
  const [eventName, setEventName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [category, setCategory] = useState();
  const [displayImg, setDisplayImg] = useState();
  const openModal = (category, event, image) => {
    setIsModalOpen(true); // Open the modal
    setCategory(category);
    setEventName(event);
    setDisplayImg(image);
    console.log(eventName);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const rulesPDFs = {
    badminton: "/pdfs/badminton_rules.pdf",
    cricket: "/pdfs/cricket_rules.pdf",
    football: "/pdfs/football_rules.pdf",
    volleyball: "/pdfs/volleyball_rules.pdf",
    basketball: "/pdfs/basketball_rules.pdf",
    // "table tennis": "/pdfs/table_tennis_rules.pdf",
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
          {gameDetails.map((event, index) => (
            <SportsContainer
              openModal={openModal}
              closeModal={closeModal}
              key={event._id}
              rule={rulesPDFs[event.name]}
              event={event}
              type={getEventType(index)}
              image={getImageForEvent(event.name)}
            />
          ))}
        </div>
      </div>
      <SportsCard
        isOpen={isModalOpen}
        onClose={closeModal}
        category={category}
        name={eventName}
        image={displayImg}
        rules={rulesPDFs[eventName.toLowerCase()]}
      />
    </div>
  );
};

export default SportsSection;
