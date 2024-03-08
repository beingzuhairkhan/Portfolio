import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className="socials  ">
      <a href="https://www.linkedin.com/in/zuhair-khan-55b9a624a/" target="__blank" className=" ">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/beingzuhairkhan" target="__blank" className="">
        <FaTwitter />
      </a>
      <a href="https://github.com/beingzuhairkhan" target="__blank" className=''>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
