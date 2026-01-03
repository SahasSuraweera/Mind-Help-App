# 🧠 Mind-Help – Counselling Management System

Mind-Help is a **microservices-based Counselling Management System** developed as part of an academic **Software Engineering coursework project**.

This repository contains the backend microservices and frontend web application that together enable efficient management of counselling operations, including patients, appointments, staff, and payments.

The system is designed using **modern enterprise architecture principles**, focusing on scalability, maintainability, and clear separation of responsibilities.

---

## 📌 Project Overview

The **Mind-Help Counselling Management System** supports the digital management of counselling centers and mental health service providers.

It allows authorized users to:
- Manage patient records
- Schedule and manage counselling appointments
- Maintain staff and counsellor information
- Handle payment records securely
- Monitor system operations through a centralized interface

The system follows a **microservices architecture**, where each core domain is handled by an independent backend service.

---

## 🎓 Academic Context

- **Programme:** Higher National Diploma in Software Engineering  
- **Institution:** National Institute of Business Management (NIBM)  
- **Assessment Type:** Academic / Coursework Project  
- **Project Domain:** Software Engineering & Distributed Systems  

This project was completed as part of an academic team project under institutional guidance.

---

## 🛠️ System Features

The Mind-Help system provides the following core features:

- 🧑‍⚕️ Patient management (create, view, update patient records)
- 📅 Appointment scheduling and management
- 👩‍💼 Staff and counsellor management
- 💳 Payment processing and record management
- 🔐 Role-based access and data separation
- 🌐 REST API–based communication
- 🧩 Microservices-based backend architecture

---

## 🏗️ System Architecture

The platform is built using a **client–server architecture** with clearly separated layers.

```text
Frontend (React)
↓
REST APIs
↓
Spring Boot Microservices
↓
MySQL Databases
```

Each microservice:
- Runs independently on its own port
- Has its own database schema
- Communicates only via REST APIs

---

## 🔌 Microservices & Ports

| Microservice | Port | Responsibility |
|-------------|------|---------------|
| Patient Service | 8081 | Patient records management |
| Appointment Service | 8082 | Counselling appointments |
| Staff Service | 8083 | Staff & counsellor management |
| Payment Service | 8084 | Payment processing |
| Frontend (React) | 3000 | User interface |

---

## 🧩 Backend Architecture (High-Level)

All backend services follow a **standardized layered architecture**:
```text
Controller → Service → Repository → Database
```
- **Controller Layer:** Handles HTTP requests and responses
- **Service Layer:** Contains business logic
- **Repository Layer:** Manages database access using ORM
- **Database Layer:** Stores data in MySQL

---

## 🧠 ORM & Data Persistence

- Object–Relational Mapping is implemented using **Spring Data JPA & Hibernate**
- Java entities are mapped directly to MySQL tables
- Database operations are handled without manual SQL queries

---

## 🧩 Tech Stack

### 🖥️ Backend
- Java  
- Spring Boot  
- Spring Web (REST APIs)  
- Spring Data JPA  
- Hibernate  
- Maven  

### 🌐 Frontend
- React.js  
- JavaScript  
- Axios  
- HTML & CSS  

### 🗄️ Database
- MySQL  

### 🛠️ Tools & Platforms
- Git & GitHub  
- Postman (API testing)  
- Visual Studio Code / IntelliJ IDEA  

---

## 📁 Repository Structure (High-Level)

```text
Mind-Help-App/
│
├── patient-service/
├── appointment-service/
├── staff-service/
├── payment-service/
├── frontend/
├── db/
├── start-all.bat
├── stop-all.bat
└── README.md
```

---

## 🚀 How to Run the Application

### Prerequisites
Ensure the following are installed:

- Java 17 or later  
- Maven  
- Node.js & npm  
- MySQL Server  
- Git  

---

### Steps to Run (Windows)

1. Clone the repository:
```bash
git clone https://github.com/Sahas9923/Mind-Help-App
cd Mind-Help-App
```
2. Configure MySQL databases for each microservice in application.properties or application.yml.

3. Start all services using the provided script:

```bash
start-all.bat
```

4. Access the application:

Frontend: http://localhost:3000
Backend APIs run on ports 8081–8084

5. Stop All Services

```bash
stop-all.bat
```

## 🎯 Target Use Cases

- Counselling and mental health management systems  
- Microservices-based academic projects  
- REST API–driven applications  
- Portfolio-ready full-stack systems  

---

## 📄 Presentation

This repository represents the implementation of the **Mind-Help Counselling Management System**.

The complete academic presentation includes:

- System overview and objectives  
- Architecture and design decisions  
- API design and workflows  
- Implementation details  

---

## 📜 License

This project is released **strictly for educational and academic purposes**.














