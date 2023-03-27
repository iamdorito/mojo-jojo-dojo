export default function EventDetailPage({fight}) {
    return(
        <>
{/* 
        <div 
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img 
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                src=
                    {fight.fighter1.image ?
                        fight.fighter1.image : 
                        "https://stickershop.line-scdn.net/stickershop/v1/sticker/198260120/iPhone/sticker_animation@2x.png"}
                    alt={fight.fighter1.name}
                    />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {fight.fighter1.name}
                    </h5>
            <div class="flex flex-col text-center p-4 leading-normal">
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    vs
                    </p>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {fight.fighter2.name}
                </h5>
            <img 
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                src=
                    {fight.fighter2.image ?
                        fight.fighter2.image : 
                        "https://stickershop.line-scdn.net/stickershop/v1/sticker/198260118/iPhone/sticker_animation@2x.png"
                    }
                    alt={fight.fighter2.name}
                    />

        </div> */}

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
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {fight.fighter1.name}
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">{fight.fighter1.nickname}</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            {fight.fighter1.wins}-{fight.fighter1.losses} W-L
                            </p>
                    </div>

                    <div class="text-center">
                        <h3 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                            vs
                        </h3>
                    </div>

                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {fight.fighter2.name}
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">{fight.fighter2.nickname}</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            {fight.fighter2.wins}-{fight.fighter2.losses} W-L
                            </p>
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