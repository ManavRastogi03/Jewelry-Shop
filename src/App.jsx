import React from 'react';
import Header from './components/Header';
import Payal from './components/Payal';
import Haar from './components/Haar';
import './App.css';
import Chain from './components/Chain';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSnipper';
import MetalPriceAPI from './components/MetalPrices';

function App() {
  return (
    <div className="bg-primary min-h-screen">
    {/* <LoadingSpinner/> */}
      <Header />
    <MetalPriceAPI/>
      <Haar />
      <Payal />
      <Chain/>
      <Footer/>
    </div>
  );
}

export default App;
