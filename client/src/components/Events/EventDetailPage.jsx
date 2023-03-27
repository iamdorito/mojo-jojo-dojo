import FightCard from './FightCard'
export default function EventDetailPage({event}) {

return (
    <>
    <section class="bg-white dark:bg-gray-900">
        {event.map((event)=> {
        return(
            <div id="event-info">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    {/* <img id="event-image" src={event.poster_img} /> */}

                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{event.name}</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        {event.date}@ {event.location}

                    </p> */}
                <div className="container px-6 py-10 mx-auto">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    {event.name}</h2>

                <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-purple-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-purple-500 rounded-full"></span>
                </div>

            <p className="max-w-2xl mx-auto mt-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                {event.date} @ {event.location}
                </p>

                </div>
            </div> 
                {event.fights.map((fight) => {
                    return(
                        <FightCard fight={fight} />
                    )
                })}

            </div>
        </div>
        )
        })}            
    </section>
    </>
)}
