CREATE TABLE "consults" (
    "id" bigserial PRIMARY KEY,
    "name" varchar NOT NULL,
    "phone" varchar NOT NULL,
    "email" timestamp NOT NULL,
    "status" varchar NOT NULL
);