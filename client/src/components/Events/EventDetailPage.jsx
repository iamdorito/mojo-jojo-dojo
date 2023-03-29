import { useState, useEffect } from 'react'
import FightCard from './Fights/FightCard'
import NewFightForm from './Fights/NewFightForm'
import { useNavigate, Link } from "react-router-dom";

export default function EventDetailPage({ event, user }) {
    const [fights, setFights] = useState([])
    const [openNewFightForm, setOpenNewFightForm] = useState(false)
    // const [openUpdateFightForm, setUpdateNewFightForm] = useState(false)
    const [newFight, setNewFight] = useState({})

    // Add new fighter to list
  const onAddFight = (newFight) => {
    setFights((fights) => [...fights, newFight])
  }

return (
    <>
    <section class="bg-white dark:bg-gray-900">
        {event.map((event)=> {
        return(
        <div id="event-info">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

    <section class="relative py-20 md:py-40 overflow-hidden">
  <div class="absolute top-0 right-0 w-1/4 sm:w-2/5 lg:w-1/3 "></div>
  <div class="relative container px-4 mx-auto">
    
    <div class="flex flex-wrap -mx-4 items-end">
      <div class="w-full lg:w-1/3 px-4 lg:pb-24">
        <div class="md:max-w-sm">

          <span class="block font-heading font-semibold text-3xl">{event.name}</span>
          <h1 class="text-7xl xs:text-9xl lg:text-10xl font-heading font-extrabold mb-18">{event.date}</h1>
          <p class="max-w-sm text-2xl mb-20">{event.location}</p>
          <a class="group relative inline-block h-16 w-full sm:w-52 bg-blueGray-900 rounded" href="#">
            <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              {/* <div class="flex h-full w-full items-center justify-center bg-blue-500 border-2 border-blueGray-900 rounded">
                <span class="text-base font-semibold uppercase">all teamates</span>
              </div> */}
              <Link to="/athletes">
              <div className="text-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
              <button 
                className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12">
                  All Athletes
                </button>
                </div>
              </Link>
            </div>
          </a>
        </div>
      </div>
      <div class="hidden lg:block w-full lg:w-2/3 lg:-ml-22 px-4">

          {event.fights.map((fight) => {
              return(
                <FightCard user={user} fight={fight} />
              )
            })}

              </div>
            </div>
          </div>
        </section>

        <div class="items-center px-5 py-2 bg-purple-50 rounded-full mb-10">
          {user ? (
            <>
            <div class="flex items-center justify-center">
            <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
              <button 
                class="px-4 py-2 text-sm font-medium text-white capitalize bg-purple-600 md:py-3 rounded-xl md:px-12"
                >
                Admin Controllers
                </button>
              <button 
                className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
                onClick={() => setOpenNewFightForm(!openNewFightForm)}>
                  Add New Fight Matchup 
                </button>
              {openNewFightForm ? (
                <NewFightForm
                  event={event}
                  newFight={newFight}
                  setNewFight={setNewFight}
                  onAddFight={onAddFight} 
                  />
                ) : null}
              </div>
              </div>
            </>)
            : null}
            </div>
          </div>
        </div>
        )
        })}            
    </section>
    </>
)}
