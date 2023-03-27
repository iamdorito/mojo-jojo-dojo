import AthleteCard  from "./AthleteCard"
import NewAthleteForm  from "./NewAthleteForm"
import UpdateFighter from "./UpdateAthlete"

import { useState, useEffect } from 'react'

export default function Athletes({user}) {
  const [fighters, setFighters] = useState([])
  const [openNewFighterForm, setOpenNewFighterForm] = useState(false)
  const [openUpdateFighterForm, setUpdateNewFighterForm] = useState(false)
  const [newFighter, setNewFighter] = useState({})

  // GET fighters
  useEffect(() => {
    const fetchFighters = async () => {
      let res = await fetch("/fighters");
      let fighterData = await res.json();
      setFighters(fighterData);
    };
      fetchFighters();
    },[]);

  // Add new fighter to list
  const onAddFighter = (newFighter) => {
    setFighters((fighters) => [...fighters, newFighter])
  }

  const onUpdateFighter = (updatedFighter) => {
    const updatedFighterArray = fighters.map((fighter) => {
      if (fighter.id === updatedFighter.id) {
        return updatedFighter;
      } else {
        return fighter;
      }
    })
    setFighters(updatedFighterArray)
  }

  return (
    <>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Meet the Athletes
          </h1>

        {user ? (
          <>
          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Admin Controllers
            </p>

          <div class="flex items-center justify-center">
          <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
            <button 
              class="px-4 py-2 text-sm font-medium text-white capitalize bg-purple-600 md:py-3 rounded-xl md:px-12"
              >
              all athletes
              </button>
            <button 
              className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
              onClick={() => setOpenNewFighterForm(!openNewFighterForm)}>
                Add New Athlete 
                {/* <span aria-hidden="true">&rarr;</span> */}
              </button>
            {openNewFighterForm ? (
              <NewAthleteForm 
                newFighter={newFighter}
                setNewFighter={setNewFighter}
                onAddFighter={onAddFighter} 
                />
              ) : null}
              {/* <br/> */}
            {/* </div>
           <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl"> */}
            <button 
              className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
              onClick={() => setUpdateNewFighterForm(!openUpdateFighterForm)}>
              Update Athlete 
              {/* <span aria-hidden="true">&rarr;</span> */}
              </button>
            
              {openUpdateFighterForm ? (
                <UpdateFighter 
                  fighters={fighters}
                  onUpdateFighter={onUpdateFighter}
                  />
                  ) : null}
                </div>
           </div>
           </>)
          : null}

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Mojo Jojo Dojo has the best talent on the internet. Periot.
        </p>

        <div class="flex items-center justify-center">
          <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
            <button 
              class="px-4 py-2 text-sm font-medium text-white capitalize bg-purple-600 md:py-3 rounded-xl md:px-12"
              >
              all athletes
              </button>
            <button 
              class="px-4 py-2 mx-4 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:mx-8 md:px-12"
              >
              girls
              </button>
            <button 
              class="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
              >
              boys
              </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-5">

        {fighters?.map((fighter) => (
          <AthleteCard 
          user={user}
          fighter={fighter} />
        ))}
        
          </div>

      </div>
    </section>
    </>
  )
}
// <div className="bg-white">
    //   <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    //   <img 
    //     src="https://cdn.dribbble.com/users/1808107/screenshots/11460419/media/0631ec21d8c5b09e3c8d1a51154152ea.gif" 
    //     alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center" />

    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">All Athletes</h2>
    //       <p className="mt-6 text-lg leading-8 text-gray-300">
    //         Mojo Jojo Dojo has the best athletes in the game.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    //   <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //     {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Athletes</h2> */}
        
        // {user ? (
        // <div className="admin-options">
        //   <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setOpenNewFighterForm(!openNewFighterForm)}>
        //     Add New Athlete <span aria-hidden="true">&rarr;</span>
        //   </button>
        //   {openNewFighterForm ? (
        //     <NewAthleteForm 
        //       newFighter={newFighter}
        //       setNewFighter={setNewFighter}
        //       onAddFighter={onAddFighter} 
        //       />
        //     ) : null}
        //     <br/>
        //   <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setUpdateNewFighterForm(!openUpdateFighterForm)}>
        //     Update Athlete <span aria-hidden="true">&rarr;</span>
        //   </button>
        // </div>)
        // : null}

        //   {openUpdateFighterForm ? (
        //     <UpdateFighter 
        //       fighters={fighters}
        //       onUpdateFighter={onUpdateFighter}
        //       />
        //     ) : null}
  
    //     <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    //       {fighters?.map((fighter) => (
    //         <AthleteCard fighter={fighter} />
    //       ))}
    //     </div>
    //   </div>
    // </div>