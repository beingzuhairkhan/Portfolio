// src/components/Portfolio/Portfolio.js

import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import all project images
import weather from "../../assets/weather.png";
import stdManagement from "../../assets/stdManagement.png";
import ToDo from "../../assets/ToDo.png";
import chatbot from "../../assets/chatbot.png";
import mcqs from "../../assets/mcqs.png";
import healthcare from "../../assets/healthcare.png";
import wander from "../../assets/wanderlust.jpg";
import folio from "../../assets/p.png";
import projecticon from "../../assets/pj.png";
import garuda from '../../assets/garuda.png';
import link from '../../assets/linktree.png';
import news from '../../assets/news.png';
import cold from '../../assets/coldEmail.png';
import text from '../../assets/texttoimage.png';

// Define all projects in an array
const projects = [
  {
    id: 1,
    title: "Garuda-institute",
    description:
      "The Garuda Institute project is a web application developed using the MERN stack (MongoDB, Express.js, Redis, Node.js) combined with TypeScript for enhanced type safety and maintainability. This platform serves as an online class website, with Next.js handling the client-side rendering for improved performance and SEO.",
    image: garuda,
    github: "https://github.com/beingzuhairkhan/LMS-server",
    demo: "https://garudainstitute-edu.netlify.app/",
  },
  {
    id: 2,
    title: "News Portal",
    description:
      "A News Portal project featuring a full-stack application with a React frontend and a Node.js backend. Users can browse, search, and filter news articles by category and country. The backend handles API requests, data management. The portal aims to deliver real-time news updates and engaging content to users.",
    image: news,
    github: "https://github.com/beingzuhairkhan/news-portal",
    demo: "https://news-portal-arnc.vercel.app/",
  },
  {
    id: 3,
    title: "Cold Email Generator",
    description:
      "A Cold Email Generator built using Python with Streamlit for the frontend and Groq along with a 70B parameter LLaMA model for natural language processing. This application allows users to generate personalized cold email templates based on provided inputs, utilizing the powerful LLaMA model for crafting engaging content.",
    image: cold,
    github: "https://github.com/beingzuhairkhan/cold_Email",
    demo: "https://cold-email-2.onrender.com/",
  },
  {
    id: 4,
    title: "Text-to-Image",
    description:
      "A Text to Image Generator that uses the Hugging Face API with Stable Diffusion to transform textual descriptions into high-quality images.",
    image: text,
    github: "https://github.com/beingzuhairkhan/text-to-image-generator",
    demo: "https://artfromwords.netlify.app/",
  },
  {
    id: 5,
    title: "Link Tree",
    description:
      "A Linktree clone built with React that enables users to create a customizable landing page featuring multiple links to social media and websites.",
    image: link,
    github: "https://github.com/beingzuhairkhan/NexusLink",
    demo: "https://nexuslinks.netlify.app/",
  },
  {
    id: 6,
    title: "Ai-Healthcare",
    description:
      "Our MERN stack AI healthcare platform offers seamless appointment booking, doctor discovery, and symptom checking functionalities powered by cutting-edge NLP technology. Users can easily schedule appointments with healthcare professionals, search for doctors based on specialties, and utilize a symptom checker tool for preliminary diagnosis.",
    image: healthcare,
    github: "https://github.com/beingzuhairkhan/Ai-Healthcare",
    demo: "https://ai-healthcare-6n8s.vercel.app/",
  },
  {
    id: 7,
    title: "MCQ-Generator",
    description:
      "MCQ Generator using GenAI is an innovative tool that leverages advanced AI algorithms to automatically generate multiple-choice questions (MCQs) from provided text or documents.",
    image: mcqs,
    github: "https://github.com/beingzuhairkhan/mcq-generators",
    demo: "https://mcq-generators.vercel.app/",
  },
  {
    id: 8,
    title: "Emp-Managment-System",
    description:
      "Employee Management System—a robust solution for streamlined HR operations. Featuring CRUD functionalities for Create, Read, Update, and Delete operations, along with advanced search capabilities by name and filtering options, our system empowers administrators to efficiently manage employee data.",
    image: stdManagement,
    github: "https://github.com/beingzuhairkhan/FullStack",
    demo: "https://full-stack-gray.vercel.app/dashboard",
  },
  {
    id: 9,
    title: "Todo-App",
    description:
      "Our Todo app, built using React and TypeScript, offers a seamless task management experience. With intuitive user interfaces and robust typing provided by TypeScript, users can efficiently organize their tasks, set priorities, and track progress effortlessly.",
    image: ToDo,
    github: "https://github.com/beingzuhairkhan/Todo-app",
    demo: "https://main--to-do-aapppp.netlify.app/",
  },
  {
    id: 10,
    title: "PDF-Chatbot",
    description:
      "PDF Chatbot, designed to streamline document exploration and interaction. Leveraging advanced technologies including Llama2 for natural language processing, FAISS for database querying, and Chainlit for conversational interfaces, our chatbot offers intuitive navigation, insightful responses, and dynamic engagement with PDF documents.",
    image: chatbot,
    github: "https://github.com/beingzuhairkhan/PDF-CHATBOT",
    demo: "https://github.com/beingzuhairkhan/PDF-CHATBOT",
  },
  {
    id: 11,
    title: "Wanderlust",
    description:
      "Embark on a journey of comfort and style with our Airbnb replica project. Hospitality Haven redefines the way you travel, offering a platform that connects travelers with unique accommodations worldwide.",
    image: wander,
    github: "https://github.com/beingzuhairkhan/Web",
    demo: "https://wanderlusts-xbjo.onrender.com/listings",
  },
  {
    id: 12,
    title: "Weather APP",
    description:
      "Our Weather Application, built using React.js, provides users with real-time weather updates for their chosen locations. The app fetches weather data from a reliable API and displays it in a clean, user-friendly interface.",
    image: weather,
    github: "https://github.com/beingzuhairkhan/Weather_App",
    demo: "https://bucolic-hamster-8a0a67.netlify.app/",
  },
  {
    id: 13,
    title: "Portfolio",
    description:
      "Introducing our ReactJS portfolio—a dynamic showcase of skills and achievements. With sleek design and smooth navigation, this portfolio offers a personalized glimpse into our work, projects, and expertise.",
    image: folio,
    github: "https://github.com/beingzuhairkhan/Portfolio",
    demo: "https://zuhairfolio.netlify.app/",
  },
];

// Reusable ProjectCard Component
const ProjectCard = ({ project }) => {
  const { title, description, image, github, demo } = project;

  return (
    <div className="box_container">
      <div className="img_container">
        <img src={image} alt={`${title} screenshot`} className="img_height" />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="btnGap">
        <a
          href={github}
          className="btn btn1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {demo !== "/" && (
          <a
            href={demo}
            className="btn btn-primary btn2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="container" id="Skill">
      <center>
        <div className="projecticons bounce">
          <img src={projecticon} alt="Project Icon" />
        </div>
      </center>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}

        {/* Slider Controls */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">Prev</ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline">Next</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Portfolio;
