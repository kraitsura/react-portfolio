import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aarya Reddy</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skillset</a></li>
        <li><a href="#port">Portfolio</a></li>
        <li><a href="#extra">Extra Curriculars</a></li>
      </ul>

      <div className='footer__social'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
      </div>

      <div className="copyright">
        <small>&copy; Aarya Reddy. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer