// import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'

export default function Testimonial() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="max-w-screen-md mx-auto text-center">
    <svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-lime-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
      <p class="text-5xl italic font-semibold text-white">
         “MOJO! YOU’RE A PAIN!”
        </p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
      <img class="w-10 h-10 rounded-full" 
        src="https://i.stack.imgur.com/AcaRm.jpg"
        alt="profile picture"/>
      <div class="flex items-center divide-x-2 divide-lime-500">
        <cite class="pr-3 font-medium text-white">HIM</cite>
        <cite class="pl-3 text-medium text-white">King of Darkness</cite>
        </div>
      </figcaption>
    </figure>
      </div>

      // <div className="mx-auto max-w-2xl lg:max-w-4xl">
      //   <figure className="mt-10">
      //     <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
      //       <p>
      //         “MOJO! YOU’RE A PAIN!”
      //       </p>
      //     </blockquote>
      //     <figcaption className="mt-10">
      //       <img
      //         className="mx-auto h-20 w-30 rounded-full"
      //         src="https://i.stack.imgur.com/AcaRm.jpg"
      //         alt="HIM"
      //       />
      //       <div className="mt-4 flex items-center justify-center space-x-3 text-base">
      //         <div className="font-semibold text-white">HIM</div>
      //         <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
      //           <circle cx={1} cy={1} r={1} />
      //         </svg>
      //         <div className="text-white">👑 King of Darkness 👑</div>
      //       </div>
      //     </figcaption>
      //   </figure>
      // </div>
  )
}
