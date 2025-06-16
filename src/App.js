import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/cartContext';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path = '/product/:id' element={<ProductDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
      
    </div>
  );
}

export default App;
