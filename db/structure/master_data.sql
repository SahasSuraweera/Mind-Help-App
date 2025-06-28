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
--staffmember table
CREATE TABLE StaffMember (
    staffId BIGINT PRIMARY KEY AUTO_INCREMENT,
    userId BIGINT NOT NULL,
    jobRole VARCHAR(50) NOT NULL,
    joinedDate DATE,
    salutation VARCHAR(10),
    firstName VARCHAR(50) NOT NULL,
    middleName VARCHAR(50),
    lastName VARCHAR(50) NOT NULL,
    nic VARCHAR(20) UNIQUE NOT NULL,
    gender VARCHAR(10),
    dateOfBirth DATE,
    personalEmail VARCHAR(100),
    staffEmail VARCHAR(100),
    staffPhone VARCHAR(20),
    isDeleted BOOLEAN DEFAULT FALSE
);


--4.appointment service - dbName: appointment

--5.payment service - dbName: payment









