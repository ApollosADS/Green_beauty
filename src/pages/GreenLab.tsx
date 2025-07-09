import React from 'react';
import { Microscope, Leaf, Users, BookOpen, Award, Lightbulb, Heart, Globe } from 'lucide-react';

const GreenLab = () => {
  const programs = [
    {
      id: 1,
      title: "Kimi & Kémi",
      subtitle: "Programme éducatif pour enfants",
      description: "Sensibilisation des enfants aux bienfaits des plantes africaines et à l'importance de préserver notre patrimoine naturel.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      features: [
        "Ateliers ludiques sur les plantes",
        "Création de jardins scolaires",
        "Livrets éducatifs illustrés",
        "Formations pour enseignants"
      ]
    },
    {
      id: 2,
      title: "Formation Femmes",
      subtitle: "Autonomisation économique",
      description: "Formation des femmes aux techniques de production de cosmétiques naturels pour créer leur propre activité génératrice de revenus.",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "Techniques de fabrication artisanale",
        "Gestion d'entreprise",
        "Marketing et vente",
        "Accompagnement post-formation"
      ]
    },
    {
      id: 3,
      title: "Recherche & Innovation",
      subtitle: "Laboratoire de développement",
      description: "Recherche continue sur les propriétés des plantes africaines pour développer de nouvelles formules cosmétiques innovantes.",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Microscope,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Analyse des propriétés végétales",
        "Développement de nouvelles formules",
        "Tests de qualité et efficacité",
        "Partenariats universitaires"
      ]
    }
  ];

  const achievements = [
    { number: "150+", label: "Femmes formées", icon: Users },
    { number: "25", label: "Écoles partenaires", icon: BookOpen },
    { number: "12", label: "Nouvelles formules", icon: Lightbulb },
    { number: "5", label: "Partenariats recherche", icon: Award }
  ];

  const testimonials = [
    {
      name: "Adjoa Mensah",
      role: "Formatrice bénéficiaire",
      quote: "Grâce au GreenLab, j'ai pu créer ma propre entreprise de cosmétiques. Aujourd'hui, je forme d'autres femmes dans ma communauté.",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Directrice École Primaire",
      role: "Partenaire éducatif",
      quote: "Le programme Kimi & Kémi a transformé la façon dont nos élèves perçoivent la nature. Ils sont maintenant de vrais ambassadeurs de l'environnement.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 text-green-400 opacity-20">
            <Microscope className="h-16 w-16 transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 text-purple-400 opacity-20">
            <Leaf className="h-12 w-12 transform -rotate-12" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Lightbulb className="h-4 w-4 mr-2" />
              Innovation & Éducation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Green</span>Lab
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Notre laboratoire d'innovation et centre éducatif dédié à la recherche, 
            la formation et la sensibilisation autour des cosmétiques naturels africains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Découvrir nos programmes
            </button>
            <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-colors">
              Nous rejoindre
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre <span className="text-green-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Le GreenLab est né de notre conviction que l'éducation et l'innovation 
                sont les clés pour préserver et valoriser le patrimoine cosmétique africain. 
                Nous œuvrons pour transmettre ces savoirs ancestraux aux nouvelles générations 
                tout en développant des solutions modernes et durables.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                À travers nos programmes éducatifs, nos formations professionnelles et 
                notre laboratoire de recherche, nous créons un écosystème complet qui 
                bénéficie aux communautés locales et contribue au développement durable.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Passion</div>
                  <div className="text-sm text-gray-600">Pour les traditions</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Impact</div>
                  <div className="text-sm text-gray-600">Communautaire</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GreenLab laboratoire"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Laboratoire</div>
                    <div className="text-sm text-gray-600">Recherche & Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Programmes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos initiatives dédiées à l'éducation, la formation et l'innovation 
              dans le domaine des cosmétiques naturels africains.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${program.color} text-white`}>
                      <program.icon className="h-4 w-4 mr-2" />
                      {program.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`bg-gradient-to-r ${program.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`}>
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-green-600">Réalisations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez l'impact concret de nos actions sur les communautés et l'innovation 
              dans le domaine des cosmétiques naturels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages <span className="text-green-600">d'Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos programmes transforment des vies et créent un impact positif 
              dans les communautés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez le mouvement GreenLab
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Que vous soyez éducateur, entrepreneur, chercheur ou simplement passionné 
            par les cosmétiques naturels, il y a une place pour vous dans notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Devenir partenaire
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenLab;