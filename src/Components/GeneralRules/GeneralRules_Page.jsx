import React from "react";
import "./GeneralRules_Page.css";
import Nav from "../Navbar/nav";
import Footer from "../Footer/Footer";

const generalRules = [
  "The tournament is only open to regular, legitimate university or college students.",
  "Students enrolled in distance learning programs or open universities are not permitted to play on the squad.",
  "For each game in which the institution is participating, students should present a legitimate letter from the head, registrar, sport officer, or other equivalent position, giving each student's name and details.",
  "The registration process must be completed online exclusively. When reporting on the ground, the registration evidence must be brought along with the proof of payment for the charge.",
  "In a single game, only one squad from a single institute will be allowed. A student from any of the university's constituent colleges may be a member of the team when the university offers regular courses, even though his/her college is not registered in the game.",
  "Only a legitimate letter sent via any official institution mail address would be accepted as a member/squad of the team.",
  "Every participant needs to have a valid chest number and be wearing their officially approved attire.",
  "Every player is required to have a physical copy of their driver's license, voter ID, college ID card, and AADHAR card. No photocopies or phone copies of the aforementioned documents will be allowed.",
  "If participants lose any important stuff, the university will not be held accountable.",
  "For all events, the sports officials' decisions shall be final and binding.",
  "Any team that leaves the field of play for any reason will be considered to have lost the game.",
  "All pupils should retain their decency during the sporting event and it is forbidden to use unparliamentary words/language.",
  "It is strictly forbidden for players, officials, and any support staff to smoke, drink, or use any unlawful substances or medications. Anyone convicted will not be permitted to take part in any of the activities of Sphurti 2025.",
  "Participants are required to follow the guidelines set forth by SPHURTI 2025.",
  "The officiating umpires have complete authority and discretion over situations such as walkovers, play abandonment, disputes, and a reduction in match time due to bad weather, bad light, and other unforeseen reasons.",
  "The registration fee will be lost and no claim will be considered if the team does not report within the allotted time and is considered a walkover.",
  "Any team that declines to participate in a match without providing a valid reason will be disqualified from the competition and registration fees will not be refunded.",
  "Each event has a limited number of spots, so early registration is encouraged."
];

const protestRules = [
  "Any team that wants to register a protest must pay a charge of Rs 5,000 (Rupees five thousand only) and do so before the game ends.",
  "Before the game is over, a team must fulfill the requirements to file the objection, which include paying the protest money and providing a written justification that explicitly mentions the challenge point.",
  "The recorded protest will be reviewed once the match is over, but the match itself won't be interrupted.",
  "No protest shall be entertained after the final whistle/declaration of match over by the officials of the match."
];

const RulesSection = () => {
  return (
    <div className="foot">
    <div className="rules-container-GR">
      <Nav />
      <div className="rules-box">
        <h1>SPHURTI 2025 - General Rules</h1>
        <ul className="rules-list">
          {generalRules.map((rule, index) => (
            <li key={index} className="rules-item">
              <span className="rules-text">• {rule}</span>
            </li>
          ))}
        </ul>
        <div className="protest-box">
          <h2>Protest</h2>
          <ul className="rules-list">
            {protestRules.map((rule, index) => (
              <li key={index} className="rules-item">
                <span className="rules-text">• {rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="final-statement">
        *The rules and regulations may be amended and organizers have the right to do so*.
      </p>
     
    </div>
    <Footer />
    </div>
       
  );
 
};

export default RulesSection;
