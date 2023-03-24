import { useState, useEffect, useRef } from 'react'
import UpdateFighter from "./UpdateFighter"


export default function AthleteModal({ fighter, setShowAtheleteModal }) {
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
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-black-700">
              {fighter.first_name} {fighter.last_name}
            </h3>
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
          <div className="relative p-6 flex-auto">
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.gym.name} {fighter.division.name}
            </p>
            <dd className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.division_name}
            </dd>
            <dt className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.status}
            </dt>
            <dt className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.insta}
            </dt>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            {/* <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setUpdateNewFighterForm(!openUpdateFighterForm)}
              >
              Update Fighter
            </button> */}
            <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleDelete}
              >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
