import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithubSquare  } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
    <div className='footer_container'>
    <a href="https://www.linkedin.com/in/zuhair-khan-55b9a624a/" target="__blank" className=" social ">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/beingzuhairkhan" target="__blank" className="social">
        <FaSquareXTwitter />
      </a>
      <a href="https://github.com/beingzuhairkhan" target="__blank" className='social'>
        <FaGithubSquare />
      </a>
    </div>
    <h3 className="copy-right">&copy; Made by Zuhair Khan</h3>
    </footer>
  )
}

export default Footer
