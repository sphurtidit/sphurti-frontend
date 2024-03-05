import "./Accomodation.css";
import strips from "../../assets/strips.png";
import arrow from "../../assets/arrow.png";
const AccommodationSection = ({rules}) => {

  return (
    <>
      <div  className="Accommodation-Rules">
        <h1>ACCOMMODATION RULES</h1>
        <div className="rules-container">
          <div className="lines">
            <img className="strips" src={strips} alt="strips" />
          </div>
          <div className="download-box">
            <h3 className="download-heading">
              DOWNLOAD THE RULEBOOK FOR ACCOMMODATION
            </h3>
            <a href={rules}>
            <button  className="download-button"><img src={arrow} alt="arrow" /> Download The Rulebook</button></a>
          </div>
          <div className="horizontal-line"></div>
          <div className="registration-box">
            <h1 className="registration-heading">
              REGISTRATION IS OPEN UNTIL
            </h1>
            <h1 className="registration-date">
              <span className="star-red">*</span>
              <span className="star-yellow">*</span>
              <span className="star-purple">*</span>MARCH 10TH 2024
              <span className="star-red">*</span>
              <span className="star-yellow">*</span>
              <span className="star-purple">*</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationSection;
