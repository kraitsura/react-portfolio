import React from 'react'
import './port.css'
import port1 from '../../assets/port1.png'

const data = [
  {
    id: 1,
    image: port1,
    title: 'MERN-stack Movie Database',
    github: 'https://github.com',
    demo: 'https://krait-films-6zq88j83e-kraitsuras-projects.vercel.app/'
  }
]

const Port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       
      {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="port__item">
                <div className="port__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="port_buttons">
                  <a href={github} className='button' target='_blank'>GitHub</a>
                  <a href={demo} className='button button-prime' target='_blank'>Deploy</a>  
                </div> 
              </article>
            )
          })
        }
       
      </div>

    </section>
  )
}

export default Port