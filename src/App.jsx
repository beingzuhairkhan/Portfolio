import './App.css';
import {useEffect} from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skill from './components/experience/Skill';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Aos from 'aos'
import "aos/dist/aos.css"
const App = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  
  return (
    <div className="bg-black text-white" >
    
        <Nav />
        <Header />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
       
    </div>
  );
};

export default App;
