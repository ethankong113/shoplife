# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161110191305) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followings", force: :cascade do |t|
    t.integer  "follower_id"
    t.integer  "followee_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "pins", force: :cascade do |t|
    t.integer  "trip_id"
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "productname", null: false
    t.string   "description"
    t.string   "img_url"
    t.integer  "shop_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.decimal  "price"
  end

  create_table "shops", force: :cascade do |t|
    t.string   "shopname",    null: false
    t.string   "description"
    t.string   "location",    null: false
    t.decimal  "lat",         null: false
    t.decimal  "lng",         null: false
    t.string   "img_url"
    t.integer  "owner_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "shops", ["lat"], name: "index_shops_on_lat", using: :btree
  add_index "shops", ["lng"], name: "index_shops_on_lng", using: :btree
  add_index "shops", ["location"], name: "index_shops_on_location", using: :btree

  create_table "trips", force: :cascade do |t|
    t.string   "tripname",   null: false
    t.string   "purpose"
    t.string   "date"
    t.string   "img_url"
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "firstname"
    t.string   "lastname"
    t.string   "img_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
