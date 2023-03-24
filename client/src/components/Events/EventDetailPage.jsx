import FightCard from './FightCard'
export default function EventDetailPage({event}) {
return (
    <>
    {event.map((event)=> {
        return(
            <div id="event-info">
            <img id="event-image" src={event.poster_img} />
            <div>
                <h1 id="event-name">#{event.event_number} {event.name}</h1>
                <h3 id="event-details">{event.date} - {event.location}</h3>
                <p id="description">
                    Description
                    {event.fights.map((fight) => {
                        return(
                            <FightCard fight={fight} />
                        )
                    })}
                </p>
            </div>
        </div>
        )
    })}
    </>
    )
}