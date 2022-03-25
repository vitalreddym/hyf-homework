-- Create database
CREATE DATABASE DBweek3 DEFAULT CHARACTER SET = 'utf8mb4';
USE DBweek3;
-- Create tables
CREATE TABLE `Meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `created_date` DATE NULL DEFAULT NULL
);
INSERT INTO
  `Meal` (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES
  (
    "Soup",
    "tomatoes with grilled cheese croutons",
    "Herning",
    "2022-03-22 14:00:00",
    10,
    45,
    "2022-03-20"
  ),
  (
    "Pizza",
    "with salad and chicken",
    "Silkeborg",
    "2022-03-23 12:00:00",
    20,
    70,
    "2022-03-21"
  ),
  (
    "Burger",
    "cheese with salsa cream",
    "Ikast",
    "2022-03-24 18:00:00",
    50,
    99,
    "2022-03-22"
  ),
  (
    "Pasta",
    "chicken with hot chilli sauce",
    "Aarhus",
    "2022-03-21 13:00:00",
    15,
    50,
    "2022-03-20"
  );
CREATE TABLE `Reservation` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` int(10) NOT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `created_date` DATE NULL DEFAULT NULL,
    `contact_phonenumber` varchar(255) NOT NULL,
    `contact_name` varchar(255) NOT NULL,
    `contact_email` varchar(255) NOT NULL,
    CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );
INSERT INTO
  `Reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    50,
    1,
    "2022-03-20",
    "89899292",
    "Martin",
    "martin12@hotmail.com"
  ),
  (
    30,
    2,
    "2022-03-21",
    "65654545",
    "Christina",
    "christina14@gmail.com"
  ),
  (
    15,
    3,
    "2022-03-22",
    "35363738",
    "Robert",
    "robert16@yahoo.com"
  ),
  (
    20,
    4,
    "2022-03-20",
    "46468822",
    "Sebastian",
    "sebastian18@msn.com"
  );
CREATE TABLE `Review`(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `meal_id` int (10) unsigned NOT NULL,
    `stars` int(10) DEFAULT NULL,
    `created_date` DATE NULL DEFAULT NULL,
    CONSTRAINT `fk_Review_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );
INSERT INTO
  Review (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES
  (
    "Average",
    "Taste is not as good as expected",
    3,
    2,
    "2022-03-24"
  ),
  (
    "Good",
    "Taste is ok but needs to improve",
    2,
    3,
    "2022-03-20"
  ),
  (
    "Tasty",
    "Taste is delicious",
    1,
    5,
    "2022-03-21"
  ),
  (
    "Awesome",
    "Amazing taste but need big portions",
    4,
    5,
    "2022-03-22"
  );
  
-- Queries to write on Meal
  -- Get all meals
SELECT
  *
FROM
  Meal;

-- Add a new meal
INSERT INTO
  `Meal`(
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES
  (
    "Chicken Biryani",
    "Basmati rice with chicken cooked with spicy ingredients",
    "India",
    "2022-02-25",
    25,
    150,
    "2022-02-15"
  );

-- Get a meal with any id
SELECT
  *
FROM
  Meal
WHERE
  id = 2;

-- Update a meal with any id
UPDATE
  Meal
SET
  title = 'Kebab Pizza'
WHERE
  id = 2;

-- Delete a meal with any id
DELETE FROM
  Meal
WHERE
  id = 4;

-- Queries to write on Reservation
  -- Get all reservations
SELECT
  *
FROM
  Reservation;

-- Add a new reservation
INSERT INTO
  `Reservation`(
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    10,
    5,
    "2022-02-10",
    "85852020",
    "Andreas",
    "andreas20@gmail.com"
  );

-- Get a reservation with an id
SELECT
  *
FROM
  Reservation
WHERE
  id = 3;

-- Update a reservation with any id
UPDATE
  Reservation
SET
  contact_name = 'Victor'
WHERE
  id = 1;

-- Delete a reservation with any id
DELETE FROM
  Reservation
WHERE
  id = 4;

-- Queries to write on Review
  -- Get all reviews
SELECT
  *
FROM
  Review;

-- Add a new review
INSERT INTO
  `Review`(
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES
  (
    "Very Good",
    "Taste is so good",
    5,
    4,
    "2022-02-05"
  );

-- Get a review with any id
SELECT
  *
FROM
  Review
WHERE
  id = 2;

-- Update a review with any id
UPDATE
  Review
SET
  stars = 5
WHERE
  id = 3;

-- Delete a review with any id
DELETE FROM
  Review
WHERE
  id = 2;

-- Add different meals, reservations and reviews
INSERT INTO
  `Meal` (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES
  (
    "Chicken Fry",
    "grilled chicken with tikka masala",
    "USA",
    "2022-01-25 10:00:00",
    60,
    100,
    "2022-01-20"
  ),
  (
    "Baked Honey Mustard Chicken",
    "honey mustard and onion sauce with pepper salt",
    "Copenhagen",
    "2022-02-18 12:00:00",
    30,
    150,
    "2022-02-10"
  );
INSERT INTO
  `Reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    20,
    6,
    "2022-01-20",
    "23234466",
    "Mikkel",
    "mikkel@hotmail.com"
  ),
  (
    45,
    7,
    "2022-03-05",
    "75755050",
    "Adams",
    "adams@gmail.com"
  );
INSERT INTO
  Review (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES
  (
    "Bad",
    "Taste is so bad",
    6,
    1,
    "2022-03-04"
  ),
  (
    "Good",
    "Taste is ok but needs to improve",
    7,
    3,
    "2022-03-02"
  );

-- Additional queries
  -- Get meals that has a price smaller than a specific price
SELECT
  *
FROM
  Meal
WHERE
  price < 90;

-- Get meals that still has available reservations
SELECT
  Meal.title,
  Reservation.number_of_guests,
  Meal.max_reservations
FROM
  Meal
  JOIN Reservation ON Meal.id = Reservation.meal_id
WHERE
  Meal.max_reservations > Reservation.number_of_guests;

-- Get meals that partially match a title.
SELECT
  *
FROM
  Meal
WHERE
  title LIKE '%Chicken%';

-- Get meals that has been created between two dates
SELECT
  *
FROM
  Meal
WHERE
  created_date BETWEEN "2022-02-20"
  AND "2022-03-20";

-- Get only specific number of meals fx.return only 5 meals
SELECT
  *
FROM
  Meal
LIMIT
  5;

-- Get the meals that have good reviews
SELECT
  Meal.title
FROM
  Meal
  JOIN Review ON Meal.id = Review.meal_id
WHERE
  Review.stars > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM
  Reservation
WHERE
  Reservation.meal_id = 1
ORDER BY
  created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
  Meal.title,
  AVG(Review.stars) AS average_review
FROM
  Meal
  JOIN Review ON Meal.id = Review.meal_id
GROUP BY
  Meal.title
ORDER BY
  average_review DESC;