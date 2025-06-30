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

CREATE TABLE Staff ( 
    staff_id BIGINT PRIMARY KEY AUTO_INCREMENT, 
    user_id BIGINT NOT NULL, 
    job_role VARCHAR(50) NOT NULL, 
    joined_date DATE, 
    salutation VARCHAR(10), 
    first_name VARCHAR(50) NOT NULL, 
    middle_name VARCHAR(50), 
    last_name VARCHAR(50) NOT NULL, 
    nic VARCHAR(20) UNIQUE NOT NULL, 
    gender VARCHAR(10), 
    date_of_birth DATE, 
    personal_email VARCHAR(100), 
    staff_email VARCHAR(100), 
    staff_phone VARCHAR(20), 
    is_Deleted BOOLEAN DEFAULT FALSE );

CREATE TABLE counsellor (
    counsellor_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    staff_id BIGINT NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    description TEXT,
    hourly_rate DECIMAL(10, 2),
    FOREIGN KEY (staff_id) REFERENCES staffmember(staff_id)
);


--4.appointment service - dbName: appointmentDB

--5.payment service - dbName: paymentDB

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    appointment_id INT NOT NULL,
    amount FLOAT NOT NULL,
    payment_type ENUM('online', 'pos', 'cash', 'bank transfer') DEFAULT NULL,
    date DATE NOT NULL DEFAULT CURDATE(),
    created_at TIME DEFAULT CURRENT_TIME;
    created_staff_id INT NULL,
    status ENUM('Pending', 'Processing', 'Completed', 'Failure', 'Refunded') DEFAULT NULL,
    is_Deleted BOOLEAN DEFAULT 0
);









