import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aminata Diallo",
      location: "Dakar, Sénégal",
      rating: 5,
      comment: "Les produits Green Beauty ont transformé ma routine beauté. Ma peau n'a jamais été aussi douce et éclatante !",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200",
      product: "Savon au Karité"
    },
    {
      id: 2,
      name: "Fatou Kone",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      comment: "L'huile de baobab est magique ! Mes cheveux sont plus forts et brillants. Je recommande vivement.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=200",
      product: "Huile de Baobab"
    },
    {
      id: 3,
      name: "Mariam Traore",
      location: "Bamako, Mali",
      rating: 5,
      comment: "Enfin des produits qui respectent ma peau ! L'argile verte purifie en douceur sans agresser.",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=200",
      product: "Masque Argile Verte"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos <span className="text-purple-600">clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages authentiques de femmes qui ont adopté 
            nos produits dans leur routine beauté quotidienne.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Icône de citation */}
              <div className="absolute top-4 right-4 text-purple-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Étoiles */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Commentaire */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Produit mentionné */}
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.product}
                </span>
              </div>

              {/* Profil de la cliente */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-green-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Clientes fidèles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Produits naturels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;