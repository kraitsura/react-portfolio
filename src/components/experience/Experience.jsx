import React from 'react'
import './exp.css'
import {PiSealCheckFill} from 'react-icons/pi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I can Offer</h5>
      <h2>Skillset</h2>

      <div className="container experience__container">
        

        {/* frontend card */}
        <div className="exp__card1">
          <h3>Frontend Development</h3>
          <div className="card_content">
            
            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>HTML</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>CSS</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>React</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
              
            </article>
            
          </div>
        </div>

        {/* backend card */}
        <div className="exp__card2">
          <h3>Backend Development</h3>
          <div className="card_content">
            
            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>NODE JS</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>Python</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>C++</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>
            
          </div>
        </div>

        {/* interpersonal card */}
        <div className="exp__card2">
          <h3>Interpersonal Skills</h3>
          <div className="card_content">
            
            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>Leadership</h4>
                <small className="subtext">
                  Experienced
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>Conflict Management</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>Python</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>

            <article className="card_details">
              <PiSealCheckFill className="card-icon" />
              <div>
                <h4>C++</h4>
                <small className="subtext">
                  Fairly Profecient
                </small>
              </div>
            </article>
            
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience