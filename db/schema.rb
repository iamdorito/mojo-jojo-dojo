# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_16_220430) do
  create_table "divisions", force: :cascade do |t|
    t.string "name"
    t.integer "lbs"
    t.integer "kg"
  end

  create_table "events", force: :cascade do |t|
    t.integer "event_number"
    t.string "name"
    t.string "location"
    t.string "date"
    t.string "poster_img"
  end

  create_table "fighters", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "nickname"
    t.string "email"
    t.string "gender"
    t.integer "gym_id"
    t.integer "division_id"
    t.integer "wins"
    t.integer "losses"
    t.integer "draw"
    t.string "headshot"
    t.string "insta"
    t.string "status"
    t.string "password_digest"
    t.index ["email"], name: "index_fighters_on_email", unique: true
  end

  create_table "fights", force: :cascade do |t|
    t.integer "fighter1_id", null: false
    t.integer "fighter2_id", null: false
    t.integer "event_id", null: false
    t.index ["event_id"], name: "index_fights_on_event_id"
    t.index ["fighter1_id"], name: "index_fights_on_fighter1_id"
    t.index ["fighter2_id"], name: "index_fights_on_fighter2_id"
  end

  create_table "gyms", force: :cascade do |t|
    t.string "name"
    t.string "state"
    t.string "insta"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "fights", "events"
  add_foreign_key "fights", "fighters", column: "fighter1_id"
  add_foreign_key "fights", "fighters", column: "fighter2_id"
end
