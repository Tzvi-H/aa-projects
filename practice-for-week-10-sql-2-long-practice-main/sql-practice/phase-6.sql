-- Update the toy with the name of "Cheetos" to have a name of "Pooky"
-- Your code here
.mode column
.headers on

SELECT name FROM toys;

UPDATE toys
SET name = 'Pooky'
WHERE name = 'Cheetos';

SELECT name FROM toys;
