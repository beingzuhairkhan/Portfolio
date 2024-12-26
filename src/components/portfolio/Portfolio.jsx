
import { HoverEffect } from '../ui/card-hover-effect'
import { SparklesCore } from "../ui/sparkles";
import weather from "../../assets/weather.png";
import stdManagement from "../../assets/stdManagement.png";
import ToDo from "../../assets/ToDo.png";
import chatbot from "../../assets/chatbot.png";
import mcqs from "../../assets/mcqs.png";
import healthcare from "../../assets/healthcare.png";
import wander from "../../assets/wanderlust.jpg";
import folio from "../../assets/p.png";
import garuda from '../../assets/garuda.png';
import link from '../../assets/linktree.png';
import news from '../../assets/news.png';
import cold from '../../assets/coldEmail.png';
import text from '../../assets/texttoimage.png';
import notespace from '../../assets/notespace.png';
import track from '../../assets/track.png';


export const projects = [
  {
    id: 1,
    title: "Garuda-institute",
    image: garuda,
    github: "https://github.com/beingzuhairkhan/LMS-server",
    demo: "https://garudainstitute-edu.netlify.app/",
    tech: ["Next.js", "Express", "MongoDB", "Redis"],
  },
  {
    id: 2,
    title: "News Portal",
    image: news,
    github: "https://github.com/beingzuhairkhan/news-portal",
    demo: "https://news-portal-arnc.vercel.app/",
    tech: ["React", "Node.js", "News API", "Express"],
  },
  {
    id: 3,
    title: "NoteSpace",
    image: notespace,
    github: "https://github.com/beingzuhairkhan/NoteSpace",
    demo: "https://github.com/beingzuhairkhan/NoteSpace",
    tech: ["Next.js", "Firebase", "Shadcn", "Liveblocks" , "Cloudflare"],
  },
  {
    id: 4,
    title: "Shipment Tracking",
    image: track,
    github: "https://github.com/beingzuhairkhan/shipmentTracking",
    demo: "https://github.com/beingzuhairkhan/shipmentTracking",
    tech: ["React", "Solidity", "Hardhat", "Ether.js"],
  },
  {
    id: 5,
    title: "Cold Email Generator",
    image: cold,
    github: "https://github.com/beingzuhairkhan/cold_Email",
    demo: "https://cold-email-2.onrender.com/",
    tech: ["Python", "ChromaDB", "Streamlit" , "Langchain"],
  },
  {
    id: 6,
    title: "Text-to-Image",
    image: text,
    github: "https://github.com/beingzuhairkhan/text-to-image-generator",
    demo: "https://artfromwords.netlify.app/",
    tech: ["React", "Tailwind CSS", "HuggingFace API", ],
  },
  {
    id: 7,
    title: "Link Tree",
    image: link,
    github: "https://github.com/beingzuhairkhan/NexusLink",
    demo: "https://nexuslinks.netlify.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Ai-Healthcare",
    image: healthcare,
    github: "https://github.com/beingzuhairkhan/Ai-Healthcare",
    demo: "https://ai-healthcare-6n8s.vercel.app/",
    tech: ["React", "MongoDB", "Node.js", "Express"],
  },
  {
    id: 9,
    title: "MCQ-Generator",
    image: mcqs,
    github: "https://github.com/beingzuhairkhan/mcq-generators",
    demo: "https://mcq-generators.vercel.app/",
    tech: ["Streamlit", "Python", "Langchain", "openai"],
  },
  {
    id: 10,
    title: "Emp-Management-System",
    image: stdManagement,
    github: "https://github.com/beingzuhairkhan/FullStack",
    demo: "https://full-stack-gray.vercel.app/dashboard",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 11,
    title: "Todo-App",
    image: ToDo,
    github: "https://github.com/beingzuhairkhan/Todo-app",
    demo: "https://main--to-do-aapppp.netlify.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    id: 12,
    title: "PDF-Chatbot",
    image: chatbot,
    github: "https://github.com/beingzuhairkhan/PDF-CHATBOT",
    demo: "https://github.com/beingzuhairkhan/PDF-CHATBOT",
    tech: ["Python", "HuggingFace", "Faiss", "transformers"],
  },
  {
    id: 13,
    title: "Wanderlust",
    image: wander,
    github: "https://github.com/beingzuhairkhan/Web",
    demo: "https://wanderlusts-xbjo.onrender.com/listings",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 14,
    title: "Weather APP",
    image: weather,
    github: "https://github.com/beingzuhairkhan/Weather_App",
    demo: "https://bucolic-hamster-8a0a67.netlify.app/",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
  },
  {
    id: 15,
    title: "Portfolio",
    image: folio,
    github: "https://github.com/beingzuhairkhan/Portfolio",
    demo: "https://zuhairfolio.netlify.app/",
    tech: ["React", "Tailwind CSS", "Aceternity UI" ],
  },
];




const Portfolio = () => {
  return (
    <div >
      {/* Centered Heading */}
      <div className="h-60 w-full mt-[100px] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" id="project">
      <h1 className=" text-2xl lg:text-[40px] mb-2 font-bold text-center text-white relative z-20">
        My Projects
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full  bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      {/* Project Cards */}
      <div className="max-w-[1300px] mx-auto p-4">
        <HoverEffect items={projects} />
       <div>

       </div>
      </div>
    </div>
  );
};


export default Portfolio
