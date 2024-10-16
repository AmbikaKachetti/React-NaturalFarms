import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Products from './components/Products';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Function to increment cart count
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <BrowserRouter basename='/NaturalFarms'>
        {/* Pass cartCount and handleAddToCart to Header */}
        <Header cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/products' element={<Products handleAddToCart={handleAddToCart} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
