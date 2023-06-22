const posts = [
  {
    id: 1,
    title: 'BREAKING NEWS: New Matchup',
    description:
      'Within the heavyweight division, the new matchup is making headlines is Seb vs Lil Arturo.',
    date: 'March 1, 2023',
    category: { title: 'Fights'},
    author: {
      name: 'Miss Sara Bellum',
      role: "Secretary of the Mayor",
      imageUrl:
        'https://64.media.tumblr.com/480e7fd268d6366bbe0c92752725dd20/tumblr_pvmi7xAQYh1wjgk35o1_1280.png',
    },
  },{
    id: 2,
    title: 'BREAKING NEWS: New Event',
    description:
      'Adding a new event to the line up to see who Seb will be fighting',
    date: 'March 6, 2023',
    category: { title: 'Events'},
    author: {
      name: 'Miss Sara Bellum',
      role: "Secretary of the Mayor",
      imageUrl:
        'https://64.media.tumblr.com/480e7fd268d6366bbe0c92752725dd20/tumblr_pvmi7xAQYh1wjgk35o1_1280.png',
    },
  },{
    id: 3,
    title: 'BREAKING NEWS: New Fight',
    description:
      "Cross division fight coming up between Ella Possible and SebBot. You won't want to miss this!",
    date: 'March 10, 2023',
    category: { title: 'Fights'},
    author: {
      name: 'Miss Sara Bellum',
      role: "Secretary of the Mayor",
      imageUrl:
        'https://64.media.tumblr.com/480e7fd268d6366bbe0c92752725dd20/tumblr_pvmi7xAQYh1wjgk35o1_1280.png',
    },
    
  },
  // More posts...
]

export default function Announcements() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Here's the Latest</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Mojo Jojo's Dojo is where good and evil are put aside to fight for talent and bragging rights.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            // console.log(post)
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
