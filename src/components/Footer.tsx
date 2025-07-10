import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Leaf,
  Heart,
} from 'lucide-react';

const QUICK_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

const LEGAL_LINKS = [
  { href: '/conditions-generales', label: 'Conditions générales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { href: '/livraison-retours', label: 'Livraison & Retours' },
  { href: '/faq', label: 'FAQ' },
];

const SOCIALS = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

const CONTACTS = [
  {
    icon: Mail,
    value: 'contact@greenbeauty.com',
  },
  {
    icon: Phone,
    value: '+229 69 01 24 48',
  },
  {
    icon: MapPin,
    value: (
      <>
        3561 Cotonou, Fidjrossé
        <br />
        Houta, Bénin
      </>
    ),
  },
];

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Bloc principal : logo, liens, contact */}
        <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
          {/* Logo & description & réseaux */}
          <div>
            <div className='flex items-center mb-3'>
              <img
                src='/logo.png'
                alt='Green Beauty'
                className='h-9 w-auto mr-2'
              />
              <span className='text-lg font-bold'>Green Beauty</span>
            </div>
            <p className='text-gray-300 mb-4'>
              Cosmétiques artisanaux africains naturels créés avec amour pour
              révéler votre beauté authentique.
            </p>
            <div className='flex space-x-3'>
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className='text-base font-semibold mb-3'>Liens rapides</h3>
            <ul className='space-y-1'>
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-5'>
              <h3 className='text-base font-semibold mb-2'>Contact</h3>
              <ul className='space-y-2'>
                {CONTACTS.map(({ icon: Icon, value }, i) => (
                  <li key={i} className='flex items-center space-x-2'>
                    <Icon className='h-4 w-4 text-purple-400 flex-shrink-0' />
                    <span className='text-gray-300'>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Infos produits & horaires/livraison */}
          <div>
            <h3 className='text-base font-semibold mb-3'>Nos produits</h3>
            <ul className='flex flex-wrap gap-x-4 gap-y-1 text-gray-300 mb-4'>
              <li>Soins Visage</li>
              <li>Soins Corps</li>
              <li>Soins Capillaires</li>
              <li>Savons</li>
            </ul>
            <div className='mb-3'>
              <h4 className='font-medium text-green-400 mb-1'>Horaires</h4>
              <div className='flex flex-col gap-0.5 text-gray-300'>
                <span>Lun-Sam: 08h-18h</span>
                <span>
                  Dim: <span className='text-red-400'>Fermé</span>
                </span>
              </div>
            </div>
            <div>
              <h4 className='font-medium text-green-400 mb-1'>Livraison</h4>
              <div className='flex flex-col gap-0.5 text-gray-300'>
                <span>Cotonou: 24-48h</span>
                <span>Autres villes: 3-5j</span>
                <span className='text-green-400'>Gratuite dès 15.000 FCFA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Légal & labels */}
        <div className='py-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3'>
          <div className='flex flex-wrap items-center gap-x-5 gap-y-2'>
            {LEGAL_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='hover:text-white text-gray-300 transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className='flex items-center gap-2 text-gray-300'>
            <Leaf className='h-4 w-4 text-green-400' />
            <span>100% naturels</span>
            <Heart className='h-4 w-4 text-purple-400 ml-3' />
            <span>Fait avec amour au Bénin</span>
          </div>
        </div>

        {/* Copyright */}
        <div className='py-3 border-t border-gray-800 text-center text-xs text-gray-400'>
          &copy; 2024 Green Beauty. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
