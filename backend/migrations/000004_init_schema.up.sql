CREATE TABLE "orders" (
    "id" integer PRIMARY KEY,
    "email" varchar NOT NULL,   
    "name" varchar NOT NULL,
    "tel" varchar NOT NULL,
    "printername" varchar NOT NULL,
    "description" varchar NOT NULL,
    "date" timestamp NOT NULL
);