import {React , useState} from 'react'
import './Nav.css'
import { IoMdHome    } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Nav = () => {
  const [active , setActive] = useState('#')
  return (
    <nav>
        <a href='#' onClick={()=>setActive('#')} className={active === '#' ? 'active' : ''}><IoMdHome/></a>
        <a href='#about'onClick={()=> setActive('#about')} className={active === '#about' ? 'active': ''}><FaRegUser /></a>
        <a href='#Skill' onClick={()=>setActive('#Skill')} className={active === '#Skill' ? 'active': ''}><FaLaptop /></a>
        <a href='#contact' onClick={()=>setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdMessage /></a>
    </nav>
  )
}

export default Nav
