import {  useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 flex gap-4 p-[12px] bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-full shadow-lg z-50">
      <a
        href="#"
        onClick={() => setActive('#')}
        className={`flex items-center justify-center p-3 rounded-full text-white text-lg ${
          active === '#' ? 'bg-[var(--color-bg-variant)]' : 'hover:bg-gray-700'
        } transition duration-200 ease-in-out hover:text-white`}
      >
        <IoMdHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={`flex items-center justify-center p-3 rounded-full text-white text-lg ${
          active === '#about' ? 'bg-[var(--color-bg-variant)]' : 'hover:bg-gray-700'
        } transition duration-200 ease-in-out hover:text-white`}
      >
        <FaRegUser />
      </a>
      <a
        href="#Skill"
        onClick={() => setActive('#Skill')}
        className={`flex items-center justify-center p-3 rounded-full text-white text-lg  ${
          active === '#Skill' ? 'bg-[var(--color-bg-variant)]' : 'hover:bg-gray-700'
        } transition duration-200 ease-in-out hover:text-white`}
      >
        <TbBulb size={18}  />
      </a>
      <a
        href="#project"
        onClick={() => setActive('#project')}
        className={`flex items-center justify-center p-3 rounded-full text-white text-lg ${
          active === '#project' ? 'bg-[var(--color-bg-variant)]' : 'hover:bg-gray-700'
        } transition duration-200 ease-in-out hover:text-white`}
      >
        <FaLaptop />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={`flex items-center justify-center p-3 rounded-full text-white text-lg ${
          active === '#contact' ? 'bg-[var(--color-bg-variant)]' : 'hover:bg-gray-700'
        } transition duration-200 ease-in-out hover:text-white`}
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
