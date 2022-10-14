.mode column
.headers on

-- SELECT cats.* FROM toys
-- JOIN cats ON cats.id = toys.cat_id
-- WHERE cats.name = 'Garfield';

-- INSERT INTO toys
-- (name, cat_id)
-- VALUES
-- ('Pepperoni',
-- (
--   SELECT id FROM cats
--   WHERE name = 'Garfield'
-- )
-- );

-- SELECT * FROM toys
-- WHERE cat_id IN
-- (
--   SELECT id FROM cats
--   WHERE name = 'Garfield'
-- );

-- INSERT INTO toys
-- (name, cat_id)
-- SELECT 'Cat Bed', id
-- FROM cats
-- WHERE name IN
-- ("Tiger", "Oscar", "Garfield");

-- SELECT * FROM toys;

INSERT INTO cats_backup
SELECT * FROM cats;

INSERT INTO toys_backup
SELECT * FROM toys;

SELECT COUNT(id) FROM toys;
SELECT COUNT(id) FROM toys_backup;

SELECT COUNT(id) FROM cats;
SELECT COUNT(id) FROM cats_backup;
