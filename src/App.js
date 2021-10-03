import React, { useState} from 'react';

import Header from './components/Header/Header';
import Hamburger from './components/Hamburger/Hamburger';
import Navbar from './components/Navbar/Navbar';
import CardOverview from './components/CardOverview/CardOverview';
import Technologies from './components/Technologies/Technologies';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import './App.scss';

function App() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Navbar isOpen={isOpen} />
      <About/>
      <Technologies  />
      <CardOverview />
      <Footer/>
    </div>
  );
}

export default App;
