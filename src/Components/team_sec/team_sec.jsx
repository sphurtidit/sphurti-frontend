import "./team_sec.css";
import TeamCard from "../team_card/team_card";
import PropTypes from "prop-types";
import comingsoon from "../../assets/comingsoon.png";
import sportsOfficer from "../../assets/sportsOfficer.svg";

function TeamSec({ teams, sport }) {
  // console.log(teams,sport);

  // useEffect(()=>{

  //   const r=getDocs(collection(db,"Team")).then((querySnapshot)=>{
  //     const temp=querySnapshot.docs.map((doc)=>doc.data());
  //     temp.sort((a,b)=>a.precedence-b.precedence);
  //     const sportss=[]
  //     const teamss=[]
  //     temp.map((t)=>{
  //       if(t.category=="Sports Coordinator"){
  //         sportss.push(t)
  //       }
  //       else{
  //         teamss.push(t)
  //       }

  //     })
  //     setSports(sportss);
  //     setTeam(teamss)

  //   })

  //   return ()=>{
  //     r;
  //   }
  // },[])

  return (
    <div className="whole team team-nav" id="contact-section">
      <div className="heading">{/* <h1>OUR TEAM</h1> */}</div>
      <div className="subheading">
        <h1>CONTACT</h1>
        <h2>FACULTY CO-ORDINATOR</h2>
        {/* <img className='csoon' src={comingsoon} alt="csoon" /> */}
      </div>
      {/* <div className="FacultyCard">
        {sport.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}

      </div> */}
      
        <div className="sport-card">
          <img className="officer" src={sportsOfficer} alt="sportsOfficer" />

        </div>
      

      {/* <TeamCard key={"-----"} name={"-------"} designation={"--------"} phone={"---------"} image={""} type={"---------"} /> */}
      {/* <div className="subheading">
        <h1>STUDENT COORDINATOR</h1>
      </div>
      <div className="StudentCard">
      {teams.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}
      </div> */}
    </div>
  );
}
TeamSec.propTypes = {
  sport: PropTypes.array,
  teams: PropTypes.array,
};

export default TeamSec;
