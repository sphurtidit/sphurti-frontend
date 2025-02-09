import React, { useEffect, useState } from "react";
import "./result.css";
import leftimage from "../../assets/left-image.png";
import rightimage from "../../assets/resultbg.png";
import result from "../../assets/result.png";
import { FaArrowDown } from "react-icons/fa6";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import REPORT from "../../assets/resultheader.png";

const Result = () => {
  const [link, setlink] = useState();

  useEffect(() => {
    const l = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
      setlink(docu.data()["2023"]);
    });
    return () => {
      l;
    };
  }, []);

  const openPdf = () => {
    window.open('/Sphurti-2024 Report.pdf', '_blank');
  };
  
  

  let openLink = (dest) => {
    window.open(dest, "_blank");
  };

  return (
    <>
      <div className="heading">
        <h1>RESULTS</h1>
      </div>
      <div className="result-container">
        <div className="left-column">
          {/* <div className="leftimage">
            <img src={leftimage} />
          </div> */}
        </div>

        <div className="middle-column">
          <div className="middlemain">
            <p className="middle-heading">SPHURTI</p>
            <img className="resultimage" src={REPORT} />
          </div>
          <div className="result-buttons">
            <button
              title="2024 Results"
              onClick={openPdf}
            >
              <FaArrowDown />
              2024 Report
            </button>
            {/* <button
              title="2023 Results"
              onClick={() => {
                console.log(link);
                openLink(link);
              }}
            >
              <FaArrowDown />
              2023 Report
            </button> */}
          </div>
        </div>

        <div className="right-column-result">
          <div className="rightimage">
            <img src={rightimage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
