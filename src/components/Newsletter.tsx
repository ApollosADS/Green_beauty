import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à la newsletter
    console.log('Inscription newsletter:', email);
    setEmail('');
  };

  return (
    <section className='py-12 bg-gradient-to-r from-purple-600 to-green-600 relative overflow-hidden'>
      {/* Éléments décoratifs simplifiés */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/2 left-1/4 text-white/5'>
          <Mail className='h-32 w-32' />
        </div>
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Titre principal */}
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Restez informé de nos nouveautés
        </h2>

        {/* Description */}
        <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
          Recevez nos conseils beauté naturelle et{' '}
          <span className='font-semibold text-green-300'>10% de réduction</span>{' '}
          sur votre première commande.
        </p>

        {/* Formulaire d'inscription */}
        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Votre email'
              required
              className='flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400'
            />
            <button
              type='submit'
              className='bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center'
            >
              S'inscrire
              <ArrowRight className='ml-2 h-4 w-4' />
            </button>
          </div>
        </form>

        {/* Note de confidentialité */}
        <p className='text-xs text-white/70 mt-4'>
          Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
