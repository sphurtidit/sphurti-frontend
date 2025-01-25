import "./App.css";
import SportsSection from "./Components/Sports_section/Sports_section";
import Main_HeroPage from "./Components/Main_HeroPage/Main_HeroPage";
import Timer from "./Components/timer/timer";
import TeamSec from "./Components/team_sec/team_sec";
import Footer from "./Components/Footer/Footer";


// import Tribute from "./Components/Tribute/tribute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./Components/comingsoon/comingsoon";

import Result from "./Components/result/result";
// import Messages from "./Components/Messages/Messages";
import MessageSection from "./Components/Messages/message-section";

import Nav from "./Components/Navbar/nav";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
// import Mobile_HeroPage from './Components/Mobile_HeroPage/Mobile_HeroPage'
import { Lines } from "react-preloaders";

import React, { useState, useEffect } from "react";
import AccommodationSection from "./Components/Accomodation/Accommodation";

import AccomodationCard from "./Components/Accomodation_2nd/Accomodation_2nd";
function App() {
  const [loading, setLoading] = useState(true);

  const [team, setTeam] = useState([]);
  const [sport, setSports] = useState([]);
  const [cricket, setcricket] = useState();
  const [football, setfootball] = useState();
  const [volleyball, setvolleyball] = useState();
  const [basketball, setbasketball] = useState();
  const [tabletennis, settabletennis] = useState();
  const [badminton, setbadminton] = useState();
  const [rule, setrule] = useState();
  const [acc, setAcc] = useState();

  // useEffect(() => {
  //   const r = getDocs(collection(db, "Team"))
  //     .then((querySnapshot) => {
  //       setLoading(true);
  //       const temp = querySnapshot.docs.map((doc) => doc.data());
  //       temp.sort((a, b) => a.precedence - b.precedence);
  //       // console.log("heading");
  //       const sports = [];
  //       const teams = [];
  //       temp.map((t) => {
  //         if (t.precedence == -1) {
  //           // console.log(t);
  //           sports.push(t);
  //         } else {
  //           teams.push(t);
  //         }
  //       });

  //       return { sports, teams };
  //     })
  //     .then(({ sports, teams }) => {
  //       // console.log(sports,teams)
  //       setSports(sports);
  //       setTeam(teams);
  //     })
  //     .then(() => {
  //       const r = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
  //         setrule(docu.data()["rulebook"]);
  //         setAcc(docu.data()["accrule"]);
  //         // console.log(docu.data()['rulebook']);
  //       });
  //       const unsub = getDocs(collection(db, "sportDetails")).then(
  //         (querySnapshot) => {
  //           const tempdata = querySnapshot.docs.map((doc) => doc.data());
  //           for (let i = 0; i < tempdata.length; i++) {
  //             if (tempdata[i]["index"] == 1) {
  //               setbadminton(tempdata[i]);
  //             } else if (tempdata[i]["index"] == 2) {
  //               setbasketball(tempdata[i]);
  //             } else if (tempdata[i]["index"] == 3) {
  //               setcricket(tempdata[i]);
  //             } else if (tempdata[i]["index"] == 4) {
  //               setvolleyball(tempdata[i]);
  //             } else if (tempdata[i]["index"] == 5) {
  //               settabletennis(tempdata[i]);
  //             } else if (tempdata[i]["index"] == 6) {
  //               setfootball(tempdata[i]);
  //             }
  //           }
  //         }
  //       );
  //       console.log(r);
  //       console.log(unsub);
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(true);
  //       console.log(error);
  //     });

  //   return () => {
  //     r;
  //   };
  // }, []);
  // // console.log(sport,team);

  return (
    <>
      <React.Fragment>
        <div className="background-container">
          <Nav />
          <Main_HeroPage />
          {/* <Timer /> */}
          <MessageSection />
          {/* <Tribute /> */}
          <SportsSection/>
          <AccomodationCard />
        
          <AccommodationSection/>
          <TeamSec/>
          <Result />
         

          <Footer />
        </div>
        {/* <Lines customLoading={loading} /> */}
      </React.Fragment>
    </>

    
  );
}

export default App;
