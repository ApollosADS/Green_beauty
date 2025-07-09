import React, { useState } from 'react';
import { Mail, Gift, Leaf, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à la newsletter
    console.log('Inscription newsletter:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-green-800 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-white/10">
          <Leaf className="h-24 w-24 transform rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 text-white/10">
          <Gift className="h-20 w-20 transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-white/5">
          <Mail className="h-32 w-32" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
          <Gift className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Offre exclusive</span>
        </div>

        {/* Titre principal */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Rejoignez la communauté
          <br />
          <span className="text-green-300">Green Beauty</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Recevez en avant-première nos nouveautés, conseils beauté naturelle 
          et bénéficiez de <span className="font-semibold text-green-300">10% de réduction</span> sur votre première commande.
        </p>

        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm">Conseils beauté exclusifs</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
            <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm">Offres privilégiées</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm">Nouveautés en avant-première</span>
          </div>
        </div>

        {/* Formulaire d'inscription */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
            >
              S'inscrire
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Note de confidentialité */}
        <p className="text-xs text-white/70 mt-4">
          Nous respectons votre vie privée. Désinscription possible à tout moment.
        </p>

        {/* Bonus visuel */}
        <div className="mt-10 inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="text-2xl">🎁</div>
          <div className="text-left">
            <div className="text-white font-semibold">Cadeau de bienvenue</div>
            <div className="text-white/80 text-sm">Guide beauté naturelle offert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;