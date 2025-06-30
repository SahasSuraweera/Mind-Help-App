--1.user service - dbName: userDB

--2.patient service - dbName: patientDB

--3.Staff service - dbName: staffDB
-- Staff Member 1: Counsellor
INSERT INTO StaffMember (
    userId, jobRole, joinedDate, salutation, firstName, middleName, lastName,
    nic, gender, dateOfBirth, personalEmail, staffEmail, staffPhone, isDeleted
) VALUES (
    101, 'Counsellor', '2022-06-01', 'Dr', 'Nimal', 'Kumara', 'Perera',
    '901234567V', 'Male', '1985-03-12', 'nimal.kumara@example.com', 'nimal.perera@clinic.com', '0771234567', FALSE
);

-- Staff Member 2: Counsellor
INSERT INTO StaffMember (
    userId, jobRole, joinedDate, salutation, firstName, middleName, lastName,
    nic, gender, dateOfBirth, personalEmail, staffEmail, staffPhone, isDeleted
) VALUES (
    102, 'Counsellor', '2023-01-15', 'Ms', 'Sanduni', 'Lakmali', 'Fernando',
    '910987654V', 'Female', '1990-07-21', 'sanduni.lakmali@example.com', 's.fernando@clinic.com', '0712345678', FALSE
);

-- Staff Member 3: Receptionist
INSERT INTO StaffMember (
    userId, jobRole, joinedDate, salutation, firstName, middleName, lastName,
    nic, gender, dateOfBirth, personalEmail, staffEmail, staffPhone, isDeleted
) VALUES (
    103, 'Receptionist', '2024-03-10', 'Mr', 'Tharindu', 'Nuwan', 'Jayasinghe',
    '920456789V', 'Male', '1992-11-02', 'tharindu.jayasinghe@example.com', 't.jayasinghe@clinic.com', '0758765432', FALSE
);



--4.appointment service - dbName: appointmentDB

--5.payment service - dbName: paymentDB

INSERT INTO Payments (amount, payment_type, date, created_at, status, processed_staff_ID, is_Refunded) VALUES
(100.50, 'CASH', '2025-06-26', NOW(), 'COMPLETED', 1, 0),
(250.00, 'CARD', '2025-06-25', NOW(), 'PENDING', 2, 0),
(75.99, 'ONLINE', '2025-06-24', NOW(), 'COMPLETED', NULL, 0),
(120.00, 'CASH', '2025-06-23', NOW(), 'REFUNDED', 1, 1),
(300.25, 'ONLINE', '2025-06-22', NOW(), 'PROCESSING', NULL, 0);
