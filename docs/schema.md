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

## shops
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | text      |
location        | string    | not null
coord           | integer   | not null, indexed
image_url       | string    |
owner_id        | integer   | not null, foreign key (references users), indexed

## tours
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | text      |
date            | date      |
owner_id        | integer   | not null, foreign key (references users), indexed

## products
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | text      |
image_url       | string    | not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## shop_has_products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null, foreign key (references shops), indexed
product_id  | integer   | not null, foreign key (references products), indexed

## tour_has_products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tour_id     | integer   | not null, foreign key (references tours), indexed
product_id  | integer   | not null, foreign key (references products), indexed
