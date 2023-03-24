import { useState, useEffect, useRef } from 'react'

export default function NewAthleteForm({ 
  newFighter, 
  setNewFighter, 
  onAddFighter, 
}) {
  const [gyms, setGyms] = useState([])
  const [divisions, setDivisions] = useState([])
  const formRef = useRef(null);

  //  GET GYMS to map in form
  useEffect(() => {
      const fetchGyms = async () => {
      let res = await fetch("http://localhost:3000/gyms");
      let gymData = await res.json();
      setGyms(gymData);
  };
    fetchGyms();
  },[]);

  //  GET DIVISIONS to map in form 
  useEffect(() => {
  const fetchDivisions = async () => {
    let res = await fetch("http://localhost:3000/divisions");
    let divisionData = await res.json();
    setDivisions(divisionData);
  };
    fetchDivisions();
  },[]);

  // POST new fighter
  const handleSubmit = async (e) => {
  e.preventDefault()
  let formData = new FormData(formRef.current)
  let req = await fetch("/fighters", {
    method: 'POST',
    body: formData
  })
  let res = await req.json()
    // console.log("Res", res)
  let newFighterData = await res.json();
  onAddFighter(newFighterData);
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
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Add New Athlete</h3>
              <p className="mt-1 text-sm text-gray-600">Please add all the necessary information.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" ref={formRef} onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Nickname
                    </label>
                    <input
                      type="text"
                      name="nickname"
                      id="nickname"                      
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value=""></option>
                      <option>M</option>
                      <option>F</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Gym
                    </label>
                    <select
                      id="gym_id"
                      name="gym_id"
                      required
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {gyms.map(gym => (
                          <option key={gym.id} value={gym.id}>{gym.name}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Division
                    </label>
                    <select
                      id="division_id"
                      name="division_id"
                      required
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {divisions.map((divison) => (
                        <option key={divison.id} value={divison.id}>
                          {divison.name} - {divison.lbs}lbs ({divison.kg}kg)
                          </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Wins
                    </label>
                    <input
                      type="number"
                      name="wins"
                      id="wins"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Losses
                    </label>
                    <input
                      type="number"
                      name="losses"
                      id="losses"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Division
                  </label>
                  <select
                    id="status"
                    name="status"
                    required
                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                      <option key={newFighter.status} value={newFighter.status}>active</option>
                      <option key={newFighter.status} value={newFighter.status}>inactive</option>
                  </select>
                </div>
                
              </div>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Image Link
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                      </span>
                      <input
                        type="text"
                        name="image"
                        className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="image link"
                      />
                    </div>
                  </div>
                </div>
            </div>
            
            {/* <div className="flex items-center">
              <input
                id="status"
                name="status"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                In-Active (do not mark if active)
              </label>
            </div> */}

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

  </>
  )
}