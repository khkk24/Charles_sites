#!/bin/bash

# Script de build et déploiement pour le projet Engenigma React
# Ce script compile le projet pour la production

echo "=========================================="
echo "  🏗️  BUILD DE PRODUCTION ENGENIGMA  🏗️"
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

# Vérifications préliminaires
print_message "Vérifications préliminaires..."

if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé !"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé !"
    exit 1
fi

if [ ! -f "package.json" ]; then
    print_error "Fichier package.json non trouvé !"
    exit 1
fi

print_success "Toutes les vérifications passées ✓"

# Nettoyer les builds précédents
if [ -d "dist" ]; then
    print_message "Suppression du build précédent..."
    rm -rf dist
    print_success "Build précédent supprimé ✓"
fi

# Installer/vérifier les dépendances
if [ ! -d "node_modules" ]; then
    print_message "Installation des dépendances..."
    npm install
    if [ $? -ne 0 ]; then
        print_error "Erreur lors de l'installation des dépendances !"
        exit 1
    fi
fi

# Lancer le build de production
echo ""
print_header "=========================================="
print_header "  🔨 COMPILATION EN COURS..."
print_header "=========================================="
echo ""

print_message "Lancement du build de production..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    print_success "🎉 Build de production terminé avec succès !"
    
    # Informations sur le build
    if [ -d "dist" ]; then
        BUILD_SIZE=$(du -sh dist 2>/dev/null | cut -f1)
        FILE_COUNT=$(find dist -type f | wc -l)
        
        echo ""
        print_header "📊 STATISTIQUES DU BUILD :"
        echo "   📁 Taille totale: $BUILD_SIZE"
        echo "   📄 Nombre de fichiers: $FILE_COUNT"
        echo "   📂 Dossier de sortie: ./dist/"
        
        # Liste des principaux fichiers
        echo ""
        print_message "Principaux fichiers générés :"
        find dist -name "*.js" -o -name "*.css" -o -name "*.html" | head -10 | while read file; do
            size=$(du -h "$file" 2>/dev/null | cut -f1)
            echo "   📄 $file ($size)"
        done
    fi
    
    echo ""
    print_header "=========================================="
    print_header "  🚀 DÉPLOIEMENT"
    print_header "=========================================="
    echo ""
    echo "🌐 Le build est prêt pour le déploiement !"
    echo ""
    echo "📋 Prochaines étapes :"
    echo "   1. Télécharger le contenu du dossier 'dist/'"
    echo "   2. Le déployer sur votre serveur web"
    echo "   3. Configurer votre serveur pour servir index.html"
    echo ""
    echo "🔧 Serveurs compatibles :"
    echo "   • Apache, Nginx, IIS"
    echo "   • Netlify, Vercel, GitHub Pages"
    echo "   • AWS S3, Google Cloud Storage"
    echo ""
    echo "💡 Pour tester localement :"
    echo "   npm run preview"
    
else
    print_error "❌ Erreur lors du build de production !"
    echo ""
    echo "🛠️  Solutions possibles :"
    echo "   • Vérifiez les erreurs ci-dessus"
    echo "   • Assurez-vous que toutes les dépendances sont installées"
    echo "   • Vérifiez qu'il n'y a pas d'erreurs TypeScript/JavaScript"
    exit 1
fi
