@echo off
cd /d %~dp0

title Mind-Help App - Auto Starter

echo ================================
echo Starting Mind-Help Microservices
echo ================================

REM Start Backend Services
start "Patient Service" cmd /k "cd patient-service && mvn spring-boot:run"
start "Appointment Service" cmd /k "cd appointment-service && mvn spring-boot:run"
start "Payment Service" cmd /k "cd payment-service && mvn spring-boot:run"
start "Staff Service" cmd /k "cd staff-service && mvn spring-boot:run"

REM Wait 10 seconds before starting frontend
echo Waiting 10 seconds for backend services to initialize...
timeout /t 10 /nobreak >nul

REM Start React Frontend
start "Frontend" cmd /k "cd frontend && npm start"

echo ================================
echo All services are starting...
echo ================================
