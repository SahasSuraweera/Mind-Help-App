@echo off
title Mind-Help App - Stop All Services

echo ================================
echo Stopping all Mind-Help services
echo ================================

REM Stop Java (Spring Boot)
taskkill /F /IM java.exe >nul 2>&1

REM Stop Node (React)
taskkill /F /IM node.exe >nul 2>&1

REM Stop CMD windows opened by start-all
taskkill /F /IM cmd.exe >nul 2>&1

echo ================================
echo All services stopped.
echo ================================

pause
