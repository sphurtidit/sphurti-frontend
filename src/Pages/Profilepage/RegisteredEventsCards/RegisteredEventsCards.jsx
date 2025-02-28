import './RegisteredEventsCards.css';
import eventImages from "../../../utils/eventImages";

const RegisteredEventsCards = ({ type, image, data }) => {
    return (
        <div className='rcard-container'>
            <div className='rcard-left'>
                <div className="rcard-events">
                    <p className='rcard-heading'>{data.eventName}</p>
                    <h2 className='rcard-heading'>{data.categoryName}</h2>
                </div>
                <h2 className='rcard-text'>{data.teamName}</h2>
                <h2 className='rcard-text'>{data.member.length} members</h2>
                <div className={`rcard-status ${data.payStatus ? 'paid' : 'rcard-unpaid'}`}>
                    {data.payStatus ? "Paid" : "Non-Paid"}
                    <div className={`rcard-status-box-${data.payStatus ? 'paid' : 'unpaid'}`}></div>
                </div>
            </div>

            <div className='rcard-right'>
                <img src={eventImages[data.eventName.toLowerCase()]} alt="Sports event" />
            </div>
        </div>
    );
};

export default RegisteredEventsCards;