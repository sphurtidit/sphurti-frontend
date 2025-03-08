import React, { useEffect } from "react";
import "./Result_Table.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ResultTable = () => {
  const matchResults = [
    { teamA: "Alpha Warriors", teamB: "Beta Knights", startTime: "10:00 A.M.", score: "3-2" },
    { teamA: "Delta Titans", teamB: "Gamma Rangers", startTime: "12:00 P.M.", score: "1-4" },
    { teamA: "Omega Spartans", teamB: "Epsilon Eagles", startTime: "2:00 P.M.", score: "0-0" },
    { teamA: "Phoenix Flyers", teamB: "Aurora Stars", startTime: "4:00 P.M.", score: "5-3" },
    { teamA: "Stellar Wolves", teamB: "Orbital Owls", startTime: "8:00 P.M.", score: "1-3" },
  ];

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
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="frame-container">
          <div className="header">
            <div className="results-text">Results</div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th className="header-cell">Team A</th>
                  <th className="header-cell">Team B</th>
                  <th className="header-cell">Start Time</th>
                  <th className="header-cell">Score</th>
                </tr>
              </thead>
              <tbody>
                {matchResults.map((match, index) => (
                  <tr key={index}>
                    <td className="data-cell">{match.teamA}</td>
                    <td className="data-cell">{match.teamB}</td>
                    <td className="data-cell">{match.startTime}</td>
                    <td className="data-cell">{match.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultTable;