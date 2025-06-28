--1.user service - dbName: userDB

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

--4.appointment service - dbName: appointmentDB

--5.payment service - dbName: paymentDB

CREATE TABLE payment (
    payment_ID INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    appointment_id INT NOT NULL,
    amount FLOAT NOT NULL,
    payment_type ENUM('online', 'pos', 'cash', 'bank transfer') DEFAULT NULL,
    date DATE NOT NULL DEFAULT CURDATE(),
    created_at TIME DEFAULT CURRENT_TIME;
    created_staff_ID INT NULL,
    status ENUM('Pending', 'Processing', 'Completed', 'Failure', 'Refunded') DEFAULT NULL,
    is_Deleted BOOLEAN DEFAULT 0
);









