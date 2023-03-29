import { useState, useEffect } from 'react'
import FightCard from './Fights/FightCard'
import NewFightForm from './Fights/NewFightForm'

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
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <div className="container px-6 py-10 mx-auto">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    {event.name}
                    </h2>
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

        {user ? (
          <>
          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            {user.username} Admin Controllers
            </p>

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
                {/* <span aria-hidden="true">&rarr;</span> */}
              </button>
            {openNewFightForm ? (
              <NewFightForm
                event={event}
                newFight={newFight}
                setNewFight={setNewFight}
                onAddFight={onAddFight} 
                />
              ) : null}
{/*            
            <button 
              className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
              onClick={() => setUpdateNewFighterForm(!openUpdateFighterForm)}>
              Update Athlete 
              </button>
            
              {openUpdateFighterForm ? (
                <UpdateFighter 
                  fighters={fighters}
                  onUpdateFighter={onUpdateFighter}
                  />
                  ) : null} */}
                </div>
            </div>
           </>)
          : null}

            {event.fights.map((fight) => {
                return(
                    <FightCard user={user} fight={fight} />
                )
            })}

            </div>
        </div>
        )
        })}            
    </section>
    </>
)}
