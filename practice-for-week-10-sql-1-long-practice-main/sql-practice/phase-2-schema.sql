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
