import React from 'react'
import './about.css'
import ME2 from '../../assets/ME2.JPG'
import {FaPeopleGroup} from 'react-icons/fa6'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__image">
            <img src={ME2} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaPeopleGroup className="aboutIcon"/>
              <h5>Experience</h5>
              <small>1 Year of Programming Experience, Full-stack project development </small>
            </article>

            <article className='about__card'>
              <FaPeopleGroup className="aboutIcon"/>
              <h5>Education</h5>
              <small>Bachelor of Science: CS\nIBDP Diploma</small>
            </article>

            <article className='about__card'>
              <FaPeopleGroup className="aboutIcon"/>
              <h5>Leadership</h5>
              <small>Lead Student Representative at New Student Programs ASU</small>
            </article>
          </div>

          <a href="#contact" className='button button-prime'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About