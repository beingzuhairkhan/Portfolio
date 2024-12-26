import { useEffect } from 'react';
import Cl from './Cl';
import profile from '../../assets/avatarRemoveBg.png';
import HeaderSocial from './HeaderSocial';
import { Spotlight } from '../ui/Spotlight'

import './Header.css';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      new Typed('.text-light', {
        strings: ['Web Developer', 'Programmer', 'Full Stack Developer'],
        typeSpeed: 80,
      });
    };
  }, []);

  return (
    <div>
      <header className="overflow-hidden pt-28 h-[110vh] md:h-[120vh] sm:h-[95vh] flex flex-col justify-center relative mx-auto max-w-[1200px]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="text-center h-full relative container mx-auto">
          <h5 className="mt-4 text-md" >Hello I'm</h5>
          <h1 className="mt-2 mb-4 text-4xl" >Zuhair Nafis Khan</h1>
          <span className="text-light text-md "></span>
          <Cl />
          <HeaderSocial className="hidden md:block" />
          {/* Add 'hidden' for small screens, 'md:block' to show on medium screens */}
          <a
            href="#contact"
            className="hidden md:block absolute right-[2rem] bottom-[8rem] rotate-90 text-sm font-thin"
          >
            Scroll Down
          </a>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-24 w-[20rem] flex justify-center items-center">
            <img
              className="
         h-[20rem]
         bg-gray-100
         shadow-xl
         transition-transform
         z-20
         backdrop-blur-md
         filter
         drop-shadow-lg
         animate-random-shape
       "
              src={profile}
              alt="Profile"
            />


          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
