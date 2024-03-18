import './App.css';
import "./components/About-me/index"
import React from 'react';
import AboutMe from './components/About-me/index';
import Hero from './components/Hero-section/index';
import Skills from './components/Skills/index';
import Portfolio from './components/Portfolio/index';
import FooterComponent from './components/Footer/index';
function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe/>
      <Skills />
      <Portfolio />
      <FooterComponent/>
     
    </div>
  );
}

export default App;
