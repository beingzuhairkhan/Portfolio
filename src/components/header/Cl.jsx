import React from 'react'
import CV from '../../assets/CV.pdf'
const Cl = () => {
  return (
    <div className='cl'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default Cl
