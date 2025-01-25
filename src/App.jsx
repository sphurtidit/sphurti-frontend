import "./App.css";
import SportsSection from "./Components/Sports_section/Sports_section";
import Main_HeroPage from "./Components/Main_HeroPage/Main_HeroPage";
import TeamSec from "./Components/team_sec/team_sec";
import Footer from "./Components/Footer/Footer";
import Result from "./Components/result/result";
import MessageSection from "./Components/Messages/message-section";
import Nav from "./Components/Navbar/nav";
import axios from "axios";
import { Lines } from "react-preloaders";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./Components/timer/timer";

import React, { useState, useEffect } from "react";
import AccommodationSection from "./Components/Accomodation/Accommodation";

import AccomodationCard from "./Components/Accomodation_2nd/Accomodation_2nd";
function App() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState();
  const isLoggedIn = localStorage.getItem("authToken") != null;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventResponse = await axios.get(
          "https://sphurti-backend.onrender.com/api/events"
        );
        const categoryResponse = await axios.get(
          "https://sphurti-backend.onrender.com/api/eventCategory"
        );
        console.log("test", eventResponse);
        console.log("test2", categoryResponse);
        if (eventResponse.data && categoryResponse.data.eventCategories) {
          const mergedEvents = eventResponse.data.map((event) => {
            const category = categoryResponse.data.eventCategories.filter(
              (cat) => cat.eventId === event._id
            );
            console.log("category -> ",category)

            return {
              ...event,
              category: category || [{}],
            };
          });

          setEvents(mergedEvents);
          console.log("test3", events);
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

  return (
    <>
     <ToastContainer />
      <React.Fragment>
        {!loading && (
          <div className="background-container">
            <Nav />
            <Main_HeroPage />
            <Timer />
            <MessageSection />
            {/* <Tribute /> */}
            <SportsSection gameDetails={events} />
            <AccomodationCard />
            <AccommodationSection />
            <TeamSec />
            <Result />

            <Footer />
          </div>
        )}
        <Lines customLoading={loading} />
      </React.Fragment>
    </>
  );
}

export default App;
