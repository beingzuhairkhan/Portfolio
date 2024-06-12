import React, { useEffect } from 'react';
import './Header.css';
import Cl from './Cl'
import profile from '../../assets/clip.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      var typed = new Typed('.text-light', {
        strings: ['Web Developer', 'Programmer', 'Full Stack Developer'],
        typeSpeed: 80,
      });
    };

  },[] ); 

  return (
    <div>
      <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Zuhair Nafis Khan</h1>
          <span className='text-light'></span>
          <Cl/>
          <HeaderSocial/>
          <div className='me'>
            <img className='pf' src={profile} alt='Profile'></img>
          </div>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    
      </header>
    </div>
  );
};

export default Header;
