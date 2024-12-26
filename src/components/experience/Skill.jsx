
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
///
import react from '../../assets/react.png'
import typeScript from '../../assets/ty.png'
import next from '../../assets/next.png'
import redux from '../../assets/redux.png'
import boot from '../../assets/boot.png'
import shad from '../../assets/shad.png'
import daisy from '../../assets/daisy.png'
import tailwind from '../../assets/tailwind.png'
import ace from '../../assets/ace.png'
//
import ex from '../../assets/ex.png';
import node from '../../assets/node.png';
import npm from '../../assets/npm.png';
import mongo from '../../assets/mongo.png';
import post from '../../assets/post.png';
import cloud from '../../assets/cloud.png';
import my from '../../assets/my.png';



import vercel from '../../assets/vercel.png';
import net from '../../assets/net.png';
import github from '../../assets/github.png';
import git from '../../assets/git.png';


import { useState } from 'react';

// Define skill sets
const frontendSkills = [
  { src: html, bgClass: "bg-[rgba(222,134,117,0.25)]", name: "HTML" },
  { src: css, bgClass: "bg-[rgba(28,120,188,0.25)]", name: "CSS" },
  { src: js, bgClass: "bg-[rgba(223,194,53,0.25)]", name: "JavaScript" },
  { src: react, bgClass: "bg-[rgba(102,212,240,0.25)]", name: "React" },
  { src: shad, bgClass: "bg-[rgba(22,22,22,0.25)]", name: "ShadcnUI" },
  { src: typeScript, bgClass: "bg-[rgba(56,188,247,0.25)]", name: "TypeSCript" },
  { src: next, bgClass: "bg-[rgba(50,50,50,0.25)]", name: "Nextjs" },
  //
  { src: redux, bgClass: "bg-[rgba(115,71,182,0.25)]", name: "Redux" },
  { src: boot, bgClass: "bg-[rgba(144,83,247,0.25)]", name: "BooyStrap" },
 
  { src: daisy, bgClass: "bg-[rgba(112,125,113,0.25)]", name: "DaisyUI" },
  { src: tailwind, bgClass: "bg-[rgba(56,188,247,0.25)]", name: "TailwindCSS" },
  { src: ace, bgClass: "bg-[rgba(22,22,22,0.25)]", name: "Aceternity UI" },
];

const backendSkills = [
  { src: ex, bgClass: "bg-[rgba(108,108,108,0.25)]", name: "Express" },
  { src: node, bgClass: "bg-[rgba(131,204,42,0.25)]", name: "Node.js" },
  { src: npm, bgClass: "bg-[rgba(227,152,152,0.25)]", name: "npm" },
  { src: mongo, bgClass: "bg-[rgba(45,91,129,0.25)]", name: "MongoDB" },
  { src: post, bgClass: "bg-[rgba(45,91,129,0.25)]", name: "Postgresql" },
  { src: my, bgClass: "bg-[rgba(5,78,101,0.25)]", name: "MySQL" },
  { src: cloud, bgClass: "bg-[rgba(242,137,40,0.25)]", name: "Clouflare" },
];

const othersSkills = [
  { src: vercel, bgClass: "bg-[rgba(93,93,93,0.25)]", name: "Vercel" },
  { src: net, bgClass: "bg-[rgba(57,173,186,0.25)]", name: "Netlify" },
  { src: github, bgClass: "bg-[rgba(132,132,132,0.25)]", name: "Github" },
  { src: git, bgClass: "bg-[rgba(221,75,53,0.25)]", name: "Git" },
];

const Skill = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("frontend");


  const getSkills = () => {
    if (selectedCategory === "frontend") return frontendSkills;
    if (selectedCategory === "backend") return backendSkills;
    if (selectedCategory === "others") return othersSkills;
    return [];
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 px-4" id="Skill">
      <center>
      <div className="h-60 w-full mt-[50px] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className=" text-2xl lg:text-[40px]  font-bold text-center text-white relative z-20">
         Tech Stack
      </h1>
      <div className="w-[40rem]  relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
     

      </div>
    </div>
      </center>

      <div className="">
        {/* Category buttons */}
        <center>
        <div className=" max-w-md flex justify-evenly text-sm bg-zinc-900  py-3  rounded-md">
          <div
            className={`cursor-pointer text-white p-2 rounded-md min-w-[120px] text-center ${
              selectedCategory === "frontend" ? " !text-black bg-[--color-bg-variant]  text-lg" : "bg-transparent text-lg"
            }`}
            onClick={() => setSelectedCategory("frontend")}
          >
            Frontend
          </div>
          <div
            className={`cursor-pointer text-white px-4 py-2 rounded-md min-w-[120px] text-center ${
              selectedCategory === "backend" ? "bg-[--color-bg-variant] !text-gray-950 text-lg" : "bg-transparent text-lg"
            }`}
            onClick={() => setSelectedCategory("backend")}
          >
            Backend
          </div>
          <div
            className={`cursor-pointer text-white px-4 py-2 rounded-md min-w-[120px] text-center ${
              selectedCategory === "others" ? "bg-[--color-bg-variant] !text-gray-950 text-lg" : "bg-transparent text-lg"
            }`}
            onClick={() => setSelectedCategory("others")}
          >
            Others
          </div>
        </div>
        </center>

        {/* Display skills based on the selected category */}

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        // data-aos="zoom-in-up"
        >
          {getSkills().map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-lg p-4 space-y-2 "
              data-aos="zoom-in-up" data-aos-direction="up"
            >
              <div
                className={`flex justify-center items-center w-[100px] h-[100px]  rounded-full ${skill.bgClass}`}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <p className="text-white text-center text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
