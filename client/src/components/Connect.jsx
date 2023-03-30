const people = [
  {
    name: 'Mojo Jojo',
    role: 'King',
    imageUrl:
      'https://www.pngkit.com/png/full/150-1502762_i-wanted-to-draw-a-super-quick-and.png',
  },
  {
    name: 'Mojo Jojo',
    role: 'Supreme Leader',
    imageUrl:
      'https://www.pngkit.com/png/full/150-1502762_i-wanted-to-draw-a-super-quick-and.png',
  },
  {
    name: 'Mojo Jojo',
    role: 'All Around Dictator',
    imageUrl:
      'https://www.pngkit.com/png/full/150-1502762_i-wanted-to-draw-a-super-quick-and.png',
  },
  // More people...
]

export default function Connect() {
  return (
    <>
    <section class="py-32 bg-white overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap max-w-6xl mx-auto -m-3">
          <div class="w-full md:w-1/2 p-3">
            <div class="flex flex-col text-right justify-end p-10 h-full bg-indigo-600 rounded-3xl">
              <div>
                <h3 class="text-4xl text-white font-extrabold leading-snug">MOJO JOJO</h3>
                  <p class="mb-4 text-s text-white text-opacity-70 font-medium leading-relaxed">
                    Dojo Master, Supreme Ruler, All Around Dictator
                    </p>
                <p class="mb-4 text-xl text-white text-opacity-90 font-medium leading-relaxed">
                  For too long, apes and monkeys have been under the thumb of man! Well, the time has come to oppose that thumb, and take hold of what is rightfully ours… THE WORLD!
                </p>
                {/* <div class="md:max-w-max">
                  <button class="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200" type="button">Learn about us</button>
                </div> */}
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-3">
            <div class="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
              <img class="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" 
                src="https://www.pngkit.com/png/full/150-1502762_i-wanted-to-draw-a-super-quick-and.png" alt=""/>
              {/* <div class="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20">
                <h3 class="mb-1 text-2xl font-semibold leading-snug">Leslie Alexander</h3>
                <p class="text-gray-600 font-medium">Co-Founder, CEO</p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* <section className="bg-white dark:bg-gray-900">
    <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">THE EXECUTIVES</h2>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-purple-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-purple-500 rounded-full"></span>
        </div>

        <p className="max-w-2xl mx-auto mt-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          	Now as I was saying before I was so rudely interrupted... I, Mojo Jojo, have succeeded in my first, greatest, and most brilliant plan ever! And I, Mojo Jojo, shall be... KING!
        </p>

      </div>
    </div>

    <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {people.map((person) => (
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" 
                  src={person.imageUrl} 
                  alt={person.name}
                  />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {person.name}
                  </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                  {person.role}
                  </p>
            </div>
          ))}
          </div>
        </div>
      </section> */}

    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please don't. Want to fight? Not my problem.</p>
        <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-purple-600 dark:text-gray-300">Your email</label>
              <input type="email" id="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="name@mojojojodojo.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-purple-600  dark:text-gray-300">Subject</label>
              <input type="text" id="subject" 
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-purple-600  dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-700 sm:w-fit hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
      </section>
    </>
  )
}
