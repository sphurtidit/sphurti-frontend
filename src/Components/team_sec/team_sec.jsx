import { useState } from "react";
import "./team_sec.css";
import PropTypes from "prop-types";

function TeamSec({ teams, sport }) {
  const [copied, setCopied] = useState(false);
  const email = "sphurti@dituniversity.edu.in";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset "Copied!" text after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="whole team team-nav" id="contact-section">
      <div className="heading"></div>
      <div className="subheading">
        <h1>CONTACT</h1>
      </div>

      <div className="contact-details">
        <div className="info-container">
          <div className="contact-top">
            <div className="officer-info">
              <h3>Abinav Panwar</h3>
              <p>Sports Officer,<br />
                Dit University</p>
              <p><strong>Phone</strong>: 7017366502</p>
            </div>
            <div className="pr-info">
              <h3>Sugandha Saini</h3>
              <p>PR Head,<br />
                Sphurti 2025</p>
              <p><strong>Phone</strong>: 8307179614</p>
            </div>
          </div>
          
          {/* Email Section with Copy Button */}
          <div className="email-container">
            <p className="common-email">Email: {email}</p>
            <button onClick={copyToClipboard} className="copy-button2">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TeamSec.propTypes = {
  sport: PropTypes.array,
  teams: PropTypes.array,
};

export default TeamSec;
