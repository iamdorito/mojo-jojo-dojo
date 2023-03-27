import { useState } from 'react'

import AthleteModal from './AthleteModal'


export default function AthleteCard({ fighter, getGymName, user }) {
    const [showAtheleteModal, setShowAtheleteModal] = useState(false)

      
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
    <div key={fighter.id} className="group relative" onClick={() => setShowAtheleteModal(!showAtheleteModal)}>

        <div class="flex flex-col items-center">
            <img 
            class="object-cover w-full rounded-xl aspect-square" 
            src={fighter.image ?
                fighter.image : "https://1.bp.blogspot.com/-M6GLgjoNozs/XRy_Rptd_xI/AAAAAABGys8/iyqtusN2u1kekWCwaLmBduCQLDj0z8eRwCLcBGAs/s1600/AW3924710_00.gif"}
            alt="fighter image"
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            {fighter.name}
            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">
            {fighter.wins}-{fighter.losses} (W-L)
            </p>
            </div>

    <div className="flex items-center p-6 border-t border-solid border-slate-200 rounded-b">
        {user ? 
            <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleDelete}
                >
                Delete
                </button>
            : null
            }
        </div>

      {showAtheleteModal ? (
        <AthleteModal 
            user={user}
            fighter={fighter} 
            setShowAtheleteModal={setShowAtheleteModal} />
            ) : null}
        {/* </div> */}
    </div>
)}