import React from 'react'
import './Portfolio.css'
import weather from '../../assets/weather-app-.jpg'
import wander from '../../assets/wanderlust.jpg'
import folio from '../../assets/p.png'
const Portfolio = () => {
  return (
    <section id='Skill'>
        <h1>Project</h1>
      <div className='main_container'>
        

          <article className='project1'>
            <div className='project1_img'>
            <img src={wander} alt='' className='img_height'></img>
            </div>
            <div className='description'>
            <h3>Wanderlust</h3>
            <p>Embark on a journey of comfort and style with our Airbnb replica project. Hospitality Haven redefines the way you travel, offering a platform that connects travelers with unique accommodations worldwide.</p>
            </div>
            <a href='https://github.com/beingzuhairkhan/Web' className='btn btn1' target='_blank'>Github</a>
            <a href='https://wanderlusts-xbjo.onrender.com/listings' className='btn btn-primary btn2'>Live Demo</a>

          </article >
          <article className='project1'>
            <div className='project1_img'>
              <img src={weather} alt='' className='img_height'></img>
            </div>
            <div className='description'>
            <h3>Weather App</h3>
            <p>These weather apps usually use weather APIs that
               provide forecast data.</p>
            </div>
            <a href='https://github.com/beingzuhairkhan/Weather_App'  className='btn btn1' >Github</a>
            <a href='https://bucolic-hamster-8a0a67.netlify.app/' className='btn btn-primary btn2'>Live Demo</a>

          </article>
          <article className='project1'>
            <div className='project1_img'>
            <img src={folio} alt='' className='img_height'></img>
            </div>
            <div className='description'>
            <h3>Portfolio</h3>
            <p>Welcome to my digital realm! As a passionate developer, my portfolio showcases a diverse collection of projects that reflect my love for clean code and innovative solutions. From web applications , each project tells a unique story of problem-solving and creativity.</p>
            </div>
            <a href=''  className='btn btn1'>Github</a>
            <a href='' className='btn btn-primary btn2'>Live Demo</a>

          </article>

        
      </div>
    </section>
  )
}

export default Portfolio
