import "./Accomodation_2nd.css";
import Card from "../../assets/cards.png";
import dates from "../../assets/dates.png";
import comingsoon from "../../assets/accomodation-detail.png";

const AccomodationCard = () => {
  return (
    <div className='acc-section'>
    <div className="cards-container">
    <div className="heading"><h1>ACCOMMODATION</h1></div>
    <br />
    <img src={comingsoon} className="csoon" alt="comingsoon" />
  <br />

  <div className="apply">
          <button>APPLY NOW</button>
        </div>
    {/* <div className="cards">
        <img src={Card} alt="" className="card-img"></img>
    </div>
    <a href="https://forms.gle/XoDEt8h4vGrLdwpz9" target="_blank"><button className="apply">Apply Now</button></a>
    <p>* The Accommodation Registration Fee is Non Refundable</p> */}
      </div>
      </div>
  );
};

export default AccomodationCard;
 