import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield, Leaf, Plus, Minus, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('100ml');

  const product = {
    id: 1,
    name: "Savon au Beurre de Karité",
    price: 15000,
    originalPrice: 18000,
    rating: 4.9,
    reviews: 127,
    badge: 'Bestseller',
    images: [
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    sizes: [
      { size: '50ml', price: 12000 },
      { size: '100ml', price: 15000 },
      { size: '200ml', price: 25000 }
    ],
    description: "Notre savon artisanal au beurre de karité est un véritable trésor de la cosmétique africaine traditionnelle. Fabriqué à la main avec amour, ce savon combine les bienfaits nourrissants du beurre de karité pur avec des huiles essentielles naturelles pour offrir à votre peau un soin exceptionnel.",
    benefits: [
      "Hydrate en profondeur",
      "Apaise les irritations",
      "Convient à tous types de peaux",
      "100% naturel et bio",
      "Fabriqué artisanalement"
    ],
    ingredients: [
      "Beurre de karité pur (40%)",
      "Huile de coco vierge",
      "Huile d'olive extra vierge",
      "Soude caustique",
      "Huile essentielle de lavande",
      "Argile blanche"
    ],
    usage: "Faire mousser entre les mains humides et appliquer sur peau mouillée. Masser délicatement puis rincer à l'eau tiède. Utilisation quotidienne recommandée.",
    conservation: "Conserver dans un endroit sec, à l'abri de la lumière directe. Durée de conservation : 12 mois.",
    origin: "Fabriqué artisanalement en Côte d'Ivoire avec des ingrédients locaux de première qualité."
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Huile de Baobab Pure",
      price: 25000,
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8
    },
    {
      id: 3,
      name: "Masque à l'Argile Verte",
      price: 12000,
      image: "https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7
    },
    {
      id: 4,
      name: "Beurre de Cacao Brut",
      price: 18000,
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-purple-600">Accueil</a>
          <span>/</span>
          <a href="/boutique" className="hover:text-purple-600">Boutique</a>
          <span>/</span>
          <a href="/boutique/savons" className="hover:text-purple-600">Savons</a>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images du produit */}
          <div>
            {/* Image principale */}
            <div className="relative mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                    {product.badge}
                  </span>
                </div>
              )}
              <button className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
              </button>
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Share2 className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Miniatures */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations du produit */}
          <div>
            {/* En-tête */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-purple-600">
                  {product.price.toLocaleString()} FCFA
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} FCFA
                  </span>
                )}
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  -17%
                </span>
              </div>
            </div>

            {/* Description courte */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Tailles */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Taille</h3>
              <div className="flex space-x-3">
                {product.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedSize === sizeOption.size
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{sizeOption.size}</div>
                      <div className="text-sm text-gray-600">{sizeOption.price.toLocaleString()} FCFA</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantité */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quantité</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">En stock (24 disponibles)</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                Acheter maintenant
              </button>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Truck className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-semibold text-green-800">Livraison gratuite</div>
                  <div className="text-sm text-green-600">Dès 30.000 FCFA</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <Shield className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-purple-800">Garantie qualité</div>
                  <div className="text-sm text-purple-600">30 jours</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg">
                <Leaf className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="font-semibold text-amber-800">100% naturel</div>
                  <div className="text-sm text-amber-600">Certifié bio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets d'informations détaillées */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 border-b-2 border-purple-500 text-purple-600 font-semibold">
                  Description
                </button>
                <button className="py-4 text-gray-500 hover:text-gray-700">
                  Ingrédients
                </button>
                <button className="py-4 text-gray-500 hover:text-gray-700">
                  Utilisation
                </button>
                <button className="py-4 text-gray-500 hover:text-gray-700">
                  Avis ({product.reviews})
                </button>
              </nav>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Bienfaits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Origine</h3>
                  <p className="text-gray-700 mb-4">{product.origin}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Conservation</h4>
                  <p className="text-gray-700">{product.conservation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{relatedProduct.rating}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">
                      {relatedProduct.price.toLocaleString()} FCFA
                    </span>
                    <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;