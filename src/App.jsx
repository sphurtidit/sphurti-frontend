import "./App.css";
import SportsSection from "./Components/Sports_section/Sports_section";
import Main_HeroPage from "./Components/HeroPage/HeroPage";
import TeamSec from "./Components/team_sec/team_sec";
import Footer from "./Components/Footer/Footer";
import Result from "./Components/result/result";
import MessageSection from "./Components/Messages/message-section";
import Nav from "./Components/Navbar/nav";
import { Lines } from "react-preloaders";
import Timer from "./Components/timer/timer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useUserStore from "./store/userStore";
import useEventStore from "./store/eventStore";

import React, { useState, useEffect } from "react";
import AccommodationSection from "./Components/Accomodation/Accommodation";

import AccomodationCard from "./Components/Accomodation_2nd/Accomodation_2nd";
function App() {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = localStorage.getItem("authToken") != null;
  const fetchUser = useUserStore.getState().fetchUser;
  const fetchEvents = useEventStore.getState().fetchEvents;
  const events = useEventStore((state) => state.events);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      await fetchUser();
      await fetchEvents();
      setLoading(false);
    }
    fetchData();
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
