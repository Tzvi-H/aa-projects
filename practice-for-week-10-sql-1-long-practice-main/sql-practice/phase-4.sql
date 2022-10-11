DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS romantic_relationships;
DROP TABLE IF EXISTS office_parties;

CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  department VARCHAR(255),
  role VARCHAR(255)
);

CREATE TABLE performance_reviews (
  id INTEGER PRIMARY key,
  employee_id INTEGER,
  score INTEGER,

  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE romantic_relationships (
  id INTEGER PRIMARY KEY,
  employee_id_1 INTEGER,
  employee_id_2 INTEGER,

  FOREIGN KEY (employee_id_1) REFERENCES employees(id),
  FOREIGN KEY (employee_id_2) REFERENCES employees(id)
);

CREATE TABLE office_parties (
  id INTEGER PRIMARY KEY,
  budget NUMERIC(7,2),
  onsite BOOLEAN
);


INSERT INTO employees
(first_name, last_name, department, role)
VALUES
('Michael', 'Scott', 'Management', 'Regional Manager'),
('Dwight', 'Schrute', 'Sales', 'Assistant Regional Manager'),
('Jim', 'Halpert', 'Sales', 'Sales Representative'),
('Pam', 'Beesly', 'Reception', 'Receptionist'),
('Kelly', 'Kapoor', 'Product Oversight', 'Customer Service Representative'),
('Angela', 'Martin', 'Accounting', 'Head of Accounting'),
('Roy', 'Anderson', 'Warehouse', 'Warehouse Staff');

INSERT INTO romantic_relationships
(employee_id_1, employee_id_2)
VALUES
(4, 7);

INSERT INTO employees
(first_name, last_name, department, role)
VALUES
('Ryan', 'Howard', 'Reception', 'Temp');

INSERT INTO office_parties
(budget, onsite)
VALUES
(100, true);

INSERT INTO performance_reviews
(employee_id, score)
VALUES
(2, 3.3);

INSERT INTO performance_reviews
(employee_id, score)
VALUES
(3, 4.2);

UPDATE performance_reviews
SET score = 9
WHERE employee_id = 2;

UPDATE performance_reviews
SET score = 9.3
WHERE employee_id = 3;

UPDATE employees
SET role = "Assistant Regional Manager"
WHERE first_name = "Jim"
AND last_name = 'Halpert';

UPDATE employees
SET
department = "Sales",
role = "Sales Representative"
WHERE first_name = "Ryan"
AND last_name = 'Howard';

INSERT INTO office_parties
(budget, onsite)
VALUES
(200, true);

INSERT INTO romantic_relationships
(employee_id_1, employee_id_2)
VALUES
(2, 6);

UPDATE performance_reviews
SET score = 6.2
WHERE employee_id = 6;

INSERT INTO romantic_relationships
(employee_id_1, employee_id_2)
VALUES
(5, 8);

INSERT INTO office_parties
(budget, onsite)
VALUES
(50, true);

delete from performance_reviews where employee_id = 3;
delete from employees where id = 3;

delete from romantic_relationships where employee_id_1 in (select id from employees where first_name = 'Roy' or first_name = 'Pam');
