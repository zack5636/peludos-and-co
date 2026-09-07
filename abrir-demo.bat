@echo off
title Peludos & Co. - demo
cd /d "%~dp0"
if not exist "node_modules" (
  echo Instalando dependencias por primera vez. Esto tarda un par de minutos...
  call npm install || goto :error
)
echo.
echo   Web publica : http://localhost:5180
echo   Panel admin : http://localhost:5180/admin
echo.
call npm run dev
goto :eof
:error
echo.
echo No se pudo instalar. Comprueba que Node.js esta instalado (node -v).
pause
