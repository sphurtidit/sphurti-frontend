import {useEffect} from 'react'
import './RegisteredEventsCard.css'

export default function RegisteredEventsCards({ data }) {

    return (
        <div>
            <div className='rcard-container'>
                <h2>{data.eventName}</h2>
                <h3>{data.categoryName}</h3>
            </div>
        </div>
    )
}

