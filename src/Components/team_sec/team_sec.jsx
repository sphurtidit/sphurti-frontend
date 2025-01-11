import './team_sec.css'
import TeamCard from '../team_card/team_card'
import PropTypes from "prop-types";



function TeamSec({teams,sport}) {
  // console.log(teams,sport);
  console.log(sport)
 
    
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
    <div className="whole team team-nav">
      <div className="heading">
        <h1>OUR TEAM</h1>
      </div>

      <div className="subheading">
        <h1>FACULTY COORDINATOR</h1>
      </div>
      {/* <div className="FacultyCard">
        {sport.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}

      </div> */}
      <TeamCard key={"-----"} name={"-------"} designation={"--------"} phone={"---------"} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fcolorful-coming-soon-composition-with-flat-design-coming-soon-sign-color-vector-illustration-image450751939.html&psig=AOvVaw1i3l08IohZxPSu-97Sk6jx&ust=1736530763077000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjE8dCJ6YoDFQAAAAAdAAAAABAK"} type={"---------"} />
      {/* <div className="subheading">
        <h1>STUDENT COORDINATOR</h1>
      </div>
      <div className="StudentCard">
      {teams.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}
      </div> */}
    </div>
  )
}
TeamSec.propTypes = {
  sport: PropTypes.array,
  teams: PropTypes.array,
  
};

export default TeamSec;
