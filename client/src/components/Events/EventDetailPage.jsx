import FightCard from './FightCard'
export default function EventDetailPage({event}) {
return (
    <>
    <section class="bg-white dark:bg-gray-900">
        {event.map((event)=> {
        return(
            <div id="event-info">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <img id="event-image" src={event.poster_img} />

            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{event.name}</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    {event.date}@ {event.location}

                </p>
                
            </div> 
            {event.fights.map((fight) => {
                return(
                    <FightCard fight={fight} />
                )
            })}
        </div>
            {/* <div>
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
            </div> */}
        </div>
        )
    })}            
    </section>
    </>
    )
}
