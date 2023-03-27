import { useState, useEffect } from 'react'

export default function TitleHolders() {
  const [divisions, setDivisions] = useState([])

  
  //  GET DIVISIONS to map in form 
  useEffect(() => {
  const fetchDivisions = async () => {
    let res = await fetch("http://localhost:3000/divisions");
    let divisionData = await res.json();
    setDivisions(divisionData);
  };
    fetchDivisions();
  },[]);


  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img 
        src="https://cdn.dribbble.com/users/1808107/screenshots/11460419/media/0631ec21d8c5b09e3c8d1a51154152ea.gif" 
        alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" 
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Titleholders</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay tuned to see what's coming up!
            </p>
          </div>
        </div>
      </div>
    
         <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center justify-between">
              <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
              <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a>
          </div>

          <div class="mt-2">
              <a href="#" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Accessibility tools for designers and developers</a>
              <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          </div>

          <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

              <div class="flex items-center">
                  <img 
                  class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" 
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" 
                  alt="avatar"/>
                  <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Khatab wedaa</a>
              </div>
          </div>
        </div>

        {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fighters.map((fighter) => (
            <AthleteCard fighter={fighter} />
          ))}
        </div> */}
      {/* </div>
    </div> */}
    </>
  )
}