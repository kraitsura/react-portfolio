import React from 'react'
import AaryaReddyCV from '../../assets/AaryaReddyCV.pdf'

const Buttons =() => {
  return (
    <div className='buttons'>
        <a href={AaryaReddyCV} download className='button'>Download CV</a>
        <a href="#contact" className='button button-prime'>Contact Me</a>
    </div>
  )
}

export default Buttons