#!/bin/bash

# Script d'exécution pour Engenigma React App
# Ce script démarre automatiquement l'application React

echo "🚀 Démarrage de l'application Engenigma..."
echo "================================================"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Afficher les versions
echo "📦 Version Node.js: $(node --version)"
echo "📦 Version npm: $(npm --version)"
echo ""

# Vérifier si le répertoire node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📥 Installation des dépendances..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Erreur lors de l'installation des dépendances."
        exit 1
    fi
    echo "✅ Dépendances installées avec succès!"
    echo ""
fi

# Nettoyer le cache si nécessaire
echo "🧹 Nettoyage du cache..."
npm run build --if-present 2>/dev/null || true

echo "🌟 Démarrage du serveur de développement..."
echo "📍 L'application sera disponible sur: http://localhost:3000"
echo "🔄 Pour arrêter le serveur, appuyez sur Ctrl+C"
echo ""
echo "================================================"

# Démarrer l'application
npm start
