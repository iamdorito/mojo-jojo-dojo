export default function EventDetailPage({fight}) {
    return(
        <>
        <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                        src=
                        {fight.fighter1.image ?
                            fight.fighter1.image : 
                            "https://stickershop.line-scdn.net/stickershop/v1/sticker/198260120/iPhone/sticker_animation@2x.png"}
                        alt={fight.fighter1.name}
                        />
                    </a>
                </div> 

                <div class="grid text-center md:grid-cols-3">
                    <div class="p-5">
                        <h3 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">{fight.fighter1.name}</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">{fight.fighter1.nickname}</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            {fight.fighter1.wins}-{fight.fighter1.losses} W-L
                            </p>
                        <ul class="flex space--4 sm:mt-0">
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="text-center">
                        <h3 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                            vs
                        </h3>
                    </div>

                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">{fight.fighter2.name}</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">{fight.fighter2.nickname}</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            {fight.fighter2.wins}-{fight.fighter2.losses} W-L
                            </p>
                        <ul class="flex space-x-4 sm:mt-0">
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                        src=
                        {fight.fighter2.image ?
                            fight.fighter2.image : 
                            "https://stickershop.line-scdn.net/stickershop/v1/sticker/198260118/iPhone/sticker_animation@2x.png"
                        }
                        alt={fight.fighter2.name}
                        />
                </div> 
            </div>  
        </div>
    </section>
        </>
    )
}    
// <>
    //     <h3>fight matchup</h3>
    //     <span>athlete 1: {fight.fighter1.name}</span><br/>
    //     <span>athlete 2: {fight.fighter2.name}</span>
    // </>