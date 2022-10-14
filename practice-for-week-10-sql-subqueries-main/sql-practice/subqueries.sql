.mode column
.headers on

SELECT cats.* FROM toys
JOIN cats ON cats.id = toys.cat_id
WHERE cats.name = 'Garfield';

INSERT INTO toys
(name, cat_id)
VALUES
('Pepperoni',
(
  SELECT id FROM cats
  WHERE name = 'Garfield'
)
);

SELECT * FROM toys
WHERE cat_id IN
(
  SELECT id FROM cats
  WHERE name = 'Garfield'
);
