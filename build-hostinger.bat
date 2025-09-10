@echo off
echo ==========================================
echo   BUILD SEGURO PARA HOSTINGER
echo ==========================================
echo.

REM Verificar se o arquivo .env existe
if not exist .env (
    echo ERRO: Arquivo .env nao encontrado!
    echo Copie .env.example para .env e configure suas credenciais.
    echo.
    pause
    exit /b 1
)

REM Verificar se as variáveis essenciais estão definidas
findstr /C:"VITE_EMAILJS_SERVICE_ID=" .env >nul
if errorlevel 1 (
    echo AVISO: VITE_EMAILJS_SERVICE_ID nao encontrado no .env
)

findstr /C:"VITE_EMAILJS_PUBLIC_KEY=" .env >nul
if errorlevel 1 (
    echo AVISO: VITE_EMAILJS_PUBLIC_KEY nao encontrado no .env
)

echo Verificando dependencias...
call npm audit --audit-level high
if errorlevel 1 (
    echo.
    echo AVISO: Vulnerabilidades encontradas nas dependencias!
    echo Execute 'npm audit fix' para corrigir.
    echo.
    set /p continue="Continuar mesmo assim? (s/N): "
    if /i not "%continue%"=="s" exit /b 1
)

echo.
echo Limpando build anterior...
if exist dist rmdir /s /q dist

echo.
echo Executando build de producao...
set NODE_ENV=production
call npm run build

if errorlevel 1 (
    echo.
    echo ERRO: Build falhou!
    pause
    exit /b 1
)

echo.
echo Copiando arquivos de configuracao...
if exist .htaccess copy .htaccess dist\
if exist web.config copy web.config dist\

REM Verificar se arquivos sensíveis não estão no build
if exist dist\.env (
    echo ERRO CRITICO: Arquivo .env encontrado no build!
    echo Removendo arquivo perigoso...
    del dist\.env
)

if exist dist\*.log (
    echo Removendo arquivos de log do build...
    del dist\*.log
)

echo.
echo ==========================================
echo   BUILD CONCLUIDO COM SUCESSO!
echo ==========================================
echo.
echo Arquivos prontos na pasta 'dist'
echo.
echo CHECKLIST DE DEPLOY:
echo [ ] 1. Fazer upload de TODOS os arquivos da pasta 'dist'
echo [ ] 2. Configurar SSL/HTTPS no painel da Hostinger
echo [ ] 3. Testar o formulario de contato
echo [ ] 4. Verificar se todas as paginas carregam
echo [ ] 5. Testar em dispositivos moveis
echo.
echo IMPORTANTE:
echo - NAO faca upload do arquivo .env
echo - Mantenha o arquivo .htaccess no servidor
echo - Verifique se o SSL esta ativo
echo.
pause
