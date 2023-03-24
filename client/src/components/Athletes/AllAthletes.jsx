import AthleteCard  from "./AthleteCard"
import NewAthleteForm  from "./NewAthleteForm"
import UpdateFighter from "./UpdateFighter"

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Athletes</h2>
        
        {user ? (
        <div className="admin-options">
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setOpenNewFighterForm(!openNewFighterForm)}>
            Add New Athlete <span aria-hidden="true">&rarr;</span>
          </button>
          {openNewFighterForm ? (
            <NewAthleteForm 
              newFighter={newFighter}
              setNewFighter={setNewFighter}
              onAddFighter={onAddFighter} 
              />
            ) : null}
            <br/>
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setUpdateNewFighterForm(!openUpdateFighterForm)}>
            Update Athlete <span aria-hidden="true">&rarr;</span>
          </button>
        </div>)
        : null}

          {openUpdateFighterForm ? (
            <UpdateFighter 
              fighters={fighters}
              onUpdateFighter={onUpdateFighter}
              />
            ) : null}
  
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fighters?.map((fighter) => (
            <AthleteCard fighter={fighter} />
          ))}
        </div>
      </div>
    </div>
  )
}