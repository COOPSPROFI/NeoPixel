CREATE TABLE "users" (
    "id" bigserial PRIMARY KEY,
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    "username" varchar NOT NULL,
    "password" varchar NOT NULL
);