import { Award, Users, Leaf, Heart } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-purple-50 to-green-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Image de la fondatrice */}
          <div className='relative'>
            <div className='relative z-10'>
              <img
                src='/fondatrice.jpeg'
                alt='Fondatrice Green Beauty'
                className='w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl'
              />

              {/* Carte de citation flottante */}
              <div className='absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs'>
                <div className='flex items-start space-x-3'>
                  <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Heart className='h-6 w-6 text-purple-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-700 italic mb-2'>
                      "Chaque produit raconte l'histoire de nos ancêtres"
                    </p>
                    <p className='text-xs text-purple-600 font-semibold'>
                      - Nassifath ASSANI - Dr en pharmacie et cosmétique
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className='absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-60'></div>
            <div className='absolute top-1/2 -left-8 w-16 h-16 bg-purple-200 rounded-full opacity-40'></div>
          </div>

          {/* Contenu textuel */}
          <div>
            <div className='mb-6'>
              <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800'>
                <Users className='h-4 w-4 mr-2' />
                Notre Fondatrice
              </span>
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Une passion pour la{' '}
              <span className='text-purple-600'>beauté authentique</span>
            </h2>

            <p className='text-lg text-gray-600 mb-6'>
              Née d'une passion profonde pour les traditions cosmétiques
              africaines, Green Beauty a été créée pour partager les secrets de
              beauté transmis de génération en génération.
            </p>

            <p className='text-gray-600 mb-8'>
              Notre fondatrice, inspirée par sa grand-mère herboriste, a
              consacré des années à étudier les propriétés des plantes
              africaines pour créer des formules uniques qui respectent votre
              peau et l'environnement.
            </p>

            {/* Valeurs clés */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
              <div className='flex items-start space-x-3'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Leaf className='h-5 w-5 text-green-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    100% Naturel
                  </h4>
                  <p className='text-sm text-gray-600'>
                    Ingrédients purs d'Afrique
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Award className='h-5 w-5 text-purple-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Artisanal
                  </h4>
                  <p className='text-sm text-gray-600'>Fait main avec amour</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Heart className='h-5 w-5 text-amber-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>Éthique</h4>
                  <p className='text-sm text-gray-600'>Commerce équitable</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Users className='h-5 w-5 text-green-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    Communauté
                  </h4>
                  <p className='text-sm text-gray-600'>Soutien aux femmes</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors'>
                Découvrir notre histoire
              </button>
              <button className='border-2 border-green-500 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-colors'>
                Nos projets éducatifs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
