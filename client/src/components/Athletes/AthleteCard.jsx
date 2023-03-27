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
    <div key={fighter.id} 
        className="group relative" 
        onClick={() => setShowAtheleteModal(!showAtheleteModal)}>

        <div class="flex flex-col items-center max-w-xs transition duration-300 ease-in-out hover:scale-110">
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

        {user ? 
        <div className="flex items-center p-6 border-t border-solid border-slate-200  hover:border-purple-600 rounded-b">
        <div class="flex items-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
            <button
                className="px-4 py-2 text-sm font-medium text-purple-600 capitalize transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
                type="button"
                onClick={handleDelete}
                >
                Delete
                </button>
            </div>
        </div>
        : null
        }

      {showAtheleteModal ? (
        <AthleteModal 
            user={user}
            fighter={fighter} 
            setShowAtheleteModal={setShowAtheleteModal} />
            ) : null}
        {/* </div> */}
    </div>
)}