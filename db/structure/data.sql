--staffmember data--

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
