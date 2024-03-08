import React from 'react'
import './Skill.css'
import { FaHtml5 , FaCss3Alt , FaReact , FaNodeJs , FaGithub , FaFigma  , FaPython    } from "react-icons/fa";
import { SiJavascript , SiTailwindcss , SiExpress , SiMongodb , SiPostman , SiCanva , SiCplusplus   } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { BiLogoNetlify } from "react-icons/bi";

const Skill = () => {
  return (
    // <div id='Skill'>
      <section  >
        <h1>Skills</h1>
      <div className='skill_container'>
       
       <div className='frontend'>
       <h3>Frontend Development</h3>
       <div className='first_container'>
       <div className='html'> <a className='skill_box ' href={FaHtml5}><FaHtml5 /></a></div>

        <div className='css'><a className='skill_box ' href={FaCss3Alt}><FaCss3Alt /></a></div>

        <div className='js'><a className='skill_box ' href={SiJavascript}><SiJavascript /></a></div>

        <div className='btp'> <a className='skill_box ' href={FaBootstrap}><FaBootstrap /></a></div>

        <div className='tail'><a className='skill_box ' href={SiTailwindcss}><SiTailwindcss /></a></div>

        <div className='react'> <a className='skill_box ' href={FaReact }><FaReact /></a></div>
        </div>
       </div>
       <div className='backend'>
       <h3>Backend Development</h3>
        <div className='second_container'>
        <div className='node'> <a className='skill_box ' href={FaNodeJs}><FaNodeJs /></a></div>

        <div className='express'><a className='skill_box ' href={SiExpress}><SiExpress /></a></div>
  
        <div className='sql'><a className='skill_box ' href={GrMysql}><GrMysql /></a></div>

        <div className='mongo'> <a className='skill_box ' href={SiMongodb}><SiMongodb /></a></div>

        <div className='python'><a className='skill_box ' href={FaPython}><FaPython /></a></div>
        </div>

       
       </div>
       <div className='extra'>
       <h3>Extra Skill</h3>
        <div className='third_container'>
        <div className='post'><a className='skill_box' href={SiPostman  }><SiPostman   /></a></div>
        <div className='net'><a className='skill_box' href={BiLogoNetlify }><BiLogoNetlify  /></a></div>
        <div className='git'> <a className='skill_box' href={FaGithub  }><FaGithub   /></a></div>
        <div className='figma'><a className='skill_box' href={FaFigma }><FaFigma  /></a></div>
        <div className='canva'><a className='skill_box' href={SiCanva }><SiCanva  /></a></div>
        <div className='C'> <a className='skill_box' href={SiCplusplus  }><SiCplusplus   /></a></div>
        </div>
       </div>
       </div>
      </section>
      // </div>
  
  )
}

export default Skill
