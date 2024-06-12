import React, { useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import weather from "../../assets/weather.png";
import stdManagement from "../../assets/stdManagement.png";
import ToDo from "../../assets/ToDo.png";
import chatbot from "../../assets/chatbot.png";
import mcqs from "../../assets/mcqs.png";
import healthcare from "../../assets/healthcare.png";
import wander from "../../assets/wanderlust.jpg";
import folio from "../../assets/p.png";
import projecticon from "../../assets/image.png";
// import "ionicons/icons";

const Portfolio = () => {
  return (
    // <section id="Skill">
      <div className="container" id="Skill">
        {/* <h1 className="heading" >Projects</h1> */}
       <center>
       <div className="projecticons bounce">
          <img src={projecticon}  />
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
          pagination={{el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <center>
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={healthcare} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Ai-Healthcare</h3>
              <p>
              Our MERN stack AI healthcare platform offers seamless appointment booking, 
              doctor discovery, and symptom checking functionalities powered by 
              cutting-edge NLP technology. Users can easily schedule appointments
               with healthcare professionals, search for doctors based on specialties,
                and utilize a symptom checker tool for preliminary diagnosis.
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/Ai-Healthcare"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://ai-healthcare-6n8s.vercel.app/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={mcqs} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>MCQ-Generator</h3>
              <p>
              MCQ Generator using GenAI is an innovative tool 
              that leverages advanced AI algorithms to automatically 
              generate multiple-choice questions (MCQs) from provided 
              text or documents.
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/mcq-generators"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://mcq-generators.vercel.app/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={stdManagement} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Emp-Managment-System</h3>
              <p>
              Employee Management System—a robust solution for streamlined HR operations. 
              Featuring CRUD functionalities for Create, Read, Update, and Delete operations,
               along with advanced search capabilities by name and filtering options, 
               our system empowers administrators to efficiently manage employee data. 
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/FullStack"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://full-stack-gray.vercel.app/dashboard"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={ToDo} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Todo-App</h3>
              <p>
              Our Todo app, built using React and TypeScript, offers a 
              seamless task management experience. With intuitive user interfaces
               and robust typing provided by TypeScript, users can efficiently 
               organize their tasks, set priorities, and track progress effortlessly.
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/Todo-app"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://main--to-do-aapppp.netlify.app/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={chatbot} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>PDF-Chatbot</h3>
              <p>
              PDF Chatbot, designed to streamline document exploration and interaction.
               Leveraging advanced technologies including Llama2 for natural language processing,
                FAISS for database querying, and Chainlit for conversational interfaces,
                 our chatbot offers intuitive navigation, insightful responses, and dynamic 
                 engagement with PDF documents. 
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/PDF-CHATBOT"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>
        
          <SwiperSlide >
            <div className="box_container" >
            <div className="img_container">
            <img src={wander} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Wanderlust</h3>
              <p>
                Embark on a journey of comfort and style with our Airbnb replica
                project. Hospitality Haven redefines the way you travel,
                offering a platform that connects travelers with unique
                accommodations worldwide.
              </p>
            </div>
           <div className="btnGap">
           <a
              href="https://github.com/beingzuhairkhan/Web"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://wanderlusts-xbjo.onrender.com/listings"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
           </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="box_container">
            <div className="img_container">
            <img src={weather} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Weather APP</h3>
              <p>
              Our Weather Application, built using React.js, provides users with 
              real-time weather updates for their chosen locations. 
              The app fetches weather data from a reliable API and displays it in 
              a clean, user-friendly interface. 
              </p>
            </div> 
            <a
              href="https://github.com/beingzuhairkhan/Weather_App"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://bucolic-hamster-8a0a67.netlify.app/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="box_container">
            <div className="img_container">
            <img src={folio} alt="slide_image" className="img_height" />
            </div>
            <div className="description">
              <h3>Portfolio</h3>
              <p>
              Introducing our ReactJS portfolio—a dynamic showcase of skills and achievements. With sleek design and smooth navigation, 
              this portfolio offers a personalized glimpse into our work, projects, and expertise. 
            
              </p>
            </div>
            <a
              href="https://github.com/beingzuhairkhan/Portfolio"
              className="btn btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://zuhairfolio.netlify.app/"
              className="btn btn-primary btn2"
            >
              Live Demo
            </a>
            </div>
          </SwiperSlide>
         
          </center>
          <center>
          <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">Prev</ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline">Next</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </center>
        </Swiper>
      </div>
    // </section>
  );
};

export default Portfolio;
