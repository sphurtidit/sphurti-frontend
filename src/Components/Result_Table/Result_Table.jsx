import React, { useEffect } from "react";
import "./Result_Table.css";
import Nav from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const ResultTable = () => {
  const location = useLocation();
  const receivedData = location.state;
  console.log(receivedData);

  useEffect(() => {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const scoreCell = row.cells[3];
      const scoreText = scoreCell.textContent.trim();
      const [teamAScore, teamBScore] = scoreText.split("-").map(Number);

      if (teamAScore > teamBScore) {
        row.cells[0].style.backgroundColor = "lightgreen";
        row.cells[1].style.backgroundColor = "lightcoral";
      } else if (teamAScore < teamBScore) {
        row.cells[0].style.backgroundColor = "lightcoral";
        row.cells[1].style.backgroundColor = "lightgreen";
      }
    });
  }, []);

  return (
      <div className="frame-container">
      <Nav/>
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
            <tr>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
            </tr>
            <tr>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
            </tr>
            <tr>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
            </tr>
            <tr>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
              <td className="data-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
