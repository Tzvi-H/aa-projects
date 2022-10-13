.mode column
.headers on

-- SELECT COUNT(id) AS count
-- FROM cats;

SELECT name, birth_year
FROM cats
GROUP BY birth_year
ORDER BY birth_year
LIMIT 1;

SELECT name, birth_year
FROM cats
GROUP BY birth_year
ORDER BY birth_year DESC
LIMIT 1;
