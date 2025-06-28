--1.user service - dbName: userDB

--2.patient service - dbName: patientDB



--4.appointment service - dbName: appointmentDB

--5.payment service - dbName: paymentDB

INSERT INTO Payments (amount, payment_type, date, created_at, status, processed_staff_ID, is_Refunded) VALUES
(100.50, 'CASH', '2025-06-26', NOW(), 'COMPLETED', 1, 0),
(250.00, 'CARD', '2025-06-25', NOW(), 'PENDING', 2, 0),
(75.99, 'ONLINE', '2025-06-24', NOW(), 'COMPLETED', NULL, 0),
(120.00, 'CASH', '2025-06-23', NOW(), 'REFUNDED', 1, 1),
(300.25, 'ONLINE', '2025-06-22', NOW(), 'PROCESSING', NULL, 0);

