CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  price INT,
  on_sale boolean
);

ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) values ('mcdonalds', 'new york', 3);
INSERT INTO restaurants (name, location, price_range) values ('pizza hut', 'las vegas', 2);
INSERT INTO restaurants (name, location, price_range) values ('raising canes', 'shreveport', 2);
INSERT INTO restaurants (name, location, price_range) values ('podnuhs', 'bossier city', 2);
INSERT INTO restaurants (name, location, price_range) values ('outback steakhouse', 'dallas', 2);
INSERT INTO restaurants (name, location, price_range) values ('wendys', 'san francisco', 2);
INSERT INTO restaurants (name, location, price_range) values ('pizza and pizza', 'avenel', 2);
INSERT INTO restaurants (name, location, price_range) values ('white castle', 'edison', 2);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values (1, 'Abe', 'They definitely put cocaine in their sauce!', 5);
INSERT INTO reviews (restaurant_id, name, review, rating) values (2, 'Hae-In', 'Never been to this restaurant, because I hate the name.', 1);
INSERT INTO reviews (restaurant_id, name, review, rating) values (3, 'Jong-Hae', 'It was meh..', 3);
INSERT INTO reviews (restaurant_id, name, review, rating) values (4, 'Choi', 'Too greasy!', 3);
INSERT INTO reviews (restaurant_id, name, review, rating) values (5, 'Jong-In', 'I would come here again', 4);
INSERT INTO reviews (restaurant_id, name, review, rating) values (6, 'Ari', 'I love this place', 5);
