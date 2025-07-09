import React from 'react';
import { Truck, Clock, MapPin, Package, CreditCard, Phone } from 'lucide-react';

const Shipping = () => {
  const shippingZones = [
    {
      zone: "Cotonou",
      icon: "🏙️",
      delivery: "24-48h",
      cost: "1.500 FCFA",
      freeFrom: "15.000 FCFA",
      description: "Livraison rapide dans toute la ville de Cotonou et ses environs immédiats."
    },
    {
      zone: "Porto-Novo",
      icon: "🏛️",
      delivery: "2-3 jours",
      cost: "2.500 FCFA",
      freeFrom: "15.000 FCFA",
      description: "Livraison dans la capitale et ses quartiers."
    },
    {
      zone: "Parakou",
      icon: "🌆",
      delivery: "3-4 jours",
      cost: "3.500 FCFA",
      freeFrom: "15.000 FCFA",
      description: "Livraison dans le centre du Bénin."
    },
    {
      zone: "Autres villes",
      icon: "🗺️",
      delivery: "3-5 jours",
      cost: "2.500-4.000 FCFA",
      freeFrom: "15.000 FCFA",
      description: "Livraison dans toutes les autres villes du Bénin selon la distance."
    }
  ];

  const deliverySteps = [
    {
      step: 1,
      title: "Confirmation de commande",
      description: "Vous recevez un SMS de confirmation avec le numéro de suivi",
      icon: Package,
      time: "Immédiat"
    },
    {
      step: 2,
      title: "Préparation",
      description: "Nos équipes préparent soigneusement votre commande",
      icon: Clock,
      time: "2-6h"
    },
    {
      step: 3,
      title: "Expédition",
      description: "Votre colis est confié à notre transporteur partenaire",
      icon: Truck,
      time: "Selon zone"
    },
    {
      step: 4,
      title: "Livraison",
      description: "Réception de votre commande à l'adresse indiquée",
      icon: MapPin,
      time: "Selon zone"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Truck className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Livraison & Retours</h1>
          <p className="text-xl opacity-90">
            Tout ce que vous devez savoir sur nos services de livraison et notre politique de retours
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Zones de livraison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zones de livraison</h2>
            <p className="text-lg text-gray-600">
              Nous livrons dans tout le Bénin avec des délais adaptés à chaque région
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{zone.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{zone.zone}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Délai:</span>
                    <span className="font-semibold text-purple-600">{zone.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Coût:</span>
                    <span className="font-semibold text-gray-900">{zone.cost}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Gratuit dès:</span>
                    <span className="font-semibold text-green-600">{zone.freeFrom}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Processus de livraison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-gray-600">
              Suivez votre commande étape par étape jusqu'à la livraison
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {step.time}
                  </span>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Informations importantes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Conditions de livraison */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="h-6 w-6 text-purple-600 mr-3" />
              Conditions de livraison
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horaires de livraison</h4>
                  <p className="text-gray-600 text-sm">Lundi au samedi, 8h00 à 18h00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Présence obligatoire</h4>
                  <p className="text-gray-600 text-sm">Une personne doit être présente pour réceptionner le colis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Vérification à la livraison</h4>
                  <p className="text-gray-600 text-sm">Vérifiez l'état du colis avant de signer le bon de livraison</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Absence lors de la livraison</h4>
                  <p className="text-gray-600 text-sm">Second passage facturé 1.000 FCFA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Politique de retours */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 text-green-600 mr-3" />
              Retours & Échanges
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Délai de retour</h4>
                  <p className="text-gray-600 text-sm">15 jours à partir de la réception</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">État du produit</h4>
                  <p className="text-gray-600 text-sm">Produit non ouvert, dans son emballage d'origine</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Frais de retour</h4>
                  <p className="text-gray-600 text-sm">À votre charge, sauf défaut du produit</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Remboursement</h4>
                  <p className="text-gray-600 text-sm">Sous 7 jours ouvrés après réception du retour</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moyens de paiement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
            Moyens de paiement acceptés
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 mb-1">MTN Mobile Money</h4>
              <p className="text-sm text-gray-600">Paiement sécurisé instantané</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-semibold text-gray-900 mb-1">Moov Money</h4>
              <p className="text-sm text-gray-600">Paiement mobile simple</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-semibold text-gray-900 mb-1">Paiement à la livraison</h4>
              <p className="text-sm text-gray-600">+500 FCFA de frais</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🏪</div>
              <h4 className="font-semibold text-gray-900 mb-1">En boutique</h4>
              <p className="text-sm text-gray-600">Espèces ou mobile money</p>
            </div>
          </div>
        </div>

        {/* FAQ Livraison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Puis-je modifier mon adresse de livraison ?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Oui, tant que votre commande n'a pas été expédiée. Contactez-nous rapidement au 69 01 24 48.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Que faire si mon colis est endommagé ?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Refusez la livraison et contactez-nous immédiatement. Nous organiserons un remplacement gratuit.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Livrez-vous le dimanche ?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Non, nos livraisons s'effectuent du lundi au samedi uniquement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Comment suivre ma commande ?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Vous recevrez un SMS avec le numéro de suivi. Vous pouvez aussi nous appeler pour un suivi personnalisé.
              </p>
            </div>
          </div>
        </div>

        {/* Contact pour questions */}
        <div className="bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions sur votre livraison ?</h3>
          <p className="text-lg opacity-90 mb-6">
            Notre équipe est disponible pour vous renseigner sur nos services de livraison
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+22969012448"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appelez-nous
            </a>
            <a
              href="https://wa.me/22969012448"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;