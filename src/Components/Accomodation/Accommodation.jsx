import "./Accomodation.css";

import arrow from "../../assets/arrow.png";
import { PropTypes } from 'prop-types';


const pdf = () => {
  window.open('/rulebook.pdf', '_blank');
};

const AccommodationSection = ({rules}) => {

  return (
    <>
      <div  className="Accommodation-Rules">
        <h1>ACCOMMODATION RULES</h1>
        <div className="rules-container">
          {/* <div className="lines">
            <img className="strips" src={strips} alt="strips" />
          </div> */}
          <div className="download-box">
            <h3 className="download-heading">
              DOWNLOAD THE RULEBOOK FOR ACCOMMODATION
            </h3>
            <a href={rules}>
            <button onClick={pdf} className="download-button1"><img src={arrow} alt="arrow" /> Download The Rulebook</button></a>
          </div>
          <div className="horizontal-line"></div>
          <div className="registration-box">
            <h1 className="registration-heading">
            REGISTRATION ARE OPEN UNTILL             </h1>
            <h1 className="registration-date">

              MARCH 24<sup>ND</sup>   2025
              
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

AccommodationSection.propTypes = {
  rules: PropTypes.string,
};

export default AccommodationSection;