

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    price INT,
    category INT,

    FOREIGN KEY(category) REFERENCES categories(id)
);

CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

SELECT p.name
FROM products as p, categories as c
WHERE p.category = c.id AND c.name = "Fruits";

SELECT *
FROM products as p
WHERE p.id = 3;