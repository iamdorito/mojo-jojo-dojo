import EventCard from './EventCard';
import EventDetailPage from './EventDetailPage';
import FightCard from './Fights/FightCard';

import { useState, useEffect } from 'react'


export default function UpcomingEvents({user}) {
  const [events, setEvents] = useState([])
  const [openNewEventForm, setNewEventForm] = useState(false)
  const [newEvent, setNewEvent] = useState({})
  const [clicked, setClicked] = useState([])


  // GET events
  useEffect(() => {
    const fetchEvents = async () => {
      let res = await fetch("/events");
      let eventsData = await res.json();
      setEvents(eventsData);
    };
    fetchEvents();
  },[]);

  const handleClick = (event) => {
    if (clicked.length === 0 ){
      setClicked([event])
    } else {
      setClicked([])
      setClicked([event])
    }
  }

  return (
  <>
    {/* <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src="https://cdn.dribbble.com/users/1808107/screenshots/11460419/media/0631ec21d8c5b09e3c8d1a51154152ea.gif" 
        alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay tuned to see what's coming up!
          </p>
        </div>
      </div>
    </div> */}
        <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          EVENTS</h2>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-purple-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-purple-500 rounded-full"></span>
        </div>

      </div>
    </div>


    <ol class="items-center sm:flex">
      {events.map((event) => (
        <EventCard 
          user={user}
          event={event}
          handleClick={handleClick}       
        />
      ))}
    </ol>

    <EventDetailPage 
      user={user}
      event={clicked}
      /> 
  </>
  )
}
