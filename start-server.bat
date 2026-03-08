@echo off
set PATH=D:\Node;%PATH%
cd /d D:\my-nextjs-app
echo Installing dependencies...
call "D:\Node\node.exe" "D:\Node\node_modules\npm\bin\npm-cli.js" install --no-optional
echo Starting development server...
call "D:\Node\node.exe" "D:\Node\node_modules\npm\bin\npm-cli.js" run dev
pause
