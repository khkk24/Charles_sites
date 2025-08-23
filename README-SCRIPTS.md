# 🚀 Scripts d'Exécution du Projet Engenigma

Ce projet contient plusieurs scripts pour faciliter le développement et le déploiement de l'application Engenigma React.

## 📋 Scripts Disponibles

### 🐧 Pour Linux/macOS

#### `./run.sh` - Script de Développement Avancé
Script complet avec vérifications et diagnostics :
```bash
./run.sh
```

**Fonctionnalités :**
- ✅ Vérification automatique de Node.js et npm
- ✅ Installation automatique des dépendances
- ✅ Vérification de l'intégrité des packages
- ✅ Diagnostic des ports et de l'espace disque
- ✅ Interface colorée et informative

#### `./start.sh` - Script Simple
Script basique pour un démarrage rapide :
```bash
./start.sh
```

#### `./build.sh` - Script de Production
Pour compiler le projet pour la production :
```bash
./build.sh
```

### 🪟 Pour Windows

#### `run.bat` - Script de Développement
Double-cliquez sur le fichier ou exécutez dans cmd :
```cmd
run.bat
```

## 🛠️ Installation Manuelle

Si vous préférez installer manuellement :

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm start

# 3. Pour la production
npm run build
```

## 📋 Prérequis

- **Node.js** version 16+ ([Télécharger](https://nodejs.org/))
- **npm** (inclus avec Node.js)
- **Git** (optionnel, pour le développement)

### Installation des Prérequis

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install nodejs npm
```

#### CentOS/RHEL/Fedora
```bash
sudo dnf install nodejs npm
# ou pour les versions plus anciennes :
sudo yum install nodejs npm
```

#### Arch Linux
```bash
sudo pacman -S nodejs npm
```

#### macOS (avec Homebrew)
```bash
brew install node
```

#### Windows
Téléchargez l'installateur depuis [nodejs.org](https://nodejs.org/)

## 🌐 Accès à l'Application

Une fois démarrée, l'application sera accessible sur :
- **Local :** http://localhost:3000/
- **Réseau :** http://[votre-ip]:3000/

## 🎮 Commandes Vite Utiles

Pendant que le serveur fonctionne :
- `h + Enter` : Afficher l'aide
- `r + Enter` : Redémarrer le serveur
- `Ctrl + C` : Arrêter le serveur

## 🔧 Dépannage

### Problèmes Courants

#### Port 3000 déjà utilisé
```bash
# Trouver le processus qui utilise le port
sudo lsof -i :3000

# Tuer le processus (remplacez PID par l'ID du processus)
kill PID
```

#### Erreurs de dépendances
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Problèmes de permissions (Linux/macOS)
```bash
# Rendre les scripts exécutables
chmod +x *.sh
```

### Support

Pour plus d'aide :
1. Vérifiez que Node.js et npm sont à jour
2. Consultez les logs d'erreur
3. Essayez de supprimer `node_modules` et réinstaller
4. Vérifiez votre connexion internet

## 📁 Structure du Projet

```
engenigma-react/
├── public/              # Fichiers statiques
├── src/                 # Code source React
├── dist/               # Build de production (généré)
├── node_modules/       # Dépendances (généré)
├── run.sh              # Script principal (Linux/macOS)
├── start.sh            # Script simple (Linux/macOS)
├── build.sh            # Script de build (Linux/macOS)
├── run.bat             # Script principal (Windows)
├── package.json        # Configuration npm
└── README-SCRIPTS.md   # Ce fichier
```

## ⚡ Développement

L'application utilise :
- **React 18** avec hooks
- **Vite** pour le build rapide
- **React Bootstrap** pour l'UI
- **React Router** pour la navigation
- **Hot Module Replacement** pour le développement

Bon développement ! 🎉
