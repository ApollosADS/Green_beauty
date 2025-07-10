#!/bin/bash

# Script de pré-déploiement pour Green Beauty Website
# Ce script effectue les vérifications et optimisations nécessaires avant le déploiement

set -e  # Arrêter le script en cas d'erreur

echo "🚀 Début du script de pré-déploiement..."

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages colorés
print_status() {
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

# 1. Vérifier que Node.js est installé
print_status "Vérification de Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé"
    exit 1
fi
NODE_VERSION=$(node --version)
print_success "Node.js version: $NODE_VERSION"

# 2. Vérifier que npm est installé
print_status "Vérification de npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé"
    exit 1
fi
NPM_VERSION=$(npm --version)
print_success "npm version: $NPM_VERSION"

# 3. Nettoyer les caches
print_status "Nettoyage des caches..."
rm -rf node_modules/.cache
rm -rf dist
print_success "Caches nettoyés"

  # 4. Installer les dépendances
  print_status "Installation des dépendances..."
  npm ci
  print_success "Dépendances installées"

# 5. Vérifier les variables d'environnement
print_status "Vérification des variables d'environnement..."
if [ -f ".env" ]; then
    print_success "Fichier .env trouvé"
else
    print_warning "Aucun fichier .env trouvé - vérifiez vos variables d'environnement"
fi

# 6. Linter le code
print_status "Vérification du code avec ESLint..."
if npm run lint; then
    print_success "Linting réussi"
else
    print_error "Erreurs de linting détectées"
    exit 1
fi

# 7. Formater le code
print_status "Formatage du code avec Prettier..."
if npm run format; then
    print_success "Formatage réussi"
else
    print_warning "Erreurs de formatage détectées"
fi

# 8. Build de production
print_status "Build de production..."
if npm run build; then
    print_success "Build de production réussi"
else
    print_error "Échec du build de production"
    exit 1
fi

# 9. Vérifier la taille du build
print_status "Vérification de la taille du build..."
BUILD_SIZE=$(du -sh dist | cut -f1)
print_success "Taille du build: $BUILD_SIZE"

# 10. Tests de base (si configurés)
if [ -f "package.json" ] && grep -q "\"test\":" package.json; then
    print_status "Exécution des tests..."
    if npm test; then
        print_success "Tests réussis"
    else
        print_error "Tests échoués"
        exit 1
    fi
else
    print_warning "Aucun script de test configuré"
fi

# 11. Vérification de sécurité
print_status "Vérification de sécurité avec npm audit..."
if npm audit --audit-level=moderate; then
    print_success "Aucune vulnérabilité critique détectée"
else
    print_warning "Vulnérabilités détectées - vérifiez npm audit"
fi

# 12. Optimisations finales
print_status "Optimisations finales..."
# Nettoyer les fichiers temporaires
find . -name "*.tmp" -delete
find . -name "*.log" -delete

print_success "✅ Script de pré-déploiement terminé avec succès!"
print_status "Votre application est prête pour le déploiement"

# Afficher un résumé
echo ""
echo "📋 Résumé du pré-déploiement:"
echo "   - Node.js: $NODE_VERSION"
echo "   - npm: $NPM_VERSION"
echo "   - Build: $BUILD_SIZE"
echo "   - Linting: ✅"
echo "   - Formatage: ✅"
echo "   - Build: ✅"
echo ""
echo "🚀 Prêt pour le déploiement!" 