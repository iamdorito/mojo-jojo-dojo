# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


p 'seeding'

# Division.destroy_all
# Gym.destroy_all
# Event.destroy_all
# Fighter.destroy_all
# Fight.destroy_all
# User.destroy_all

# divisions
divisions_data = [
  { name: 'Flyweight', lbs: 112 },
  { name: 'Bantamweight', lbs: 118 },
  { name: 'Featherweight', lbs: 126 },
  { name: 'Lightweight', lbs: 135 },
  { name: 'Welterweight', lbs: 147 },
  { name: 'Middleweight', lbs: 160 },
  { name: 'Cruiserweight', lbs: 190 },
  { name: 'Heavyweight', lbs: 230 }
]

Division.create(divisions_data)

# gyms

gyms_data = [
  { name: 'Professor X Academy', state: 'Townsville' },
  { name: 'Equinox', state: 'Townsville' },
  { name: 'Planet Fitness', state: 'TriState Area' },
  { name: 'Two Bridges Muay Thai', state: 'NY' },
  { name: 'Church Street Muay Thai', state: 'NY' },
  { name: 'Weapons 9 Gym', state: 'NJ' }
]
Gym.create(gyms_data)


# events
e1 = Event.create(name: 'Road to One', location: 'Melrose Ballroom, Queens, NYC', date: '3/24/2023')
e2 = Event.create(name: 'Road to Townsville', location: 'Melrose Ballroom, Queens, NYC', date: '4/21/2023')
e3 = Event.create(name: 'Road to Fatiron', location: 'Melrose Ballroom, Queens, NYC', date: '6/9/2023')

# fighters
fighters_data = [
  {name: "Blossom", gender: "F", gym_id: 1, division_id: 1, wins: 1,losses: 0, status: "active"},
  {name: "Bubbles", gender: "F", gym_id: 1, division_id: 1, wins: 1,losses: 0, status: "active"},
  {name: "ButterCup", gender: "F", gym_id: 1, division_id: 1, wins: 1,losses: 0, status: "active"},
  {name: "Princess Morbucks", gender: "F", gym_id: 1, division_id: 1, wins: 3,losses: 9, image:"https://www.giantbomb.com/a/uploads/scale_small/20/201680/2530679-princess%20morbucks.png", status: "active"},
  {name: "Big Billy", gender: "M", gym_id: 3, division_id: 8, wins: 0,losses: 3, image:"https://static.wikia.nocookie.net/superheroes/images/0/04/Big_Billy.png/revision/latest?cb=20141115115442", status: "active"},
  {name: "Him", gender: "M", gym_id: 5, division_id: 8, wins: 0,losses: 3, image:"https://www.giantbomb.com/a/uploads/scale_small/0/5768/670165-him.jpg", status: "active"},
  {name: "Ace D Copular", gender: "M", gym_id: 4, division_id: 6, wins: 10,losses: 0, image:"https://www.giantbomb.com/a/uploads/scale_small/21/216885/2571315-ace.png", status: "active"},
  {name: "Fuzzy Lumpkins", gender: "M", gym_id: 2, division_id: 8, wins: 1,losses: 10, image:"https://www.giantbomb.com/a/uploads/scale_small/0/5768/677948-fuzzylumpkins.jpg", status: "active"},
  {name: "Grubber", gender: "M", gym_id: 4, division_id: 2, wins: 10, losses: 20, image:"https://www.giantbomb.com/a/uploads/scale_small/21/216885/2573448-grubber.png", status: "active"},
  {name: "Lil' Arturo", gender: "M", gym_id: 2, division_id: 2, wins: 10, losses: 20, image:"https://www.giantbomb.com/a/uploads/scale_small/21/216885/2573450-lil%27%20arturo.png", status: "active"},
  {name: "Mitch Mitchelson", gender: "M", gym_id: 6, division_id: 2, wins: 10, losses: 20, image:"https://www.giantbomb.com/a/uploads/square_small/20/201680/2531989-mitch%20mitchelson.jpg", status: "active"},
]

Fighter.create(fighters_data)

# fights
Fight.create(fighter1_id:1,fighter2_id:2,event_id:1)
Fight.create(fighter1_id:3,fighter2_id:4,event_id:1)
Fight.create(fighter1_id:5,fighter2_id:6,event_id:1)
Fight.create(fighter1_id:7,fighter2_id:8,event_id:1)

# users
u1 = User.create(username:'iamdorito', email: 'dorito@wc.com', password: '0000')

p 'done seeding'