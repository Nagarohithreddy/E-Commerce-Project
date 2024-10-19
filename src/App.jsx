import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
