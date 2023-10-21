import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiSolidUserPin} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {AiFillPhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><BiSolidUserPin/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#port" onClick={() => setActiveNav('#port')} className={activeNav=== '#port' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav