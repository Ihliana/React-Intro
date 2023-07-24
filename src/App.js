import React from 'react'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'



/**
Challenge: move the Footer and MainContent components
into their own files.
*/


function App() {

  return (
    <div>

      <Header />

      <MainContent />  

      <Footer />

    </div>
  );
}

export default App;
