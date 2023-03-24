import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Footer({user}) {
  const [userLogOut, setUserLogout] = useState(false)

  return (
    <footer class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
    <div class="container px-6 py-6">
        <h1 class="text-lg font-bold text-center lg:text-2xl">
            Be the first to know the next lineup!
        </h1>

        <div class="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
            placeholder="Email Address"/>
    
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
            </button>
        </div>

        <hr class="h-px bg-gray-200 border-none my-7 dark:bg-gray-700"/>

        <div class="flex flex-col items-center justify-between md:flex-row">
            <a href="/home">
                <img class="w-auto h-7" src="https://static.wikia.nocookie.net/powerpuff/images/e/e8/Powerpuff-girls-mojo-jojo-brother-1440611559.gif/revision/latest/scale-to-width-down/500?cb=20160617183022" alt=""/>
            </a>

            <div class="flex mt-4 md:m-0">
                <div class="-mx-4">
                  <Link to="/events" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                    Events
                  </Link>
                  <Link to="/connect" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                    Connect
                  </Link>
                  {user ? 
                  // <span class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                  //   onClick={() => setUserLogout(!userLogOut)}>
                  //   {user.username}</span>
                  null
                    : 
                  <Link to="/login" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                    Athlete's Corner
                  </Link> }
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
