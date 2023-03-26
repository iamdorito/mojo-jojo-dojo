import { useState } from 'react'
// import logo from '../../assets/logos/wc-logo.png'
// import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'
import EventDetailPage from './EventDetailPage'


export default function EventCard({ handleClick, event }) {
//  need to add conditionals to only show upcoming 4 events for dates after today
    return (
    <div onClick={()=>{handleClick(event)}} key={event.id} classNameName="group relative">
        <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        
        <div className="mt-3 sm:pr-8">
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">#{event.event_number} {event.name}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date} @ {event.location}</time>
            <img src=
                {event.poster_img ? 
                    event.poster_img : 
                    "https://he-s3.s3.amazonaws.com/media/uploads/d70c703.jpg"
                }                
                alt="event promo"
                classNameName="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
        </li>
    </div>
)}