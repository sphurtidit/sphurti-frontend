import React, { useEffect, useState } from "react";
import "./Result_Table.css";
import Nav from "../Navbar/Navbar";
import useEventStore from "../../store/eventStore";
import { useLocation, useParams } from "react-router-dom";

const ResultTable = () => {
  const location = useLocation();
  const { id } = useParams(); // ✅ Corrected useParams usage
  const receivedData = location.state;

  const fetchSchedule = useEventStore((state) => state.getScheduleByCategoryId);
  const [schedule, setSchedule] = useState([]); // ✅ State to store schedule

  useEffect(() => {
    if (id) {
      fetchSchedule(id).then((data) => {
      console.log("data fetched", data.data);
        setSchedule(data.data); // ✅ Store fetched schedule
      });
    }
  }, [id, fetchSchedule]); // ✅ Dependencies added

  return (
    <div className="frame-container">
      <Nav />
      <div className="reg-heading">{receivedData.eventName}</div>
      <div className="reg-categoryname">{receivedData.categoryName}</div>
      <div className="header">
        <div className="results-text">Schedule</div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="header-cell">Match Name</th>
              <th className="header-cell">Team A</th>
              <th className="header-cell">Team B</th>
              <th className="header-cell">Venue</th>
              <th className="header-cell">Start Time</th>
              <th className="header-cell">Score</th>
            </tr>
          </thead>
          <tbody>
            {schedule.length > 0 ? (
              schedule.map((match, index) => (
                <tr key={index}>
                  <td className="data-cell">{match.matchName}</td>
                  <td className="data-cell">{match.teamA}</td>
                  <td className="data-cell">{match.teamB}</td>
                  <td className="data-cell">{match.venue}</td>
                  <td className="data-cell">{match.startTime}</td>
                  <td className="data-cell">{match.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="data-cell">No schedule available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
