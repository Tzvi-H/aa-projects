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
