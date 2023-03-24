const people = [
  {
    name: 'Mojo Jojo',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://i.pinimg.com/originals/c9/14/ed/c914ed27e827b8548643914a06c847de.gif',
  },
  // More people...
]

export default function Connect() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Ulitmate Fighter</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Once the Professor's lab assistant, Mojo Jojo was transformed form a simple simian to an ambitious, megalomaniacal monkey courtesy of a dramatic accident that forever changed the course of Townsville's history.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full"x src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-red-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
