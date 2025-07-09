import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Logique d'envoi du formulaire
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions sur nos produits 
            et vous accompagner dans votre routine beauté naturelle.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      3561 Cotonou, Fidjrossé<br />
                      Houta, Bénin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+229 69 01 24 48</p>
                    <p className="text-sm text-gray-500 mt-1">Appels et WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@greenbeauty.com</p>
                    <p className="text-gray-600">commandes@greenbeauty.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires d'ouverture</h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="flex justify-between">
                        <span>Lun - Jeu:</span>
                        <span>08h00 - 18h00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Vendredi:</span>
                        <span>08h00 - 18h00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Samedi:</span>
                        <span>09h00 - 16h00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Dimanche:</span>
                        <span className="text-red-500">Fermé</span>
                      </p>
                    </div>
                    <div className="mt-2 p-2 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-700">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Ferme bientôt à 18h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/22969012448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Nous écrire sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="commande">Question sur une commande</option>
                      <option value="produit">Information produit</option>
                      <option value="livraison">Livraison</option>
                      <option value="retour">Retour/Échange</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 rounded text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte que mes données personnelles soient utilisées pour traiter ma demande. 
                    Consultez notre <a href="#" className="text-purple-600 hover:underline">politique de confidentialité</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Carte et informations pratiques */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Carte */}
              <div className="h-64 lg:h-auto bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Carte interactive</p>
                  <p className="text-sm">3561 Cotonou, Fidjrossé, Houta</p>
                  <a 
                    href="https://maps.google.com/?q=3561+Cotonou+Fidjrossé+Houta+Bénin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-purple-600 hover:underline"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Comment nous trouver</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🚗 En voiture</h4>
                    <p className="text-gray-600 text-sm">
                      Parking disponible devant notre boutique. 
                      Accès facile depuis la route principale de Fidjrossé.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🏍️ En moto-taxi</h4>
                    <p className="text-gray-600 text-sm">
                      Demandez "Green Beauty, Houta Fidjrossé" ou appelez-nous 
                      au 69 01 24 48 pour vous guider.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🚌 En transport en commun</h4>
                    <p className="text-gray-600 text-sm">
                      Arrêt Fidjrossé, puis 5 minutes à pied vers Houta.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Conseil</h4>
                    <p className="text-green-700 text-sm">
                      Appelez-nous avant votre visite pour vous assurer de notre disponibilité 
                      et bénéficier de conseils personnalisés !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions Fréquentes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Délais de livraison</h3>
                <p className="text-sm text-gray-600">
                  Cotonou: 24-48h<br />
                  Autres villes: 3-5 jours ouvrés<br />
                  Livraison gratuite dès 15.000 FCFA
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Retours & Échanges</h3>
                <p className="text-sm text-gray-600">
                  Retours gratuits sous 15 jours<br />
                  Produits non ouverts uniquement<br />
                  Remboursement ou échange
                </p>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Paiement</h3>
                <p className="text-sm text-gray-600">
                  MTN Mobile Money<br />
                  Moov Money<br />
                  Paiement à la livraison<br />
                  Espèces en boutique
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <a href="/faq" className="text-purple-600 hover:text-purple-700 font-semibold">
                Voir toutes les FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;