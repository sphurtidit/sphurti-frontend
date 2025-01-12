import { useState } from "react";
import "./sports_container.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import flag from "../../assets/flag.png";
import PropTypes from "prop-types";

const SportsContainer = ({type, image, name}) => {
  const [showContent, setShowContent] = useState(false);
  const viewDetails = () => {
    setShowContent(!showContent);
  };
  let col = type == 1 ? "yellow" : type == 2 ? "red" : "purple";
  let exp = showContent ? "expanded" : "";
  // let sch = game["schedule"] == "" ? false : true;

  // console.log(game["name"]);
  return (
    <div className={`sports-container ${col} ${exp}`}>
      <div className="left-column">
        <div className="container">
          <p className="sports-heading">{name}</p>
          <div className="reg">
            <img src={flag}></img>
            <p className="reg-text">REGISTRATION</p>
            <img src={flag}></img>
          </div>
          <div className="fee">
            <div className="fee-text">
              <p className="fees">FEES</p>
              <p className="team">PER TEAM</p>
            </div>
            <div className="fee-text">
              <p className="cate">BOYS</p>
              <p className="cate-fees">₹{/* {game['fees-boys']} */}</p>
              </div>
              <div className = "fee-text"> 
              {name === 'Badminton' || name === 'Basketball' || name === 'Volley Ball' ? <>
                <p className="cate">GIRLS</p>
                <p className="cate-fees">₹{/* {game['fees-boys']} */}</p>
                </> : name === "Table Tennis" ? <>
                <p className="cate">MIXED (DOUBLES)</p>
                <p className="cate-fees">₹{/* {game['fees-boys']} */}</p>
                </> : <></>}
            </div>
          </div>

          <div className="buttons">
            <button
              title={
                "Registration Not Open"
              }
              className={"primary-s disabled-reg"}
              disabled={true}
              onClick={() => {
                window.open("https://forms.gle/m6F4P47PQ86q53Hy9", "_blank");
              }}
            >
              Register
            </button>
            <button title="detail" className="secondary" onClick={viewDetails}>
              {showContent ? (
                <>
                  View Less <MdKeyboardArrowUp />{" "}
                </>
              ) : (
                <>
                  View More <MdKeyboardArrowDown />{" "}
                </>
              )}
            </button>
          </div>
        </div>
        {showContent && (
          <div className="details">
            <div className="hr">
              <hr></hr>
            </div>
            {/* {game["showprize"] ? (
              <>
                <p className="prize">Prize Money:</p>
                <div className="amount">
                  <p className="winner">Winners: ₹{game["winner"]}</p>
                  <div className="vertical-line"></div>
                  <p className="runner">Runner Up: ₹{game["runnerup"]}</p>
                </div>
              </>
            ) : (
              <>
                <br />
              </>
            )} */}
            <div className="schedule">
              <p className="sch-text">Schedule:</p>
              {false ? (
                <a
                  href={game["schedule"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Schedule
                </a>
              ) : (
                <p className="sch-text">Coming Soon</p>
              )}
            </div>
            <div className="schedule">
              <p className="sch-text">Rule Book:</p>
              <p className="sch-text">Coming Soon</p>
              {/* <a href={} download>
                Download
              </a> */}
            </div>
            <div className="coord">
              <p className="coord-text">Coordinators:</p>
              <div className="finfo">
                {/* {Object.entries(game["coordinators"]).map(([key, value]) => (
                  <div className="cinfo" key={key}>
                    <p className="cname">{key}:</p>
                    <p className="cmob">{value}</p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="right-column">
        <img src={image} className="image"></img>
      </div>
    </div>
  );
};

SportsContainer.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default SportsContainer;


// {game["separate"] ? (
//   <>
//     <div className="vertical-line"></div>
//     <div className="fee-text">
//       {game["name"] == "TABLE TENNIS" ? (
//         <p className="cate">MIXED (Doubles)</p>
//       ) : (
//         <p className="cate">GIRLS</p>
//       )}
//       <p className="cate-fees">₹{/* {game['fees-girls']} */}</p>
//     </div>{" "}
//   </>
// ) : (
//   <></>
// )}
