CREATE TABLE "kids" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "age" int
);

CREATE TABLE "toys" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "kid_id" int
);

ALTER TABLE "toys" ADD FOREIGN KEY ("kid_id") REFERENCES "kids" ("id");
