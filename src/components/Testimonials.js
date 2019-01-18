import React from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'
import Swiper from 'react-id-swiper/lib/custom'
import 'react-id-swiper/src/styles/css/swiper.css'
import _get from 'lodash/get'

import Image from './Image'
import './Testimonials.css'

export default ({ testimonials = [] }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 50
      }
    },
    spaceBetween: 100,
    autoHeight: false,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: false,
    // remove gatsby Image
    loop: true,
    renderPrevButton: () => (
      <button className="SwiperButton swiper-button-prev">
        <ChevronLeft />
      </button>
    ),
    renderNextButton: () => (
      <button className="SwiperButton swiper-button-next">
        <ChevronRight />
      </button>
    )
  }

  return (
    <div className="Testimonials">
      <Swiper {...params}>
        {testimonials.map((testimonial, index) => (
          <div key={index + testimonial.author.company} className="slide">
            <h3 className="quotation" />
            <p>{testimonial.quote}</p>
            <div className="quote">
              <Image
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
              />
              <div className="from">
                <strong>{testimonial.author.name}</strong> <br />
                {testimonial.author.company}
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  )
}
