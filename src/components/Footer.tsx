import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Leaf, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Green Beauty" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold">Green Beauty</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Cosmétiques artisanaux africains naturels créés avec amour pour révéler 
              votre beauté authentique. Des ingrédients purs d'Afrique pour une peau 
              radieuse et en bonne santé.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/boutique" className="text-gray-300 hover:text-white transition-colors">Boutique</a></li>
              <li><a href="/a-propos" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="/greenlab" className="text-gray-300 hover:text-white transition-colors">GreenLab</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">contact@greenbeauty.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">+229 69 01 24 48</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">3561 Cotonou, Fidjrossé<br />Houta, Bénin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Catégories de produits */}
        <div className="py-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Nos produits</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-medium text-green-400 mb-2">Soins Visage</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Masques purifiants</li>
                <li>Sérums anti-âge</li>
                <li>Crèmes hydratantes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-400 mb-2">Soins Corps</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Huiles nourrissantes</li>
                <li>Beurres corporels</li>
                <li>Gommages naturels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-400 mb-2">Soins Capillaires</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Shampoings naturels</li>
                <li>Masques capillaires</li>
                <li>Huiles fortifiantes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-400 mb-2">Savons</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Savon au karité</li>
                <li>Savon à l'argile</li>
                <li>Savon exfoliant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horaires d'ouverture */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Jeudi:</span>
                  <span>08h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi:</span>
                  <span>08h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>09h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span className="text-red-400">Fermé</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Livraison</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Cotonou:</span>
                  <span>24-48h</span>
                </div>
                <div className="flex justify-between">
                  <span>Autres villes:</span>
                  <span>3-5 jours</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison gratuite:</span>
                  <span className="text-green-400">Dès 15.000 FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informations légales */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-300">
              <a href="/conditions-generales" className="hover:text-white transition-colors">Conditions générales</a>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="/livraison-retours" className="hover:text-white transition-colors">Livraison & Retours</a>
              <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Leaf className="h-4 w-4 text-green-400" />
              <span>Produits 100% naturels</span>
              <Heart className="h-4 w-4 text-purple-400 ml-4" />
              <span>Fait avec amour au Bénin</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Green Beauty. Tous droits réservés. Cosmétiques artisanaux africains naturels - Cotonou, Bénin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;