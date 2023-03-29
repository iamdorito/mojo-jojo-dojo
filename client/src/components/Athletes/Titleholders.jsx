import { useState, useEffect } from 'react'

const titleholders = [
  {
    division: 'Flyweight',
    division_weight: '112lbs',
    fighter_name: 'Buttercup',
    record: '1-0-0 (W-L-D)',
    imageUrl:'https://thumbs.gfycat.com/AccurateFlimsyGuillemot-max-1mb.gif'
  },
  {
    division: 'Featherweight',
    division_weight: '126lbs',
    fighter_name: 'Butch',
    record: '3-0-0 (W-L-D)',
    // imageUrl:'http://images5.fanpop.com/image/photos/31200000/butch-the-rowdyruff-boys-31208813-1024-768.jpg'
    imageUrl:'https://thumbs.gfycat.com/SophisticatedAgreeableBlackwidowspider-size_restricted.gif'
  },
  {
    division: 'Welterweight',
    division_weight: '147lbs',
    fighter_name: "Lil' Arturo",
    record: '20-5-0 (W-L-D)',
    imageUrl:'https://64.media.tumblr.com/fa52add9f9d720b897965579d266ffbc/c6a466394506754b-ce/s400x600/1930b30913a2ad5b8b3630f04593a5f56b950e6b.gif'
  },
  {
    division: 'Middleweight',
    division_weight: '160lbs',
    fighter_name: '♠️ Ace D Copular',
    record: '10-0-0 (W-L-D)',
    imageUrl:'https://64.media.tumblr.com/f8fff19db64647cf71e4ff9d28d9bc6d/tumblr_p9rzdi8h421xo55p6o2_r1_250.gifv'
  },
  {
    division: 'Heavyweight',
    division_weight: '230lbs',
    fighter_name: 'Him',
    record: '10-4-0 (W-L-D)',
    // imageUrl:'https://images.halloweencostumes.com/blog/images/865/4661-1/him-gif-powerpuff-girls.gif'
    imageUrl:'https://media.tenor.com/W-_dpw0eXiwAAAAC/omg-ohmygosh.gif'
  },
  // More people...
]

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
            <p className="mt-6 text-lg text-gray-300">
              The least weak athletes
            </p>
          </div>
        </div>
      </div>
    
      <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto">
        {titleholders.map((holder) => (        
          <div class="container px-6 py-10 mx-auto">
              
              <h1 class="mt-3 font-semibold text-gray-800 text-center capitalize lg:text-3xl">
                🏆 {holder.division}</h1>

                <p class="text-sm text-gray-500 text-center dark:text-gray-300 md:text-sm">
                  {holder.division_weight}
                </p>

              <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">

            <img 
              class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" 
              src={holder.imageUrl}
              alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                <h1 class="block mt-4 text-8xl font-extrabold text-gray-800 hover:text-lime-500">
                    {holder.fighter_name}
                </h1>

                <h3 class="mt-3 text-2xl font-extrabold text-purple-600">
                    {holder.record}
                </h3>

                {/* <p class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</p> */}

              </div>
            </div>    
          </div>      
        ))}
          </div>      


        </section>

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