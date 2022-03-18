CREATE DATABASE School
DEFAULT CHARACTER SET = "utf8mb4";
USE School;


CREATE TABLE Class (
     id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name varchar(255) NOT NULL,
     begins_date DATE NOT NULL,
     ends_date DATE NOT NULL
);
ALTER TABLE Class ADD status ENUM('not-started', 'ongoing', 'finished');


CREATE TABLE Student(
    id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    class_id int(10) unsigned NOT NULL,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES Class (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX index_StudentName ON Student (name);


