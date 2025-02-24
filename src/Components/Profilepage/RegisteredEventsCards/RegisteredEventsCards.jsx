import {useEffect} from 'react'
import './RegisteredEventsCard.css'
import useEventStore from '../../../store/eventStore'

export default function RegisteredEventsCards({ data }) {

    const { events, fetchEvents } = useEventStore();

    useEffect(() => {
        if (events.length === 0) {
            fetchEvents(); // Only fetch if no events exist
        }
    }, [events, fetchEvents]);
    const eventData = events.find((event) => event._id === data.eventId);
    const categoryData = eventData.eventCategory.find((category) => category._id === data.catId);

    console.log("event", eventData.name);
    console.log("category", categoryData.categoryName);
    console.log("data", data);

    return (
        <div>
            <div className='rcard-container'>
                <h2>{eventData.name}</h2>
                <h3>{categoryData.categoryName}</h3>
            </div>
        </div>
    )
}

