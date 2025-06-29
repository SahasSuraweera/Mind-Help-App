@echo off

REM Start Patient Service
start cmd /k "cd patient-service && mvn spring-boot:run"

REM Start React Frontend
start cmd /k "cd frontend && npm start"