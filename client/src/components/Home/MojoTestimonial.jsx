// import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'

export default function Testimonial() {
  return (
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="max-w-screen-md mx-auto text-center">
    <svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-lime-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
      <p class="text-4xl italic font-semibold text-white-900 dark:text-white">
        "I plan to rule the planet, not to have my plan's plan to stop me! I am your creator! I am your king! I am MOJO JOJO!"
        </p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
      <img class="w-10 h-10 rounded-full" 
        src="https://w7.pngwing.com/pngs/374/588/png-transparent-mojo-jojo-computer-icons-powerpuff-girls-purple-violet-musician.png" 
        alt="profile picture"/>
      <div class="flex items-center divide-x-2 divide-lime-500 dark:divide-gray-700">
        <cite class="pr-3 font-medium text-white-900">Mojo Jojo</cite>
        <cite class="pl-3 text-medium text-white-500">All Around Dictator</cite>
        </div>
      </figcaption>
    </figure>
      </div>

  )
}
