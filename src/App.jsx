import './App.css'
import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skill from './components/experience/Skill'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
