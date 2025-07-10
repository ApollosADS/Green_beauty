import React from 'react';
import { Heart, Leaf, Users, Award, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: '100% Naturel',
      description:
        "Tous nos produits sont formulés exclusivement avec des ingrédients naturels d'Afrique, sans additifs chimiques.",
    },
    {
      icon: Heart,
      title: 'Fait avec Amour',
      description:
        'Chaque produit est créé artisanalement avec passion et dévouement pour offrir le meilleur à votre peau.',
    },
    {
      icon: Users,
      title: 'Commerce Équitable',
      description:
        'Nous soutenons les communautés locales en garantissant un commerce équitable et durable.',
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description:
        "Des standards de qualité élevés pour des produits d'exception qui respectent votre peau.",
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Les Débuts',
      description:
        "Création de Green Beauty dans un petit atelier d'Abidjan, avec la passion de valoriser les trésors cosmétiques africains.",
    },
    {
      year: '2019',
      title: 'Premiers Succès',
      description:
        'Lancement de notre première gamme de savons au karité, rapidement adoptée par nos premières clientes fidèles.',
    },
    {
      year: '2020',
      title: 'Expansion',
      description:
        'Développement de nouvelles gammes et partenariats avec des coopératives de femmes productrices.',
    },
    {
      year: '2021',
      title: 'Reconnaissance',
      description:
        "Certification bio et reconnaissance comme marque leader de cosmétiques naturels en Côte d'Ivoire.",
    },
    {
      year: '2022',
      title: 'Innovation',
      description:
        'Développement de nouvelles formules innovantes et naturelles.',
    },
    {
      year: '2024',
      title: "Aujourd'hui",
      description:
        "Plus de 500 clientes satisfaites et une gamme complète de produits naturels d'exception.",
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-purple-50 via-green-50 to-amber-50 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-10 text-green-400 opacity-20'>
            <Leaf className='h-16 w-16 transform rotate-12' />
          </div>
          <div className='absolute bottom-20 right-20 text-purple-400 opacity-20'>
            <Heart className='h-12 w-12 transform -rotate-12' />
          </div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Notre <span className='text-purple-600'>Histoire</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Découvrez l'histoire passionnante de Green Beauty, née d'un rêve
              de valoriser les trésors cosmétiques africains et de révéler la
              beauté naturelle de chaque femme.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <img
                src='https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt='Fondatrice Green Beauty'
                className='w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl'
              />
            </div>

            <div>
              <div className='mb-6'>
                <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800'>
                  <Sparkles className='h-4 w-4 mr-2' />
                  Notre Mission
                </span>
              </div>

              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Révéler la beauté authentique avec les trésors d'Afrique
              </h2>

              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Green Beauty est née de la passion de notre fondatrice pour les
                traditions cosmétiques africaines transmises par sa grand-mère
                herboriste. Chaque produit raconte une histoire, celle de femmes
                qui ont préservé ces secrets de beauté pendant des générations.
              </p>

              <p className='text-gray-600 mb-8 leading-relaxed'>
                Nous croyons que la vraie beauté vient de la nature et que
                chaque femme mérite des produits purs, authentiques et
                respectueux de sa peau. C'est pourquoi nous nous engageons à
                créer des cosmétiques artisanaux d'exception, en valorisant les
                ingrédients africains et en soutenant les communautés locales.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors'>
                  Découvrir nos produits
                </button>
                <button className='border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-colors'>
                  Nos projets éducatifs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Nos <span className='text-purple-600'>Valeurs</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Les principes qui guident chacune de nos actions et qui font de
              Green Beauty une marque authentique et engagée.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-purple-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <value.icon className='h-8 w-8 text-purple-600' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Notre <span className='text-purple-600'>Parcours</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Retracez l'évolution de Green Beauty depuis ses débuts jusqu'à
              aujourd'hui, une histoire de passion et de croissance.
            </p>
          </div>

          <div className='relative'>
            {/* Ligne centrale */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-green-200'></div>

            <div className='space-y-12'>
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div className='bg-white rounded-2xl p-6 shadow-lg'>
                      <div className='text-2xl font-bold text-purple-600 mb-2'>
                        {event.year}
                      </div>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>
                        {event.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className='relative z-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg'></div>

                  <div className='w-1/2'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className='py-16 bg-gradient-to-br from-purple-600 to-green-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='max-w-3xl mx-auto'>
            <Globe className='h-16 w-16 mx-auto mb-6 opacity-80' />
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Notre Engagement pour l'Avenir
            </h2>
            <p className='text-xl opacity-90 mb-8 leading-relaxed'>
              Nous nous engageons à continuer d'innover tout en préservant les
              traditions, à soutenir les communautés locales et à offrir des
              produits toujours plus respectueux de votre peau et de
              l'environnement.
            </p>

            <div className='grid md:grid-cols-3 gap-8 mt-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>500+</div>
                <div className='opacity-80'>Clientes satisfaites</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>15+</div>
                <div className='opacity-80'>Produits naturels</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold mb-2'>100%</div>
                <div className='opacity-80'>Ingrédients naturels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Rejoignez l'aventure Green Beauty
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Découvrez nos produits et faites partie de notre communauté de
            femmes qui ont choisi la beauté naturelle et authentique.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors'>
              Découvrir la boutique
            </button>
            <button className='border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-colors'>
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
