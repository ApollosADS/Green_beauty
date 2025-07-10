import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Collecte des informations',
      icon: Eye,
      content: [
        'Nous collectons les informations que vous nous fournissez directement lorsque vous créez un compte, passez une commande, ou nous contactez.',
        'Informations personnelles : nom, prénom, adresse email, numéro de téléphone, adresse de livraison.',
        'Informations de commande : produits achetés, montants, historique des achats.',
        'Données de navigation : adresse IP, type de navigateur, pages visitées (via cookies).',
      ],
    },
    {
      title: 'Utilisation des données',
      icon: Users,
      content: [
        'Traitement et livraison de vos commandes',
        'Communication concernant vos achats et notre service client',
        'Amélioration de nos produits et services',
        'Envoi de newsletters et offres promotionnelles (avec votre consentement)',
        'Respect de nos obligations légales et comptables',
      ],
    },
    {
      title: 'Protection des données',
      icon: Lock,
      content: [
        'Nous utilisons des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données.',
        'Chiffrement SSL pour toutes les transactions',
        'Accès limité aux données personnelles aux seuls employés autorisés',
        'Sauvegarde régulière et sécurisée de nos bases de données',
        'Mise à jour régulière de nos systèmes de sécurité',
      ],
    },
    {
      title: 'Partage des données',
      icon: Shield,
      content: [
        'Nous ne vendons jamais vos données personnelles à des tiers.',
        "Partage limité avec nos partenaires de livraison pour l'expédition de vos commandes",
        'Prestataires de paiement sécurisés (MTN MoMo, Moov Money) pour le traitement des transactions',
        'Autorités compétentes uniquement si requis par la loi',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-600 to-green-600 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <Shield className='h-16 w-16 mx-auto mb-6 opacity-80' />
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Politique de Confidentialité
          </h1>
          <p className='text-xl opacity-90'>
            Votre vie privée est importante pour nous. Découvrez comment nous
            protégeons et utilisons vos données personnelles.
          </p>
        </div>
      </section>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Introduction */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Introduction
          </h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            Green Beauty s'engage à protéger la confidentialité et la sécurité
            de vos informations personnelles. Cette politique de confidentialité
            explique comment nous collectons, utilisons, stockons et protégeons
            vos données lorsque vous utilisez notre site web et nos services.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            En utilisant notre site, vous acceptez les pratiques décrites dans
            cette politique. Cette politique est effective à partir du 1er
            janvier 2024.
          </p>
        </div>

        {/* Sections principales */}
        <div className='space-y-8'>
          {sections.map((section, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-lg overflow-hidden'
            >
              <div className='bg-gradient-to-r from-purple-50 to-green-50 p-6 border-b'>
                <h2 className='text-2xl font-bold text-gray-900 flex items-center'>
                  <section.icon className='h-6 w-6 text-purple-600 mr-3' />
                  {section.title}
                </h2>
              </div>
              <div className='p-6'>
                <ul className='space-y-3'>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-start space-x-3'>
                      <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='text-gray-600 leading-relaxed'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vos droits */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mt-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Vos droits</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Droit d'accès
              </h3>
              <p className='text-gray-600 text-sm'>
                Vous pouvez demander une copie des données personnelles que nous
                détenons sur vous.
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Droit de rectification
              </h3>
              <p className='text-gray-600 text-sm'>
                Vous pouvez demander la correction de données inexactes ou
                incomplètes.
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Droit à l'effacement
              </h3>
              <p className='text-gray-600 text-sm'>
                Vous pouvez demander la suppression de vos données dans
                certaines circonstances.
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Droit d'opposition
              </h3>
              <p className='text-gray-600 text-sm'>
                Vous pouvez vous opposer au traitement de vos données à des fins
                marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mt-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Utilisation des cookies
          </h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            Notre site utilise des cookies pour améliorer votre expérience de
            navigation. Les cookies sont de petits fichiers stockés sur votre
            appareil qui nous aident à :
          </p>
          <ul className='space-y-2 mb-6'>
            <li className='flex items-start space-x-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
              <span className='text-gray-600'>
                Mémoriser vos préférences et votre panier
              </span>
            </li>
            <li className='flex items-start space-x-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
              <span className='text-gray-600'>
                Analyser le trafic et l'utilisation du site
              </span>
            </li>
            <li className='flex items-start space-x-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
              <span className='text-gray-600'>
                Personnaliser le contenu et les publicités
              </span>
            </li>
          </ul>
          <p className='text-gray-600 text-sm'>
            Vous pouvez gérer vos préférences de cookies dans les paramètres de
            votre navigateur.
          </p>
        </div>

        {/* Conservation des données */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mt-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Conservation des données
          </h2>
          <div className='space-y-4'>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='font-medium text-gray-900'>
                Données de compte
              </span>
              <span className='text-purple-600 font-semibold'>
                Jusqu'à suppression du compte
              </span>
            </div>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='font-medium text-gray-900'>
                Historique des commandes
              </span>
              <span className='text-purple-600 font-semibold'>
                10 ans (obligations comptables)
              </span>
            </div>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='font-medium text-gray-900'>
                Données de navigation
              </span>
              <span className='text-purple-600 font-semibold'>
                13 mois maximum
              </span>
            </div>
            <div className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'>
              <span className='font-medium text-gray-900'>Newsletter</span>
              <span className='text-purple-600 font-semibold'>
                Jusqu'à désinscription
              </span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className='bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-8 text-white mt-8'>
          <h2 className='text-2xl font-bold mb-4'>
            Questions sur vos données ?
          </h2>
          <p className='text-lg opacity-90 mb-6'>
            Pour toute question concernant cette politique de confidentialité ou
            vos données personnelles, n'hésitez pas à nous contacter.
          </p>
          <div className='grid md:grid-cols-2 gap-4'>
            <a
              href='mailto:contact@greenbeauty.com'
              className='flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
            >
              <Mail className='h-5 w-5' />
              <span>contact@greenbeauty.com</span>
            </a>
            <a
              href='tel:+22969012448'
              className='flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
            >
              <Phone className='h-5 w-5' />
              <span>+229 69 01 24 48</span>
            </a>
          </div>
        </div>

        {/* Mise à jour */}
        <div className='bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8'>
          <h3 className='font-semibold text-amber-800 mb-2'>
            Mise à jour de cette politique
          </h3>
          <p className='text-amber-700 text-sm'>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications seront publiées sur
            cette page avec la date de mise à jour. Nous vous encourageons à
            consulter régulièrement cette page.
          </p>
          <p className='text-amber-700 text-sm mt-2 font-medium'>
            Dernière mise à jour : 1er janvier 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
