CREATE DATABASE "laboleria";

CREATE TABLE "cakes" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price" NUMERIC NOT NULL
    "flavourId" INTEGER NOT NULL REFERENCES "flavours"("id"),
);

CREATE TABLE "clients" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL
);

CREATE TABLE "orders" (
	id SERIAL NOT NULL PRIMARY KEY,
	"clientId" INTEGER NOT NULL REFERENCES "clients"("id"),
	"cakeId" INTEGER NOT NULL REFERENCES "cakes"("id"),
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"totalPrice"  NUMERIC NOT NULL
);

CREATE TABLE "flavours"(
    id SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL UNIQUE
);