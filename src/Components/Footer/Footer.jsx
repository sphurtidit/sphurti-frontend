import "./Footer.css";
import {Link} from 'react-router-dom';
import LinkIcon from "../../assets/link.svg";
// import Navbar from "../LogoNavbar/LogoNavbar";
import Sphurti from "../../assets/sphurti.png";
import Naac from "../../assets/naac.png";
import Dit from "../../assets/DIT.png";
import IEEE_Blue from "../../assets/IEEE_Blue.png"
// import { collection, getDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase";
// import { useEffect, useState } from "react";

const Footer = () => {
  // const [link, setLink] = useState();
  // useEffect(() => {
  //   const l = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
  //     setLink(docu.data()["2023"]);
  //     // console.log(docu.data()['rulebook']);
  //     console.log(link)
  //   });
  //   return () => {
  //     l;
  //   };
  // }, []);
  return (
    <>
      <div className="footerContainer">
        <div className="footercontent">
        <p className="footerheader">This website is developed and maintained by the IEEE Student Branch, DIT University.</p>
          {/* <Link to="/developers" ><p className="footermiddle"><img src={LinkIcon} alt="Link Icon" />IEEE technical team</p></Link> */}
         <p className="footermiddle">IEEE technical team</p>

          <p className="footerbottom">Sphurti 2025</p>
        </div>
        <div className="footerlogos">
        <img src={IEEE_Blue} alt="" className="IEEE" />
          <img src={Sphurti} alt="" className="sphurti" />
          <img src={Naac} alt="" className="naac" />
          <img src={Dit} alt="" className="dit" />
        </div>
      </div>
    </>
  );
};

export default Footer;
