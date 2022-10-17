USE jobs;

CREATE TABLE company(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    industry VARCHAR(20),
    employees INT
);

INSERT INTO Company (name,industry,employees)
VALUES ('Google','hi tech',1000);

INSERT INTO Company (name,industry,employees)
VALUES ('CyberArk','hi tech',2000);