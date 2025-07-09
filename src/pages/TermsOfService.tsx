import React from 'react';
import { FileText, Scale, CreditCard, Truck, RotateCcw, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: "Objet et champ d'application",
      icon: FileText,
      content: [
        "Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Green Beauty et ses clients.",
        "Elles s'appliquent à toute commande passée sur notre site web ou en boutique physique.",
        "En passant commande, le client reconnaît avoir pris connaissance des présentes CGV et les accepte sans réserve.",
        "Green Beauty se réserve le droit de modifier ces CGV à tout moment, les conditions applicables étant celles en vigueur à la date de la commande."
      ]
    },
    {
      title: "Produits et prix",
      icon: CreditCard,
      content: [
        "Tous nos produits sont des cosmétiques artisanaux naturels fabriqués au Bénin.",
        "Les prix sont indiqués en Francs CFA (FCFA) toutes taxes comprises.",
        "Les prix peuvent être modifiés à tout moment, mais les commandes validées restent aux prix acceptés lors de la validation.",
        "Les photos et descriptions de produits sont données à titre indicatif et n'ont pas de valeur contractuelle.",
        "Green Beauty s'efforce de présenter les couleurs et aspects des produits de la façon la plus fidèle possible."
      ]
    },
    {
      title: "Commandes et paiement",
      icon: Scale,
      content: [
        "Toute commande implique l'acceptation des prix et descriptions des produits disponibles à la vente.",
        "La validation de votre commande implique l'acceptation des présentes conditions générales de vente.",
        "Nous acceptons les paiements par MTN Mobile Money, Moov Money, et paiement à la livraison.",
        "Le paiement à la livraison entraîne des frais supplémentaires de 500 FCFA.",
        "En cas de refus d'autorisation de paiement, la commande sera automatiquement annulée."
      ]
    },
    {
      title: "Livraison",
      icon: Truck,
      content: [
        "Les livraisons sont effectuées uniquement au Bénin.",
        "Délais : 24-48h pour Cotonou, 3-5 jours ouvrés pour les autres villes.",
        "Livraison gratuite dès 15.000 FCFA d'achat, sinon 1.500 FCFA (Cotonou) ou 2.500 FCFA (autres villes).",
        "Le client doit vérifier l'état des produits à la livraison et signaler tout dommage immédiatement.",
        "En cas d'absence lors de la livraison, un second passage sera facturé 1.000 FCFA."
      ]
    },
    {
      title: "Droit de rétractation",
      icon: RotateCcw,
      content: [
        "Conformément à la réglementation, vous disposez d'un délai de 15 jours pour retourner vos produits.",
        "Les produits doivent être retournés dans leur emballage d'origine, non ouverts et non utilisés.",
        "Les frais de retour sont à la charge du client, sauf en cas de défaut du produit.",
        "Le remboursement sera effectué dans un délai de 7 jours ouvrés après réception du retour.",
        "Certains produits personnalisés ou périssables ne peuvent pas être retournés."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales de Vente</h1>
          <p className="text-xl opacity-90">
            Conditions régissant l'utilisation de notre site et l'achat de nos produits
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations légales</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Green Beauty</h3>
              <p>Entreprise individuelle</p>
              <p>3561 Cotonou, Fidjrossé, Houta</p>
              <p>Bénin</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p>Téléphone : +229 69 01 24 48</p>
              <p>Email : contact@greenbeauty.com</p>
              <p>Site web : www.greenbeauty.com</p>
            </div>
          </div>
        </div>

        {/* Sections principales */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-green-50 p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <section.icon className="h-6 w-6 text-purple-600 mr-3" />
                  {section.title}
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Garanties et responsabilités */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
            Garanties et responsabilités
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Garantie qualité</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Green Beauty garantit que tous ses produits sont conformes aux descriptions 
                et fabriqués selon les standards de qualité les plus élevés. En cas de défaut 
                de fabrication, le produit sera échangé ou remboursé.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Limitation de responsabilité</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Green Beauty ne saurait être tenue responsable des dommages indirects ou 
                consécutifs résultant de l'utilisation de ses produits. Il est recommandé 
                de faire un test de tolérance avant la première utilisation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Force majeure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Green Beauty ne pourra être tenue responsable de l'inexécution de ses 
                obligations en cas de force majeure ou de circonstances indépendantes 
                de sa volonté.
              </p>
            </div>
          </div>
        </div>

        {/* Protection des données */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des données personnelles</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les informations recueillies lors de votre commande sont nécessaires au traitement 
            de celle-ci. Elles sont destinées à Green Beauty et ne seront en aucun cas cédées 
            à des tiers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Conformément à la loi, vous disposez d'un droit d'accès, de rectification et 
            de suppression des données vous concernant. Pour exercer ce droit, contactez-nous 
            à contact@greenbeauty.com.
          </p>
          <div className="mt-4">
            <a 
              href="/politique-confidentialite" 
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Consulter notre politique de confidentialité →
            </a>
          </div>
        </div>

        {/* Propriété intellectuelle */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tous les éléments du site Green Beauty (textes, images, logos, vidéos) sont 
            protégés par le droit d'auteur et appartiennent à Green Beauty ou à ses partenaires.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Toute reproduction, représentation, modification, publication ou transmission 
            de ces éléments est strictement interdite sans autorisation écrite préalable.
          </p>
        </div>

        {/* Droit applicable */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable et litiges</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les présentes conditions générales sont soumises au droit béninois. 
            En cas de litige, les parties s'efforceront de trouver une solution amiable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            À défaut d'accord amiable, tout litige sera porté devant les tribunaux 
            compétents de Cotonou, Bénin.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-8 text-white mt-8">
          <h2 className="text-2xl font-bold mb-4">Questions sur nos conditions ?</h2>
          <p className="text-lg opacity-90 mb-6">
            Notre équipe est disponible pour répondre à toutes vos questions concernant 
            nos conditions générales de vente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Nous contacter
            </a>
            <a
              href="/faq"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Consulter la FAQ
            </a>
          </div>
        </div>

        {/* Date de mise à jour */}
        <div className="bg-gray-100 rounded-2xl p-6 mt-8 text-center">
          <p className="text-gray-600 text-sm">
            <strong>Dernière mise à jour :</strong> 1er janvier 2024
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Green Beauty se réserve le droit de modifier ces conditions à tout moment. 
            Les modifications prendront effet dès leur publication sur le site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;