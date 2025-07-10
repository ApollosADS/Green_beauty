import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Shipping from './pages/Shipping';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/boutique' element={<Shop />} />
            <Route path='/produit/:id' element={<ProductDetail />} />
            <Route path='/panier' element={<Cart />} />
            <Route path='/a-propos' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/faq' element={<FAQ />} />
            <Route
              path='/politique-confidentialite'
              element={<PrivacyPolicy />}
            />
            <Route path='/conditions-generales' element={<TermsOfService />} />
            <Route path='/livraison-retours' element={<Shipping />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
