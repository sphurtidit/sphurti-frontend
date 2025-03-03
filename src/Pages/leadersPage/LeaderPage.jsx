import React from 'react';
import './Leaderspage.css'; 
import TeamCard from './LeadersCard.jsx'; 
import teamData from './leaderslist.json'; 

const LeadersPage = () => {
  return (
<>
    <div className="team-page">
      <h1>Leaders</h1>
      <div className="team-page-content">
      {Object.keys(teamData).map((sectionTitle) => (
        <div key={sectionTitle} className="team-section">
          <h1 className="section-title">{sectionTitle}</h1>
          <div className="team-container">
            {Object.entries(teamData[sectionTitle]).map(([name, details], index) => (
              <TeamCard
                key={name}
                name={name}
                phone={details.phone}
                image={details.image}
                course={details.course}
                colorIndex={index} 
              />
            ))}
          </div>
        </div>
      ))}
      </div>
      
    </div>
    </>
  );
};

export default LeadersPage;
