export default function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-purple-600">
          Trusted by the Townsville's most evilest villians
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
            src="https://media.zenfs.com/en/nerdist_761/07f61b0346ab7ce689c800c0689d103e"
            alt="The Rowdyruff Boys"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
            src="https://www.pngitem.com/pimgs/m/25-254064_the-gangreen-gang-gangreen-gang-big-billy-hd.png"
            alt="The Gangreen Gang"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-30 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://i.pinimg.com/originals/94/a1/fa/94a1fa8250daacd384d302a466d2fc28.png"
            alt="Sedusa"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
