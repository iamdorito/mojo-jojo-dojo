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

    if(name === 'wins' || name === 'losses' || name === "draw") {
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
    <div>
        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Pick an Athlete to Update
            </label>
            <select
                onChange={(e)=>
                    setSelectedFighter(e.target.value)}
                id="gym_id"
                name="gym_id"
                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option></option>
                {fighters.map(fighter => (
                    <option key={fighter.id} value={fighter.id}>{fighter.name} - {fighter.gym.name}</option>
                    ))}
            </select>
        </div>
      <form method="PATCH" onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
                </label>
                <input
                type="text"
                name="first_name"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
            </label>
            <input
                type="text"
                name="last_name"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
            </label>
            <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>

            <div className="col-span-6 sm:col-span-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Gender
            </label>
            <select
                onChange={handleChange}
                id="gender"
                name="gender"
                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option></option>
                <option>M</option>
                <option>F</option>
            </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Gym
            </label>
            <select
                onChange={handleChange}
                id="gym_id"
                name="gym_id"
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
                onChange={handleChange}
                id="division_id"
                name="division_id"
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

            <div className="col-span-6 sm:col-span-1">
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

            <div className="col-span-6 sm:col-span-1">
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

            <div className="col-span-6 sm:col-span-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Draw
            </label>
            <input
                type="number"
                name="draw"
                id="draw"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Image Link
                </label>
            <div className="mt-2 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                </span>
                <input
                type="text"
                name="image"
                onChange={handleChange}
                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="image link"
                />
            </div>
            </div>
            </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                Save
            </button>
        </div>      
        </form>
    </div>
  )
}