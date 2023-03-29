import { useState, useEffect } from 'react'

export default function UpdateFighter({ 
    fighters, 
    onUpdateFighter
    }) {

    const [gyms, setGyms] = useState([])
    const [divisions, setDivisions] = useState([])
    const [selectedFighter, setSelectedFighter] = useState(fighters[0]);

    const [updatedFighter, setUpdatedFighter] = useState({});

  useEffect(() => {
      const fetchGyms = async () => {
      let res = await fetch("/gyms");
      let gymData = await res.json();
      setGyms(gymData);
  };
    fetchGyms();
  },[]);

  //  GET DIVISIONS to map in form 
  useEffect(() => {
  const fetchDivisions = async () => {
    let res = await fetch("/divisions");
    let divisionData = await res.json();
    setDivisions(divisionData);
  };
    fetchDivisions();
  },[]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(name === 'wins' || name === 'losses') {
        setUpdatedFighter({ ...updatedFighter, [name]: parseInt(value) });
    }else {
         setUpdatedFighter({ ...updatedFighter, [name]: value });
    }
    console.log(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/fighters/${selectedFighter}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFighter),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update fighter');
      }
      return response.json();
    })
    .then((updatedData) => {
      console.log(updatedData)
      onUpdateFighter(updatedData)
    })
    .catch((error) => {
      // handle error
      console.log('error')
    })
  }


  return (
    <div className="overflow-hidden px-4 py-5 sm:rounded-md">

        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Pick an Athlete to Update
            </label>
            <select
                onChange={(e) => setSelectedFighter(e.target.value)}
                name="fighter_id"
                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option></option>
                {fighters.map(fighter => (
                    <option key={fighter.id} value={fighter.id}>{fighter.name} - {fighter.division.name}</option>
                    ))}
            </select>
        </div>
      <form method="PATCH" onSubmit={handleSubmit}>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      <option></option>
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
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      <option></option>
                      {divisions.map((divison) => (
                        <option key={divison.id} value={divison.id}>
                          {divison.name} - {divison.lbs}lbs ({divison.kg}kg)
                          </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Wins
                    </label>
                    <input
                      type="number"
                      name="wins"
                      id="wins"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Losses
                    </label>
                    <input
                      type="number"
                      name="losses"
                      id="losses"
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Athlete Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option></option>
                      <option key={updatedFighter.status} value={updatedFighter.status}>active</option>
                      <option key={updatedFighter.status} value={updatedFighter.status}>inactive</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Image Link
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="image"
                      onChange={handleChange} 
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                  </div>
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
  )
}