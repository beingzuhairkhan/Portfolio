
import { FaLinkedin, FaGithubSquare, FaLink } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white  mt-10  " id="contact" >
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6 ">
          <a
            href="https://www.linkedin.com/in/zuhair-khan-55b9a624a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/beingzuhairkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors"
          >
            <FaSquareXTwitter size={30}/>
          </a>
          <a
            href="https://github.com/beingzuhairkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://nexuslinks.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-teal-400 transition-colors"
          >
            <FaLink size={30}/>
          </a>
        </div>
        <h3 className="text-sm text-gray-400">&copy; Made by Zuhair Khan</h3>

        {/* Footer Text */}
      </div>
    </footer>
  );
};

export default Footer;
