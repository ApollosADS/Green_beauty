import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Soins Visage',
      description: 'Masques, sérums et crèmes pour un teint éclatant',
      image:
        'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: 8,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Soins Corps',
      description: 'Huiles, beurres et lotions nourrissantes',
      image:
        'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: 12,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      name: 'Soins Capillaires',
      description: 'Shampoings, masques et huiles pour cheveux',
      image:
        'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: 6,
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 4,
      name: 'Savons Artisanaux',
      description: 'Savons naturels pour tous types de peau',
      image:
        'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: 10,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* En-tête */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Explorez nos <span className='text-purple-600'>catégories</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Découvrez notre gamme complète de produits cosmétiques naturels,
            chacun créé avec des ingrédients africains authentiques.
          </p>
        </div>

        {/* Grille de catégories */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map(category => (
            <div
              key={category.id}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer'
            >
              {/* Image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={category.image}
                  alt={category.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Overlay gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                ></div>

                {/* Nombre de produits */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1'>
                  <span className='text-sm font-semibold text-gray-800'>
                    {category.productCount} produits
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors'>
                  {category.name}
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  {category.description}
                </p>

                {/* Bouton */}
                <button className='flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors'>
                  Découvrir
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>

              {/* Effet hover */}
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-colors'></div>
            </div>
          ))}
        </div>

        {/* CTA global */}
        <div className='text-center mt-12'>
          <button className='bg-gradient-to-r from-purple-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center'>
            Voir toute la boutique
            <ArrowRight className='ml-2 h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
