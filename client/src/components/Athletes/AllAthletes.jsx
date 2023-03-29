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
    setFighters(updatedFighterArray);
  }

  return (
    <>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-extrabold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Meet the Athletes
          </h1>

        {user ? (
          <>
          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            {user.username} Admin Controllers
            </p>

          <div class="flex items-center justify-center px-5 py-2 bg-purple-50 rounded-full mb-10">
          <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
            <button 
              class="px-4 py-2 text-sm font-medium text-white capitalize bg-purple-600 md:py-3 rounded-xl md:px-12"
              >
              Admin Controllers
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
                  ) : null}
                </div>
            </div>
           </>)
          : null}

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Mojo Jojo Dojo has the best talent on the internet. Periot.
        </p>

        {/* <div class="flex items-center justify-center">
          <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
            <button 
              class="px-4 py-2 text-sm font-medium text-white capitalize bg-purple-600 md:py-3 rounded-xl md:px-12"
              >
              all athletes
              </button>
            <button 
              onChange={filterFemale}
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
        </div> */}


          {/* <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">Search</label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                      placeholder="Search" required=""/>
                  </div>
                </form>
              </div>
              <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <button type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                  <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  Add product
                </button>
                <div class="flex items-center w-full space-x-3 md:w-auto">
                  <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                    <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    Actions
                  </button>
                  <div id="actionsDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                    </div>
                  </div>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                    </svg>
                    Filter
                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>

                  <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                    </h6>
                    <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                      <li class="flex items-center">
                        <input id="apple" type="checkbox" value=""
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Apple (56)
                        </label>
                      </li>
                      <li class="flex items-center">
                        <input id="fitbit" type="checkbox" value=""
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Fitbit (56)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          

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