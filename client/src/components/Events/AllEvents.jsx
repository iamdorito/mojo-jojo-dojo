import EventCard from './EventCard';
import EventDetailPage from './EventDetailPage';
import FightCard from './FightCard';

import { useState, useEffect } from 'react'


export default function UpcomingEvents() {
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
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src="https://cdn.dribbble.com/users/1808107/screenshots/11460419/media/0631ec21d8c5b09e3c8d1a51154152ea.gif" 
        alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Upcoming Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay tuned to see what's coming up!
          </p>
        </div>
      </div>
    </div>

    <ol class="items-center sm:flex">
      {events.map((event) => (
        <EventCard 
          event={event}
          handleClick={handleClick}       
        />
      ))}
    </ol>

    <EventDetailPage event={clicked}/> 
  </>
  )
}
