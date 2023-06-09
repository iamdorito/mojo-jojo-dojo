import { useState, useEffect } from 'react'
import Sponsors from './Sponsors';
import MojoTestimonial from './MojoTestimonial';
import HimTestimonial from './HimTestimonial';
import UpcomingEvents from '../Events/UpcomingEvents';
import { Link } from 'react-router-dom';

import mojo from '../../assets/mojo.png';
import '../../css/home.css'

export default function Home() {
  const [events, setEvents] = useState([])

  // GET events
  useEffect(() => {
    const fetchEvents = async () => {
      let res = await fetch("/events");
      let eventsData = await res.json();
      setEvents(eventsData);
    };
    fetchEvents();
  },[]);
 return (

  <>
    <section class="bg-white">
      
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-white">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Mojo Jojo Dojo</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            #1 Fight Club of Townsville. Click below for more details on the upcoming events!
            </p>

          <Link to="/upcomingevents">
          <ol class="items-center mb-6 sm:flex">
            {events.map((event) => (
              <li class="relative mb-6 sm:mb-0 hover:scale-110">
                <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.date}</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> {event.name} @ {event.location}</time>
                  {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p> */}
                </div>
              </li>          
              ))}
            </ol>
          </Link>

          <Link to="/upcomingevents"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-lime-600 focus:ring-4 focus:ring-purple-30">
              Events
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
          <Link
            to="/athletes" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              Athletes
          </Link> 
          



        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={mojo} alt="mockup"/>
        </div>                
      </div>
    </div>

    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src={RoadToOne} alt="" /> */}
        <MojoTestimonial />
      </div>
    </div>
    {/* <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white"> */}
        <div className="sticky top-0 h-screen relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src="https://cdn.dribbble.com/users/1808107/screenshots/11460419/media/0631ec21d8c5b09e3c8d1a51154152ea.gif" 
        alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" 
        />
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Titleholders</h2>
            <p className="mt-6 text-lg text-gray-300">
              The least weak athletes
            </p>
          </div>
        </div> */}
      </div>
    {/* </div> */}
    <div className="sticky top-0 h-screen relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <HimTestimonial />
      </div>
    </section>
      {/* <Sponsors /> */}
      </>
    )
  }