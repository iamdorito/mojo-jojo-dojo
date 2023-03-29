export default function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-purple-600">
          Trusted by the Townsville's most evilest villians
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src=""
            alt="The Rowdyruff Boys"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src=""
            alt="The Gangreen Gang"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src=""
            alt="Sedusa"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
