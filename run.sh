#!/bin/bash

# Script de démarrage avancé pour le projet Engenigma React
# Ce script vérifie et installe toutes les dépendances nécessaires

echo "=========================================="
echo "  🚀 DÉMARRAGE DU PROJET ENGENIGMA  🚀"
echo "=========================================="
echo ""

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_message() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}$1${NC}"
}

# Vérifier si Node.js est installé
print_message "Vérification de Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé !"
    echo ""
    echo "🔗 Installation de Node.js :"
    echo "   • Ubuntu/Debian: sudo apt install nodejs npm"
    echo "   • CentOS/RHEL: sudo yum install nodejs npm"
    echo "   • Arch Linux: sudo pacman -S nodejs npm"
    echo "   • Ou téléchargez depuis: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
print_success "Node.js installé: $NODE_VERSION"

# Vérifier la version minimale de Node.js
NODE_MAJOR_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_MAJOR_VERSION" -lt 16 ]; then
    print_warning "Node.js version $NODE_VERSION détectée. Version 16+ recommandée."
fi

# Vérifier si npm est installé
print_message "Vérification de npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé !"
    exit 1
fi

NPM_VERSION=$(npm --version)
print_success "npm installé: v$NPM_VERSION"

# Vérifier si nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    print_error "Fichier package.json non trouvé !"
    echo ""
    echo "🗂️  Assurez-vous d'être dans le répertoire du projet Engenigma:"
    echo "   cd /chemin/vers/engenigma-react"
    exit 1
fi

print_success "Fichier package.json trouvé ✓"

# Afficher les informations du projet
echo ""
print_header "=========================================="
print_header "  📋 INFORMATIONS DU PROJET"
print_header "=========================================="

PROJECT_NAME=$(grep '"name"' package.json | head -1 | cut -d'"' -f4)
PROJECT_VERSION=$(grep '"version"' package.json | head -1 | cut -d'"' -f4)

echo "📦 Nom: $PROJECT_NAME"
echo "🔢 Version: $PROJECT_VERSION"
echo "⚛️  Framework: React + Vite"
echo "🌐 Port par défaut: 3000"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    print_warning "Dossier node_modules non trouvé."
    print_message "Installation des dépendances npm..."
    
    # Effacer le cache npm si nécessaire
    npm cache clean --force 2>/dev/null || true
    
    npm install
    
    if [ $? -eq 0 ]; then
        print_success "Dépendances installées avec succès ✓"
    else
        print_error "Erreur lors de l'installation des dépendances !"
        echo ""
        echo "🛠️  Solutions possibles :"
        echo "   • Vérifiez votre connexion internet"
        echo "   • Essayez: npm cache clean --force"
        echo "   • Supprimez node_modules et package-lock.json"
        exit 1
    fi
else
    print_success "Dossier node_modules trouvé ✓"
    
    # Vérifier si les dépendances sont à jour
    print_message "Vérification de l'intégrité des dépendances..."
    
    if ! npm list --depth=0 >/dev/null 2>&1; then
        print_warning "Dépendances manquantes ou corrompues détectées."
        print_message "Réinstallation des dépendances..."
        npm install
        
        if [ $? -eq 0 ]; then
            print_success "Dépendances mises à jour ✓"
        else
            print_error "Erreur lors de la mise à jour des dépendances !"
            exit 1
        fi
    else
        print_success "Toutes les dépendances sont installées ✓"
    fi
fi

# Vérifier les ports disponibles
print_message "Vérification du port 3000..."
if command -v lsof &> /dev/null; then
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        print_warning "Le port 3000 est déjà utilisé !"
        print_message "Vite utilisera automatiquement un port disponible."
    else
        print_success "Port 3000 disponible ✓"
    fi
else
    print_warning "Commande lsof non disponible. Impossible de vérifier les ports."
fi

# Vérifier l'espace disque
AVAILABLE_SPACE=$(df . | tail -1 | awk '{print $4}')
if [ "$AVAILABLE_SPACE" -lt 1000000 ]; then  # Moins de 1GB
    print_warning "Espace disque faible détecté."
fi

echo ""
print_header "=========================================="
print_header "  🎯 PRÊT À DÉMARRER"
print_header "=========================================="
echo ""
echo "🌐 Le serveur sera accessible sur :"
echo "   • Local:   http://localhost:3000/"
echo "   • Réseau:  http://[votre-ip]:3000/"
echo ""
echo "⚡ Fonctionnalités disponibles :"
echo "   • Hot Module Replacement (HMR)"
echo "   • Rechargement automatique"
echo "   • Mode sombre/clair"
echo "   • Design responsive"
echo ""
echo "🎮 Commandes utiles :"
echo "   • [h + Enter] : Afficher l'aide Vite"
echo "   • [r + Enter] : Redémarrer le serveur"
echo "   • [Ctrl+C]    : Arrêter le serveur"
echo ""

read -p "🚀 Appuyez sur [Entrée] pour démarrer le serveur ou [Ctrl+C] pour annuler..."

# Démarrer le serveur de développement
echo ""
print_message "Démarrage du serveur de développement..."
echo ""
print_header "=========================================="
print_header "  🌐 SERVEUR EN COURS D'EXÉCUTION"
print_header "=========================================="
echo ""
print_success "🎉 Le site Engenigma sera disponible dans quelques secondes..."
print_message "📝 Les logs du serveur apparaîtront ci-dessous"
echo ""

# Lancer npm start
exec npm start
