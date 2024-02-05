import React from 'react'
import './extra.css'
import extra1 from '../../assets/extra1.JPG'
import amaaris from '../../assets/amaaris.png'
import club from '../../assets/club.jpeg'
import {TfiMoreAlt} from 'react-icons/tfi'

// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: amaaris,
    activity: 'Amaaris',
    description: 'NGO I formed with my friends. View More Below.',
    more: 'https://www.instagram.com/amaarisfoundation/'
  },
  {
    image: extra1,
    activity: 'Photography',
    description: 'A big part of my creative activites. View More Below.',
    more: 'https://www.instagram.com/kraitsura/'
  },
  {
    image: club,
    activity: 'Coding Club',
    description: 'Small Leet Code community to solve problems together.',
    more: ''
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