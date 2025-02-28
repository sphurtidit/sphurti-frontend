import './LeadersCard.css';

const LeadersCard = ({ name, phone, image, course, colorIndex }) => {
    const cardColor = colorIndex % 2 === 0 ? 'red-card' : 'blue-card';
    return (
      <div className={`team-card ${cardColor}`}>
        <div className="team-card-inner">
          
          <div className="team-card-front">
            <img src={image} alt={name} className="team-image" />
          </div>
          <div className="team-card-back">
            <h2>{name}</h2>
            <p>{course}</p>
            {phone && <p>{phone}</p>}
          </div>
        </div>
      </div>
    );
};

export default LeadersCard;
