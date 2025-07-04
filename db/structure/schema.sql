--1.user service - dbName: userDB

--2.patient service - dbName: patientDB

--3.Staff service - dbName: staffDB
-- Staff Member 1: Counsellor
INSERT INTO Staffmember (
    user_id, job_role, joined_date, salutation, first_name, middle_name, last_name,
    nic, gender, date_of_birth, personal_email, staff_email, staff_phone
) VALUES 
(1, 'Counsellor', '2022-03-01', 'Ms.', 'Nadeesha', 'Dilani', 'Perera', '991234567V', 'Female', '1999-04-12', 'nadeesha.p@gmail.com', 'nadeesha.perera@hospital.com', '0771234567'),
(2, 'Counsellor', '2021-06-15', 'Mrs.', 'Kumari', NULL, 'Fernando', '882345678V', 'Female', '1988-09-25', 'kumari88@yahoo.com', 'kumari.fernando@hospital.com', '0712345678'),
(3, 'Counsellor', '2020-01-10', 'Dr.', 'Saman', 'Ruwan', 'Jayasinghe', '751234567V', 'Male', '1975-11-03', 'saman.jaya@gmail.com', 'saman.jayasinghe@hospital.com', '0783456789'),
(4, 'Counsellor', '2023-01-20', 'Mr.', 'Nimal', NULL, 'De Silva', '901112223V', 'Male', '1990-01-01', 'nimal.desilva@gmail.com', 'nimal.desilva@hospital.com', '0704567890');

INSERT INTO counsellor (
    staff_id, display_name, specialization, description, hourly_rate
) VALUES 
(1, 'Ms. Nadeesha Dilani Perera', 'Grief Counseling', 'Experienced in helping patients deal with personal loss and emotional trauma.', 4000.00),
(2, 'Mrs. Kumari Fernando', 'Child Counseling', 'Specialist in emotional and behavioral therapy for children.', 4200.00),
(3, 'Dr. Saman Ruwan Jayasinghe', 'Clinical Psychology', 'Senior clinical psychologist with 15+ years of experience.', 5000.00);





--4.appointment service - dbName: appointmentDB

INSERT INTO appointment (
    slot_id, counsellor_id, date, time, appointment_fee,
    patient_name, contact_number, notes, status, is_deleted
) VALUES
(1, 1, '2025-07-04', '08:30:00', 3000.00, 'Nimal Perera', '0771234567', 'First-time consultation', 'Pending', FALSE),
(3, 1, '2025-07-04', '10:30:00', 3000.00, 'Kamal Silva', '0712345678', 'Follow-up session', 'Pending', FALSE),
(5, 2, '2025-07-05', '09:00:00', 3500.00, 'Sunethra Dissanayake', '0769876543', 'Career guidance', 'Pending', FALSE),
(7, 3, '2025-07-06', '11:00:00', 4000.00, 'Chathurika Fernando', '0754443322', '', 'Pending', False);

--5.payment service - dbName: paymentDB

INSERT INTO payment (
    patient_id, appointment_id, amount, payment_type, date, created_at, created_staff_id, status, is_Deleted
) VALUES 
(1, 1, 1500.00, 'cash', CURDATE(), CURTIME(), 3, 'Completed', 0),
(2, 2, 2000.50, 'online', '2025-06-30', '10:15:00', 4, 'Processing', 0),
(3, 3, 1800.00, 'pos', '2025-07-01', '12:45:00', 2, 'Pending', 0),
(4, 4, 2500.75, 'bank transfer', '2025-06-28', '09:00:00', NULL, 'Completed', 0),
(5, 5, 1700.25, 'cash', '2025-07-01', '15:30:00', 1, 'Refunded', 0);

