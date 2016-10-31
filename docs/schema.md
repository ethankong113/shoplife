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


Ken: shop_has_products should be called inventory_items. A store has_many inventory_items, many products through inventory_items.

## shop_has_products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null, foreign key (references shops), indexed
product_id  | integer   | not null, foreign key (references products), indexed

This should not be a table. It should be a through association: Tour has_many shops. shop has_many products.

## tour_has_products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tour_id     | integer   | not null, foreign key (references tours), indexed
product_id  | integer   | not null, foreign key (references products), indexed
