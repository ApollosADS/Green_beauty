import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'Commandes & Livraison',
      icon: '🚚',
      questions: [
        {
          question: 'Quels sont les délais de livraison ?',
          answer:
            'Pour Cotonou : 24-48h. Pour les autres villes du Bénin : 3-5 jours ouvrés. Nous livrons du lundi au samedi.',
        },
        {
          question: 'À partir de quel montant la livraison est-elle gratuite ?',
          answer:
            "La livraison est gratuite dès 15.000 FCFA d'achat. En dessous, les frais de livraison sont de 1.500 FCFA pour Cotonou et 2.500 FCFA pour les autres villes.",
        },
        {
          question: 'Comment suivre ma commande ?',
          answer:
            "Après validation de votre commande, vous recevrez un SMS avec le numéro de suivi. Vous pouvez aussi nous appeler au 69 01 24 48 pour connaître l'état de votre livraison.",
        },
        {
          question: 'Livrez-vous en dehors du Bénin ?',
          answer:
            "Actuellement, nous livrons uniquement au Bénin. Nous étudions la possibilité d'étendre nos livraisons aux pays voisins prochainement.",
        },
      ],
    },
    {
      title: 'Paiement',
      icon: '💳',
      questions: [
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer:
            'Nous acceptons MTN Mobile Money, Moov Money, le paiement à la livraison et les espèces directement en boutique.',
        },
        {
          question: 'Le paiement mobile est-il sécurisé ?',
          answer:
            'Oui, nous utilisons des plateformes de paiement certifiées et sécurisées. Vos données bancaires ne sont jamais stockées sur notre site.',
        },
        {
          question: 'Puis-je payer à la livraison ?',
          answer:
            "Oui, le paiement à la livraison est disponible pour toutes les commandes. Des frais supplémentaires de 500 FCFA s'appliquent pour ce service.",
        },
      ],
    },
    {
      title: 'Produits',
      icon: '🌿',
      questions: [
        {
          question: 'Vos produits sont-ils vraiment 100% naturels ?',
          answer:
            "Oui, tous nos produits sont formulés exclusivement avec des ingrédients naturels d'origine africaine. Nous n'utilisons aucun produit chimique, parabène ou sulfate.",
        },
        {
          question: 'Combien de temps se conservent vos produits ?',
          answer:
            "Nos produits se conservent 12 mois à partir de la date de fabrication, dans un endroit sec et à l'abri de la lumière. La date de fabrication est indiquée sur chaque produit.",
        },
        {
          question: 'Vos produits conviennent-ils aux peaux sensibles ?',
          answer:
            'Oui, nos formulations douces conviennent généralement aux peaux sensibles. Cependant, nous recommandons de faire un test sur une petite zone avant la première utilisation.',
        },
        {
          question: "D'où viennent vos ingrédients ?",
          answer:
            "Nos ingrédients proviennent directement de coopératives de femmes au Bénin, Burkina Faso et Côte d'Ivoire. Nous privilégions le commerce équitable et la qualité premium.",
        },
      ],
    },
    {
      title: 'Retours & Échanges',
      icon: '🔄',
      questions: [
        {
          question: 'Puis-je retourner un produit ?',
          answer:
            "Oui, vous avez 15 jours pour retourner un produit non ouvert et dans son emballage d'origine. Les frais de retour sont à votre charge sauf en cas de défaut.",
        },
        {
          question: 'Comment procéder à un échange ?',
          answer:
            "Contactez-nous au 69 01 24 48 ou par WhatsApp. Nous organiserons la récupération du produit et l'envoi du nouveau selon vos préférences.",
        },
        {
          question: 'Puis-je être remboursé(e) ?',
          answer:
            "Oui, si le produit ne vous convient pas et qu'il est retourné dans les conditions requises, nous procédons au remboursement sous 7 jours ouvrés.",
        },
      ],
    },
    {
      title: 'Compte Client',
      icon: '👤',
      questions: [
        {
          question: 'Dois-je créer un compte pour commander ?',
          answer:
            "Non, vous pouvez commander en tant qu'invité. Cependant, créer un compte vous permet de suivre vos commandes et de bénéficier d'offres exclusives.",
        },
        {
          question: 'Comment modifier mes informations personnelles ?',
          answer:
            "Connectez-vous à votre compte et accédez à la section 'Mon profil' pour modifier vos informations personnelles et adresses de livraison.",
        },
        {
          question: "J'ai oublié mon mot de passe, que faire ?",
          answer:
            "Cliquez sur 'Mot de passe oublié' sur la page de connexion. Vous recevrez un lien par email pour réinitialiser votre mot de passe.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => category.questions.length > 0);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-purple-600 to-green-600 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Questions Fréquentes
          </h1>
          <p className='text-xl opacity-90 mb-8'>
            Trouvez rapidement les réponses à vos questions sur nos produits,
            livraisons et services.
          </p>

          {/* Barre de recherche */}
          <div className='max-w-md mx-auto relative'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='text'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder='Rechercher une question...'
              className='w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20'
            />
          </div>
        </div>
      </section>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Contact rapide */}
        <div className='bg-white rounded-2xl shadow-lg p-6 mb-12'>
          <div className='text-center mb-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-2'>
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className='text-gray-600'>Notre équipe est là pour vous aider</p>
          </div>

          <div className='grid md:grid-cols-3 gap-4'>
            <a
              href='tel:+22969012448'
              className='flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors'
            >
              <Phone className='h-5 w-5 text-purple-600' />
              <span className='font-semibold text-purple-800'>
                Appelez-nous
              </span>
            </a>

            <a
              href='https://wa.me/22969012448'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'
            >
              <MessageCircle className='h-5 w-5 text-green-600' />
              <span className='font-semibold text-green-800'>WhatsApp</span>
            </a>

            <a
              href='/contact'
              className='flex items-center justify-center space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors'
            >
              <Mail className='h-5 w-5 text-amber-600' />
              <span className='font-semibold text-amber-800'>Email</span>
            </a>
          </div>
        </div>

        {/* FAQ par catégories */}
        <div className='space-y-8'>
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-white rounded-2xl shadow-lg overflow-hidden'
            >
              <div className='bg-gradient-to-r from-purple-50 to-green-50 p-6 border-b'>
                <h2 className='text-2xl font-bold text-gray-900 flex items-center'>
                  <span className='text-2xl mr-3'>{category.icon}</span>
                  {category.title}
                </h2>
              </div>

              <div className='divide-y divide-gray-200'>
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <div key={index} className='p-6'>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className='w-full text-left flex justify-between items-start group'
                      >
                        <h3 className='text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors pr-4'>
                          {faq.question}
                        </h3>
                        <div className='flex-shrink-0'>
                          {isOpen ? (
                            <ChevronUp className='h-5 w-5 text-purple-600' />
                          ) : (
                            <ChevronDown className='h-5 w-5 text-gray-400 group-hover:text-purple-600' />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className='mt-4 pr-8'>
                          <p className='text-gray-600 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {searchTerm && filteredCategories.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <Search className='h-16 w-16 mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              Aucun résultat trouvé
            </h3>
            <p className='text-gray-600 mb-6'>
              Essayez avec d'autres mots-clés ou contactez-nous directement.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className='bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors'
            >
              Voir toutes les questions
            </button>
          </div>
        )}

        {/* CTA final */}
        <div className='mt-16 bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-4'>
            Besoin d'aide personnalisée ?
          </h2>
          <p className='text-lg opacity-90 mb-6'>
            Notre équipe d'experts en cosmétiques naturels est à votre
            disposition pour vous conseiller et vous accompagner.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'
            >
              Nous contacter
            </a>
            <a
              href='/boutique'
              className='border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors'
            >
              Découvrir nos produits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
