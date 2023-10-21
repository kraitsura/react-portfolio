import React from 'react'
import './extra.css'
import extra1 from '../../assets/extra1.JPG'
import {TfiMoreAlt} from 'react-icons/tfi'

// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: extra1,
    activity: 'name',
    description: 'dasdasd',
    more: 'https://github.com'
  },
  {
    image: extra1,
    activity: 'name',
    description: 'dasdasd',
    more: 'https://github.com'
  },
  {
    image: extra1,
    activity: 'name',
    description: 'dasdasd',
    more: 'https://github.com'
  }
]

const Extra = () => {
  return (
    <section id='extra'>
      <h5>Other things I do</h5>
      <h2>Extra Curriculars</h2>
      <Swiper className="container extra__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true}}>
        {
          data.map(({image,activity,description,more}, index) => {
            return(
              <SwiperSlide key={index} className="extra__card">
                <div className="extra__image">
                  <img src={image} alt="" />
                </div>
                <h5 className='extra__actvity'>{activity}</h5>
                <small className='extra__description'>
                  {description}
                </small>
                <div className="more">
                  <a href={more}><TfiMoreAlt/></a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Extra