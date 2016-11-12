# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    |
firstname       | string    |
lastname        | string    |

## shops
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
description     | text      |
location        | string    | not null, indexed
lat             | decimal   | not null, indexed
lng             | decimal   | not null, indexed
image_url       | string    |
owner_id        | integer   | not null, foreign key (references users), indexed

## trips
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | string    |
date            | date      |
owner_id        | integer   | not null, foreign key (references users), indexed
image_url       | string    |

## products
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | text      |
image_url       | string    | not null
shop_id         | integer   | not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## shops_have_products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null, foreign key (references shops), indexed
product_id  | integer   | not null, foreign key (references products), indexed

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
trip_id     | integer   | not null, foreign key (references trips), indexed
product_id  | integer   | not null, foreign key (references products), indexed

## users_follow_shops
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null, foreign key (references shops), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## users_follow_trips
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
trip_id     | integer   | not null, foreign key (references trips), indexed
user_id     | integer   | not null, foreign key (references users), indexed
