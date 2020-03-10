DROP DATABASE resturant_burger;

CREATE DATABASE resturant_burger;

USE resturant_burger;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);