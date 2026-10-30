@echo off
chcp 65001 > nul
title Standart va xizmatchi dasturlar

if exist "%~dp0offline\index.html" (
    start "" "%~dp0offline\index.html"
) else (
    echo Xatolik: offline\index.html fayli topilmadi!
    echo Avval buyruqni bajaring: npm run build:offline
    pause
    exit /b 1
)
exit
