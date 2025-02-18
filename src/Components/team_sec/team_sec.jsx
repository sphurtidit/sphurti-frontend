import "./team_sec.css";
import PropTypes from "prop-types";

function TeamSec({ teams, sport }) {
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
              <p>Sports Officer</p>
              <p>Phone: 7017366502</p>
            </div>
            <div className="pr-info">
              <h3>Suhandha Saini</h3>
              <p>PR Head</p>
              <p>Phone: 8307179614</p>
            </div>
          </div>
          
          {/* Common Email BELOW the two divs but inside info-container */}
          <p className="common-email">Email: sphurti@dituniversity.edu.in</p>
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
