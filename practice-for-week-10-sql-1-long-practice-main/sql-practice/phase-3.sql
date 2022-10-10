-- 1
INSERT INTO customers
(name, phone)
VALUES
('Rachel', 1111111111);

-- 2
SELECT * FROM customers
WHERE ID = 1;

UPDATE customers
SET points = 6
WHERE ID = 1;

INSERT INTO coffee_orders DEFAULT VALUES;

SELECT * FROM coffee_orders;

-- 3
INSERT INTO customers
(name, email, phone)
VALUES
('Monica', 'monica@friends.show', 2222222222),
('Phoebe', 'phoebe@friends.show', 3333333333);

SELECT * FROM customers;

-- 4
SELECT * FROM customers
WHERE ID = 3;

UPDATE customers
SET points = 8
WHERE ID = 3;

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 5

SELECT * FROM customers
WHERE ID = 1;

UPDATE customers
SET points = 10
WHERE ID = 1;

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

SELECT * FROM customers
WHERE ID = 2;

UPDATE customers
SET points = 9
WHERE ID = 2;

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 6
SELECT points FROM customers WHERE name = 'Monica';

-- 7
SELECT points FROM customers WHERE name = 'Rachel';
UPDATE customers
SET points = 0
WHERE name = 'Rachel';
INSERT INTO coffee_orders (is_redeemed) VALUES (1);

-- 8
INSERT INTO customers
(name, email)
VALUES
('Joey', 'joey@friends.show'),
('Chandler', 'chandler@friends.show'),
('Ross', 'ross@friends.show');

-- 9
UPDATE customers
SET points = 11
WHERE name = 'Ross';
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES; -- 18
INSERT INTO coffee_orders DEFAULT VALUES; -- 19

-- 10
UPDATE customers
SET points = 12
WHERE name = 'Monica';
INSERT INTO coffee_orders DEFAULT VALUES; -- 20
INSERT INTO coffee_orders DEFAULT VALUES; -- 21
INSERT INTO coffee_orders DEFAULT VALUES; -- 22

-- 11
UPDATE customers
SET points = 9
WHERE name = 'Phoebe';
INSERT INTO coffee_orders DEFAULT VALUES; -- 23

-- 12
UPDATE customers
SET points = 9
WHERE name = 'Ross';
DELETE FROM coffee_orders WHERE id = 18 OR id = 19;

-- 13
UPDATE customers
SET points = 7
WHERE name = 'Joey';
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 14
SELECT points FROM customers WHERE name = 'Monica';
UPDATE customers
SET points = 2
WHERE name = 'Rachel';
INSERT INTO coffee_orders (is_redeemed) VALUES (1);

-- 15
SELECT * FROM customers WHERE name = 'Chandler';
DELETE FROM customers WHERE name = 'Chandler';

-- 16
UPDATE customers
SET points = 10
WHERE name = 'Ross';
INSERT INTO coffee_orders DEFAULT VALUES;

-- 17
UPDATE customers
SET points = 8
WHERE name = 'Joey';
INSERT INTO coffee_orders DEFAULT VALUES;

-- 18
SELECT * FROM customers WHERE name = 'Phoebe';
UPDATE customers SET email = 'p_as_in_phoebe@friends.show' WHERE name = 'Phoebe';
