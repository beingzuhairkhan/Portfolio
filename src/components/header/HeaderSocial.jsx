
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className="hidden md:flex flex-col md:gap-5 items-center gap-3 absolute mx-auto left-8 bottom-8 md:bottom-10 md:left-16">
      {/* Social Icon: LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/zuhair-khan-55b9a624a/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-lg md:text-2xl  transition"
      >
        <FaLinkedin />
      </a>
      {/* Social Icon: Twitter */}
      <a 
        href="https://twitter.com/beingzuhairkhan" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-lg md:text-2xl  transition"
      >
        <FaTwitter />
      </a>
      {/* Social Icon: GitHub */}
      <a 
        href="https://github.com/beingzuhairkhan" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-lg md:text-2xl  transition"
      >
        <FaGithub />
      </a>
      {/* Optional vertical line */}
      <div className="hidden md:block h-14 w-[2px] bg-white mx-4"></div>
    </div>
  );
};

export default HeaderSocial;
