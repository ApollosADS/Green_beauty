import { ArrowRight, Leaf, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-amber-50 overflow-hidden'>
      {/* Éléments décoratifs */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 text-green-400 opacity-20'>
          <Leaf className='h-16 w-16 transform rotate-12' />
        </div>
        <div className='absolute top-40 right-20 text-purple-400 opacity-20'>
          <Heart className='h-12 w-12 transform -rotate-12' />
        </div>
        <div className='absolute bottom-40 left-20 text-amber-400 opacity-20'>
          <Star className='h-14 w-14 transform rotate-45' />
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Contenu textuel */}
          <div className='text-center lg:text-left'>
            <div className='mb-6'>
              <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4'>
                <Leaf className='h-4 w-4 mr-2' />
                100% Naturel & Artisanal
              </span>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              <span className='text-purple-600'>Green Beauty</span>
              <br />
              <span className='text-2xl md:text-4xl font-light text-gray-700'>
                L'essence de l'Afrique
              </span>
            </h1>

            <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl'>
              Découvrez nos cosmétiques artisanaux africains, créés avec amour à
              partir d'ingrédients naturels pour révéler la beauté authentique
              de votre peau.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Link
                to='/boutique'
                className='bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group'
              >
                Découvrir la boutique
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                to='/a-propos'
                className='border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'
              >
                Notre histoire
              </Link>
            </div>

            {/* Statistiques */}
            <div className='grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-purple-600'>100%</div>
                <div className='text-sm text-gray-600'>Naturel</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-green-600'>500+</div>
                <div className='text-sm text-gray-600'>
                  Clientes satisfaites
                </div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-amber-600'>15+</div>
                <div className='text-sm text-gray-600'>Produits uniques</div>
              </div>
            </div>
          </div>

          {/* Image principale */}
          <div className='relative'>
            <div className='relative z-10'>
              <img
                src='/femme_africaine.png'
                alt='Femme africaine avec produits naturels'
                className='w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl'
              />

              {/* Badge flottant */}
              <div className='absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-sm font-medium text-gray-800'>
                    Produits frais
                  </span>
                </div>
              </div>

              {/* Carte produit flottante */}
              <div className='absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs'>
                <div className='flex items-center space-x-3'>
                  <img
                    src='https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200'
                    alt='Savon artisanal'
                    className='w-12 h-12 object-cover rounded-lg'
                  />
                  <div>
                    <h4 className='font-semibold text-gray-800 text-sm'>
                      Savon au Karité
                    </h4>
                    <p className='text-purple-600 font-bold text-sm'>
                      15.000 FCFA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs autour de l'image */}
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse'></div>
            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-40 animate-pulse delay-1000'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
