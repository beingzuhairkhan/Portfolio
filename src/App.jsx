import './App.css';
import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skill from './components/experience/Skill';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import StarCanvas from './components/background/Star'  // Make sure this path is correct

const App = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden'}}>
      {/* Star animation background */}
      <StarCanvas />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, color: 'white'  }}>
        <Nav />
        <Header />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
