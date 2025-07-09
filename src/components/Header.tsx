import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src="/logo.png" 
                alt="Green Beauty" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="/boutique" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Boutique
            </a>
            <a href="/a-propos" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              À propos
            </a>
            <a href="/greenlab" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              GreenLab
            </a>
            <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <a href="/panier" className="text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="/panier" className="text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Accueil
              </a>
              <a href="/boutique" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Boutique
              </a>
              <a href="/a-propos" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                À propos
              </a>
              <a href="/greenlab" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                GreenLab
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
              <div className="border-t pt-2">
                <a href="#compte" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                  Mon compte
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;