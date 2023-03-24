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
  { name: 'Mini Flyweight', lbs: 105, kg: 47.627 },
  { name: 'Light Flyweight', lbs: 108, kg: 48.988 },
  { name: 'Flyweight', lbs: 112, kg: 50.802 },
  { name: 'Super Flyweight', lbs: 115, kg: 52.163 },
  { name: 'Bantamweight', lbs: 118, kg: 53.524 },
  { name: 'Super Bantamweight', lbs: 122, kg: 55.338 },
  { name: 'Featherweight', lbs: 126, kg: 57.153 },
  { name: 'Super Featherweight', lbs: 130, kg: 58.967 },
  { name: 'Lightweight', lbs: 135, kg: 61.235 },
  { name: 'Super Lightweight', lbs: 140, kg: 63.503 },
  { name: 'Welterweight', lbs: 147, kg: 66.678 },
  { name: 'Super Welterweight', lbs: 154, kg: 69.853 },
  { name: 'Middleweight', lbs: 160, kg: 72.575 },
  { name: 'Super Middleweight', lbs: 168, kg: 76.204 },
  { name: 'Light Heavyweight', lbs: 175, kg: 79.379 },
  { name: 'Cruiserweight', lbs: 190, kg: 86.183 },
  { name: 'Super Cruiserweight', lbs: 210, kg: 95.254 },
  { name: 'Heavyweight', lbs: 230, kg: 104.326 }
]

Division.create(divisions_data)

# gyms

gyms_data = [
  { name: '8 Limbs MT Academy', state: 'PA' },
  { name: 'Alego MMA & Kickboxing', state: 'PA' },
  { name: 'Church Street Muay Thai', state: 'NY' },
  { name: "Dan's Gym AZ", state: 'AZ' },
  { name: 'Diamond Heart Muay Thai', state: 'NY' },
  { name: 'Driven Gym', state: 'NJ' },
  { name: 'Eight Points Muay Thai', state: nil },
  { name: 'Elvis Gashi NY', state: 'NY' },
  { name: 'Evolution Muay Thai', state: nil },
  { name: 'FKA', state: nil },
  { name: 'Hard Knocks Gym MA', state: 'MA' },
  { name: 'House of Muay Thai', state: nil },
  { name: 'Kaensak Muay Thai', state: nil },
  { name: 'Kings Combat Fitness', state: 'NY' },
  { name: 'Little Giant Muay Thai', state: 'NJ' },
  { name: 'Long Island MMA', state: 'NY' },
  { name: 'Lotus Thai Boxing', state: nil },
  { name: 'MK Muay Thai', state: 'NJ' },
  { name: 'North Jersey Muay Thai', state: 'NJ' },
  { name: 'Pharoahs Muay Thai', state: 'NY' },
  { name: 'Raktan Gym', state: 'NY' },
  { name: 'Rebel Thai Boxing', state: 'NY' },
  { name: 'Rose Muay Thai', state: 'NY' },
  { name: 'Sitan Gym', state: 'NY' },
  { name: 'Spyda Muay Thai', state: 'NJ' },
  { name: 'Steel MMA & Fitness SD', state: 'CA' },
  { name: 'Tampa Muay Thai', state: 'FL' },
  { name: 'The Yard CA', state: 'CA' },
  { name: 'Warriors Nation MMA', state: 'NY' },
  { name: 'Weapons 9 Gym', state: 'NJ' }
]
Gym.create(gyms_data)


# events
e1 = Event.create(event_number: 51, name: 'Road to One', location: 'Melrose Ballroom, Queens, NYC', date: '3/24/2023', poster_img:'https://static.wixstatic.com/media/ca2f1e_5b483c29a21d4b0985911221e06df8bd~mv2.jpeg/v1/fill/w_434,h_606,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ca2f1e_5b483c29a21d4b0985911221e06df8bd~mv2.jpeg')
e1 = Event.create(event_number: 52, name: 'Road to One', location: 'Melrose Ballroom, Queens, NYC', date: '4/21/2023')
e1 = Event.create(event_number: 53, name: 'Road to One', location: 'Melrose Ballroom, Queens, NYC', date: '6/9/2023')

# fighters
Fighter.create!(first_name: "Ayan", last_name: "Karim", email: "AKarim@wc.com", gender: "M", gym_id: 15, division_id: 8, wins: 0,losses: 2,draw: 0,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Nick",last_name: "Bridge",email: "NBridge@wc.com",gender: "M",gym_id: 2,division_id: 8,wins: 0,losses: 0,draw: 0,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Sandra",last_name: "Cantillo",email: "SCantillo@wc.com",gender: "F",gym_id: 14,division_id: 10,wins: 1,losses: 1,draw: 1,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Isabelle",last_name: "Garcia",email: "IGarcia@wc.com",gender: "F",gym_id: 18,division_id: 10,wins: 1,losses: 1,draw: 1,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Eli",last_name: "Clare",email: "EClare@wc.com",gender: "M",gym_id: 15,division_id: 10,wins: 5,losses: 1,draw: 0,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Alex",last_name: "Monaco",email: "AMonaco@wc.com",gender: "M",gym_id: 13,division_id: 10,wins: 2,losses: 0,draw: 0,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Robert",last_name: "Cummings",email: "RCummings@wc.com",gender: "M",gym_id: 8,division_id: 10,wins: 1,losses: 1,draw: 1,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Rayniel",last_name: "Urena",email: "RUrena@wc.com",gender: "M",gym_id: 29,division_id: 10,wins: 2,losses: 0,draw: 0,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Marcelo",last_name: "Marino",email: "MMarino@wc.com",gender: "M",gym_id: 22,division_id: 9,wins: 0,losses: 0,draw:3,status: "active",password_digest:'1234')
Fighter.create!(first_name: "Jin",last_name: "Lee",email: "Jlee@wc.com",gender: "M",gym_id: 5,division_id: 9,wins: 0,losses: 0,draw:3,status: "active",password_digest:'1234')

# fights
Fight.create(fighter1_id:1,fighter2_id:2,event_id:1)
Fight.create(fighter1_id:3,fighter2_id:4,event_id:1)
Fight.create(fighter1_id:5,fighter2_id:6,event_id:1)
Fight.create(fighter1_id:7,fighter2_id:8,event_id:1)

# users
u1 = User.create(username:'iamdorito', email: 'dorito@wc.com', password: '0000')

p 'done seeding'