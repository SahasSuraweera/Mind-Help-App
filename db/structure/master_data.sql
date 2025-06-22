--1.user service - dbName: user

--2.patient service - dbName: patientDB
-- Create a table for storing patient information
CREATE TABLE patients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    dob DATE,
    gender VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create a table for storing patient records
CREATE TABLE records (
    id INT PRIMARY KEY AUTO_INCREMENT,
    patientid INT NOT NULL,
    description TEXT,
    date DATE,
    doctor VARCHAR(100),
    FOREIGN KEY (patientid) REFERENCES patients(id) ON DELETE CASCADE
);

--3.staff service - dbName: staff

--4.appointment service - dbName: appointment

--5.payment service - dbName: payment









