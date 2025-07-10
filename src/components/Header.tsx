import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src='/logo.png' alt='Green Beauty' className='h-12 w-auto' />
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className='hidden md:flex space-x-8'>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href)
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <button className='text-gray-700 hover:text-purple-600 transition-colors'>
              <Search className='h-5 w-5' />
            </button>
            <button className='text-gray-700 hover:text-purple-600 transition-colors'>
              <User className='h-5 w-5' />
            </button>
            <Link
              to='/panier'
              className='text-gray-700 hover:text-purple-600 transition-colors relative'
            >
              <ShoppingBag className='h-5 w-5' />
              <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                0
              </span>
            </Link>
          </div>

          {/* Menu Mobile */}
          <div className='md:hidden flex items-center space-x-4'>
            <Link
              to='/panier'
              className='text-gray-700 hover:text-purple-600 transition-colors relative'
            >
              <ShoppingBag className='h-5 w-5' />
              <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-purple-600 transition-colors'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(link.href)
                      ? 'text-purple-600 font-medium'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className='border-t pt-2'>
                <a
                  href='#compte'
                  className='block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors'
                >
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
