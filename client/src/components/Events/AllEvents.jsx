import image1 from '../../assets/wc-1.png';
import image2 from '../../assets/wc-2.png';
import image3 from '../../assets/wc-3.png';
import image4 from '../../assets/wc-4.png';
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
      <img src={image1} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#322c9f" />
            <stop offset={1} stopColor="#red" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Upcoming Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay tuned to see what's coming up!
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">    
      <nav className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
        {events.map((event) => (
          <EventCard 
            event={event}
            handleClick={handleClick}       
          />
        ))}
      </nav>
    </div>
    <EventDetailPage event={clicked}/> 
  </>
  )
}
