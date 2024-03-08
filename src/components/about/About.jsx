import React from 'react'
import './About.css'
import profile from '../../assets/clip.png'
const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know </h5>
       <h1>About Me</h1>
       <div className='container about_container'>
        <div className='about_me'>
          <div className='about_img'>
            <img src={profile}></img>
          </div>
          </div>
          <div className='aboutP'>
          <p >
          I am a passionate Full Stack Developer who loves to
          explore new technologies and build scalable applications. 
          Although I expertize in full-stack development, 
          I prefer to work on the backend of any application.
          </p>
          <p>A little bit about my education, I am a 2nd year student of
           <em> M H saboo siddik College of Engineering , Mumbai ,</em>
          pursuing B.E in <em>Computer Science</em>  and my current cumulative grade point average is 7.8 (till 3rd semester). </p>
          <a href='#contact' className='btn btn-primary about_btn'>Let's Connect </a>
          </div>
         
     
       
       </div>
       
    </section>
  )
}

export default About

