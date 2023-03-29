import { useState, useEffect, useRef } from 'react'
import UpdateFighter from "./UpdateAthlete"


export default function AthleteModal({ fighter, setShowAtheleteModal }) {

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">

        <img 
          class="object-cover w-full rounded-xl aspect-square" 
          src={fighter.image ?
            fighter.image : "https://1.bp.blogspot.com/-M6GLgjoNozs/XRy_Rptd_xI/AAAAAABGys8/iyqtusN2u1kekWCwaLmBduCQLDj0z8eRwCLcBGAs/s1600/AW3924710_00.gif"}
          alt="fighter image"
          />

        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-black-700">
              {fighter.name}
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

          <ul className="relative p-6 flex-auto">
            <li className="mt-4 text-3xl font-semibold leading-relaxed">
              <h3 className="text-purple-600 text-xl">
                Gym
              </h3>
              <span className="text-gray-500 text-lg">
                {fighter.gym.name}
              </span>
            </li>
            <li className="mt-4 text-3xl font-semibold leading-relaxed">
              <h3 className="text-purple-600 text-xl">
                Division
              </h3>
              <span className="text-gray-500 text-lg">
                {fighter.division.name}
              </span>
            </li>
            <li className="mt-4 text-3xl font-semibold leading-relaxed">
              <h3 className="text-purple-600 text-xl">
                Record
              </h3>
              <span className="text-gray-500 text-lg">
                {fighter.wins}-{fighter.losses} (W-L)
              </span>
            </li>
            {/* <li className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.division.name}
            </li>
            <li className="mt-4 text-gray-500 text-lg leading-relaxed">
              {fighter.wins}-{fighter.losses} (W-L)
            </li> */}
          </ul>

        </div>
      </div>
    </div>
  
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
