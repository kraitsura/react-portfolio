import React from 'react'
import './header.css'
import Buttons from './Buttons'
import ME1 from '../../assets/ME1.png'
import HeaderSocials from './HeaderSocials'
import About from '../about/About'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aarya Baireddy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Buttons />
        <HeaderSocials />
        <About />
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header