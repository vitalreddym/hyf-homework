CREATE DATABASE DBweek2
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE DBweek2;

CREATE TABLE Student (
  id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name varchar(255) NOT NULL,
  Address varchar(255) NOT NULL,
  DOB date NOT NULL
  /* FOREIGN KEY (id) REFERENCES Student_Course (Student_id) */
);

CREATE TABLE Student_Course (
  Student_Course id int(10) NOT NULL PRIMARY KEY,
  Student_id int(10) NOT NULL,
  Course_id int(10) NOT NULL
  /* FOREIGN KEY (Student_id) REFERENCES Student(id) */
);

CREATE TABLE Professor (
  Professor_id  int(10) unsigned NOT NULL PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE Course (
  id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Course_name varchar(255) NOT NULL,
  Professor_id int(10)
  /* FOREIGN KEY (`id`) REFERENCES `Student_Course`(`Course_id`),
  FOREIGN KEY (`Professor_id`) REFERENCES `Professor`(`Professor_id`) */
);

CREATE TABLE Registration (
  Register id int(10) NOT NULL PRIMARY KEY,
  Register date date NOT NULL
);

