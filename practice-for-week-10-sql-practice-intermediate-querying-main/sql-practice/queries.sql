-- Run the SQL command that returns the albums that have sold at least 100,000 copies.

SELECT * FROM albums WHERE num_sold >= 100000;

-- Run the SQL command that returns the albums released between 2018 and 2020.

SELECT * FROM albums WHERE year BETWEEN 2018 AND 2020;

-- Run the SQL command that returns the albums with band_ids of either 1, 3, or 4.

SELECT * FROM albums WHERE band_id IN (1,3,4);

-- Run the SQL command that returns the albums with titles that start with 'The'.

SELECT * FROM albums WHERE title LIKE 'The%';

-- Run the SQL command that returns the albums that have the two highest sales numbers.

SELECT * FROM albums ORDER BY num_sold DESC LIMIT 2;

-- Run the SQL command that returns the next two highest sales numbers (only the third and fourth highest sales).

SELECT * FROM albums ORDER BY num_sold DESC LIMIT 2 OFFSET 2;
