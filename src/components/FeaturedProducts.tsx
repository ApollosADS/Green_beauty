import React from 'react';
import { Star, Heart, ShoppingCart, Leaf } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Savon au Beurre de Karité",
      price: "15.000",
      originalPrice: "18.000",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
      description: "Nourrissant et hydratant pour tous types de peaux"
    },
    {
      id: 2,
      name: "Huile de Baobab Pure",
      price: "25.000",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 89,
      badge: "Nouveau",
      description: "Anti-âge naturel, riche en vitamines A, D, E et F"
    },
    {
      id: 3,
      name: "Masque à l'Argile Verte",
      price: "12.000",
      image: "https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      badge: "Bio",
      description: "Purifiant et détoxifiant pour peaux mixtes à grasses"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-purple-100 text-purple-800';
      case 'Nouveau':
        return 'bg-green-100 text-green-800';
      case 'Bio':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Nos Produits Phares</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez nos <span className="text-purple-600">bestsellers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection de nos produits les plus appréciés, créés avec des ingrédients 
            africains authentiques pour sublimer votre beauté naturelle.
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image du produit */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Bouton favori */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors group/heart">
                  <Heart className="h-5 w-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
                </button>

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Évaluation */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>

                {/* Nom du produit */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Prix */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price} FCFA
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice} FCFA
                      </span>
                    )}
                  </div>
                  
                  <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir tous les produits */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
            Voir tous nos produits
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;