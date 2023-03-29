// import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'

export default function Testimonial() {
  return (
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src={RoadToOne} alt="" /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “MOJO! YOU’RE A PAIN!”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-30 rounded-full"
              src="https://i.stack.imgur.com/AcaRm.jpg"
              alt="HIM"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">HIM</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white">👑 King of Darkness 👑</div>
            </div>
          </figcaption>
        </figure>
      </div>

  )
}
