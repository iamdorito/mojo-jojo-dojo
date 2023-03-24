const people = [
  {
    name: 'Chris Tran',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://static.wixstatic.com/media/ca2f1e_cb425e358d5e4062b729d6185e02379b~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5401.jpg',
  },
  {
    name: 'Eddie Marini',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://static.wixstatic.com/media/ca2f1e_cb425e358d5e4062b729d6185e02379b~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5401.jpg',
  },
  {
    name: 'James Guccione',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://static.wixstatic.com/media/ca2f1e_18f8e6a846cb42979b311f7175601b73~mv2.jpg/v1/fill/w_210,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5404.jpg',
  },
  // More people...
]

export default function Connect() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Three Pillars</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three Pillars Promotions have been growing muay thai within the United States for over 15 years. They recently championed the path for professional muay thai athletes to elevate their careers to the international stage through Road to ONE.
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
