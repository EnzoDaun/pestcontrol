@echo off
echo Construindo aplicacao para hospedagem na Hostinger...

REM Limpar pasta dist anterior
if exist dist rmdir /s /q dist

REM Build da aplicacao
call npm run build

REM Copiar arquivos de configuracao
if exist .htaccess copy .htaccess dist\
if exist web.config copy web.config dist\

echo.
echo Build concluido! Arquivos prontos na pasta 'dist'
echo.
echo Para hospedar na Hostinger:
echo 1. Faca upload de TODOS os arquivos da pasta 'dist' para public_html
echo 2. Certifique-se que o arquivo .htaccess foi enviado
echo 3. Se houver problemas, verifique se o servidor suporta .htaccess
echo.
pause
