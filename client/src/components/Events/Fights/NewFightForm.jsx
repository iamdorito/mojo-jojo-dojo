import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function NewAthleteForm({ 
  event,
  newFight, 
  setNewFight, 
  onAddFight, 
}) {
  const [fighters, setFighters] = useState([])
  const [divisions, setDivisions] = useState([])
  const formRef = useRef(null);
  const navigate = useNavigate();


  //  GET FIGHTERS to map in form
  useEffect(() => {
      const fetchFighters = async () => {
      let res = await fetch("/fighters");
      let fightersData = await res.json();
      setFighters(fightersData);
  };
    fetchFighters();
  },[]);

  // POST new fight
  // needs to add to the join table of fights setting fighter 1 + fighter 2
  const handleSubmit = async (e) => {
  e.preventDefault()
  let formData = new FormData(formRef.current)
  let req = await fetch("/fights", {
    method: 'POST',
    body: formData
  })
  let res = await req.json()
    // console.log("Res", res)
  let newFightData = await res.json();
  // console.log(formData);
  onAddFight(newFightData);
  navigate("/upcomingevents")
}

  return (
  <>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form method="POST" ref={formRef} onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
        
                <div className="col-span-6 sm:col-span-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Event
                  </label>
                  <select
                    id="event_id"
                    name="event_id"
                    required
                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option key={event.id} value={event.id}>{event.name}</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Fighter 1
                  </label>
                  <select
                    id="fighter1_id"
                    name="fighter1_id"
                    required
                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                    <option></option>
                    {fighters.map(fighter => (
                        // <option key={fighter.id} value={fighter.id}>{fighter.image}</option>
                        <option key={fighter.id} value={fighter.id}>{fighter.name}</option>
                        ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Fighter 2
                    </label>
                    <select
                      id="fighter2_id"
                      name="fighter2_id"
                      required
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      <option></option>
                      {fighters.map(fighter => (
                          <option key={fighter.id} value={fighter.id}>{fighter.name}</option>
                          ))}
                    </select>
                  </div>

                </div>
              </div>

            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                  Save
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}