import { useState, useEffect, useRef } from 'react'
import UpdateFighter from "./UpdateAthlete"


export default function AthleteModal({ fighter, setShowAtheleteModal, user }) {
  const [selectedFighter, setSelectedFighter] = useState({})
  const formRef = useRef(null);

  // PATCH fighter
    const handleSubmit = async (fighter) => {
      let req = await fetch(`fighters/${fighter.id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type" : "application/json"
        }
      })
      let res = await req.json()
      if (req.ok) {
        console.log(res)
        setSelectedFighter(fighter)
      } else {
        console.log(res.error)
      }
  }
  
  // DELETE fighter
  const handleDelete = async () => {
    console.log(fighter.id)
    let req = await fetch(`/fighters/${fighter.id}`, { 
      method: "DELETE",
      })
    if (!req.ok) {
        throw new Error('Failed to delete athlete');
      }
      console.log('Athlete deleted successfully');    
    }

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <img 
          class="object-cover w-full rounded-xl aspect-square" 
          src={fighter.image ?
            fighter.image : "https://1.bp.blogspot.com/-M6GLgjoNozs/XRy_Rptd_xI/AAAAAABGys8/iyqtusN2u1kekWCwaLmBduCQLDj0z8eRwCLcBGAs/s1600/AW3924710_00.gif"}
          alt="fighter image"
          />
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-black-700">
              {fighter.name}
            </h3>
            {/* <span className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.status}
            </span> */}
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowAtheleteModal(false)}
              >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <ul className="relative p-6 flex-auto">
            <li className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.gym.name}
            </li>
            <li className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.division.name}
            </li>
            <li className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.wins}-{fighter.losses} (W-L)
            </li>
          </ul>

        </div>
      </div>
    </div>
  
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
