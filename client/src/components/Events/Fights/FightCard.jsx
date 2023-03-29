export default function EventDetailPage({ fight, user }) {

    // DELETE fighter
    const handleDelete = async () => {
        console.log(fight.id)
        let req = await fetch(`/fights/${fight.id}`, { 
        method: "DELETE",
        })
        if (!req.ok) {
            throw new Error('Failed to delete fight');
        }
            console.log('Athlete deleted successfully');    
        }

    return(
        <>
        <div className="relative max-w-lg xl:max-w-xl ml-auto mr-6">
          <div className="flex -mx-2">
            <div className="w-1/2 px-2">
              <div className="hover:animate-bounce delay-300 duration-300 ease-in-out">
                <div className="relative h-44">
                    <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" 
                        src={fight.fighter1.image} alt=""/>
                </div>
                <div className="px-8 pt-6 pb-8 bg-white text-red-600 rounded-xl">
                    <span>{fight.fighter1.nickname}</span>
                    <h4 className="text-2xl font-medium hover:text-red-800">{fight.fighter1.name}</h4>
                    <span>{fight.fighter1.wins}-{fight.fighter1.losses} (W-L)</span>
                </div>
              </div>
            </div>

            <h4 className="text-2xl font-extrabold">VS</h4>
            

            <div className="w-1/2 px-2">
              <div className="hover:animate-bounce delay-300 duration-300 ease-in-out">
                <div className="relative h-44">
                    <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" 
                        src={fight.fighter2.image} alt=""/>
                </div>
                <div className="px-8 pt-6 pb-8 bg-white text-blue-600 rounded-xl">
                    <span>{fight.fighter2.nickname}</span>
                    <h4 className="text-2xl font-medium hover:text-blue-800">{fight.fighter2.name}</h4>
                    <span>{fight.fighter2.wins}-{fight.fighter2.losses} (W-L)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

            {user ? 
            <div className="text-center p-1 border border-purple-600 dark:border-purple-400 rounded-xl">
                <button
                    className="px-4 py-2 text-sm font-medium text-purple-600 transition-colors duration-300 md:py-3 dark:text-purple-400 dark:hover:text-white focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl md:px-12"
                    type="button"
                    onClick={handleDelete}
                    >
                    Delete
                    </button>
                </div>
            // </div>
            : null
            }  
        </>
    )
}    
// <>
    //     <h3>fight matchup</h3>
    //     <span>athlete 1: {fight.fighter1.name}</span><br/>
    //     <span>athlete 2: {fight.fighter2.name}</span>
    // </>