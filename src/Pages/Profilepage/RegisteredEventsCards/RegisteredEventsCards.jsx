import './RegisteredEventsCards.css';
import eventImages from "../../../utils/eventImages";

const RegisteredEventsCards = ({ data }) => {
    console.log(data);
    return (
        <div className='rcard-container'>
            <div className="rcard-title">
                <div className="rcard-events">
                    <p className='rcard-heading'>{data.eventName} - {data.categoryName}</p>
                </div>
            </div>
            <div className="rcard-body">
                <div className='rcard-left'>
                    <p className='rcard-text'>{data.teamName}</p>
                    <p className='rcard-text'>{data.member.length} members</p>
                    <div className={`rcard-status ${data.payStatus ? 'paid' : 'rcard-unpaid'}`}>
                        {data.payStatus ? "Paid" : "Non-Paid"}
                        <div className={`rcard-status-box-${data.payStatus ? 'paid' : 'unpaid'}`}></div>
                    </div>
                </div>
                <div className='rcard-right'>
                    <img src={eventImages[data.eventName.toLowerCase()]} alt="Sports event" />
                </div>
            </div>
            <div className="rcard-footer">
            {!data.accommodation && <div className={`rcard-status ${data.payStatus ? 'paid' : 'rcard-unpaid'}`}>
                        Accommodation Not Opted
                        <div className={`rcard-status-box-${data.payStatus ? 'paid' : 'unpaid'}`}></div>
                    </div>}
                    {
                        data.accommodation &&
                        <div className={`rcard-status ${data.payAccommodation ? 'paid' : 'rcard-unpaid'}`}>
                            Accommodation {data.member.length + data.faculty.length} members
                            <div className={`rcard-status-box-${data.payAccommodation ? 'paid' : 'unpaid'}`}></div>
                        </div>
                    }
            </div>
        </div>
    );
};

export default RegisteredEventsCards;