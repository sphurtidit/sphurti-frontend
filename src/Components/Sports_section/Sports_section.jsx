import React, { useEffect, useState } from "react";
import axios from "axios";
import SportsContainer from "../Sports_container/sports_container";
import "./Sports_section.css";
import badmintonimg from "../../assets/badminton.png";
import cricketimg from "../../assets/cricket.png";
import footballimg from "../../assets/football.png";
import volleyballimg from "../../assets/volleyball.png";
import basketballimg from "../../assets/basketball.png";
import tabletennisimg from "../../assets/table tennis.png";
import SportsCard from "../Sport_Card/Sport_Card"; // Import the BasketballEvent component

const SportsSection = ({ rule }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventResponse = await axios.get(
          "https://sphurti-backend.onrender.com/api/events"
        );
        const categoryResponse = await axios.get(
          "https://sphurti-backend.onrender.com/api/eventCategory"
        );
        if (eventResponse.data && categoryResponse.data.eventCategories) {
          const mergedEvents = eventResponse.data.map((event) => {
            const category = categoryResponse.data.eventCategories.find(
              (cat) => cat.eventId === event._id
            );
            return {
              ...event,
              category: category || {},
            };
          });

          setEvents(mergedEvents);
        } else {
          console.error("Invalid data structure from backend");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
      {loading ? (
        <div className="loading">Loading...</div>
      ) : events.length === 0 ? (
        <div>No events available</div>
      ) : (
        <div className="parent-container-sports">
          <div className="heading">
            <h1>SPORTS</h1>
          </div>
          <div className="allsports">
            {events.map((event, index) => (
              <SportsContainer
                openModal={openModal}
                closeModal={closeModal}
                key={event._id}
                rule={rule}
                game={{
                  name: event.name,
                  rulebook: event.rulebook,
                  coordinators: {
                    [event.coordinator1]: event.coordinator1Contact,
                    [event.coordinator2]: event.coordinator2Contact,
                  },
                  fees: event.category
                    ? event.category.registrationFees
                    : "N/A",
                  winnerPrize: event.category
                    ? event.category.prizeWinner
                    : "N/A",
                  runnerUpPrize: event.category
                    ? event.category.prizeRunnerUp
                    : "N/A",
                  schedule: event.schedule || "",
                  showprize: true,
                  separate: event.category
                    ? event.category.minNumber !== event.category.maxNumber
                    : false,
                }}
                type={getEventType(index)}
                image={getImageForEvent(event.name)}
              />
            ))}
          </div>
        </div>
      )}
      <SportsCard isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SportsSection;
