@echo off
REM Script de démarrage pour le projet Engenigma React (Windows)
REM Ce script vérifie et installe toutes les dépendances nécessaires

echo ==========================================
echo   🚀 DÉMARRAGE DU PROJET ENGENIGMA  🚀
echo ==========================================
echo.

REM Vérifier si Node.js est installé
echo [INFO] Vérification de Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js n'est pas installé !
    echo.
    echo 🔗 Installez Node.js depuis : https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [SUCCESS] Node.js installé: %NODE_VERSION%

REM Vérifier si npm est installé
echo [INFO] Vérification de npm...
npm --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm n'est pas installé !
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [SUCCESS] npm installé: v%NPM_VERSION%

REM Vérifier si package.json existe
if not exist "package.json" (
    echo [ERROR] Fichier package.json non trouvé !
    echo.
    echo 🗂️  Assurez-vous d'être dans le répertoire du projet Engenigma
    pause
    exit /b 1
)

echo [SUCCESS] Fichier package.json trouvé ✓

echo.
echo ==========================================
echo   📋 INFORMATIONS DU PROJET
echo ==========================================
echo 📦 Nom: Engenigma
echo 🔢 Version: 1.0.0
echo ⚛️  Framework: React + Vite
echo 🌐 Port par défaut: 3000
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo [WARNING] Dossier node_modules non trouvé.
    echo [INFO] Installation des dépendances npm...
    
    npm install
    
    if %ERRORLEVEL% equ 0 (
        echo [SUCCESS] Dépendances installées avec succès ✓
    ) else (
        echo [ERROR] Erreur lors de l'installation des dépendances !
        echo.
        echo 🛠️  Solutions possibles :
        echo    • Vérifiez votre connexion internet
        echo    • Essayez: npm cache clean --force
        echo    • Supprimez node_modules et package-lock.json
        pause
        exit /b 1
    )
) else (
    echo [SUCCESS] Dossier node_modules trouvé ✓
    
    REM Vérifier si les dépendances sont à jour
    echo [INFO] Vérification de l'intégrité des dépendances...
    
    npm list --depth=0 >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo [WARNING] Dépendances manquantes ou corrompues détectées.
        echo [INFO] Réinstallation des dépendances...
        npm install
        
        if %ERRORLEVEL% equ 0 (
            echo [SUCCESS] Dépendances mises à jour ✓
        ) else (
            echo [ERROR] Erreur lors de la mise à jour des dépendances !
            pause
            exit /b 1
        )
    ) else (
        echo [SUCCESS] Toutes les dépendances sont installées ✓
    )
)

echo.
echo ==========================================
echo   🎯 PRÊT À DÉMARRER
echo ==========================================
echo.
echo 🌐 Le serveur sera accessible sur :
echo    • Local:   http://localhost:3000/
echo    • Réseau:  http://[votre-ip]:3000/
echo.
echo ⚡ Fonctionnalités disponibles :
echo    • Hot Module Replacement (HMR)
echo    • Rechargement automatique
echo    • Mode sombre/clair
echo    • Design responsive
echo.
echo 🎮 Commandes utiles :
echo    • [h + Enter] : Afficher l'aide Vite
echo    • [r + Enter] : Redémarrer le serveur
echo    • [Ctrl+C]    : Arrêter le serveur
echo.

pause

REM Démarrer le serveur de développement
echo.
echo [INFO] Démarrage du serveur de développement...
echo.
echo ==========================================
echo   🌐 SERVEUR EN COURS D'EXÉCUTION
echo ==========================================
echo.
echo [SUCCESS] 🎉 Le site Engenigma sera disponible dans quelques secondes...
echo [INFO] 📝 Les logs du serveur apparaîtront ci-dessous
echo.

REM Lancer npm start
npm start
