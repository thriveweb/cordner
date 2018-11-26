import React from 'react'

import TestimonialCard from './TestimonialCard'

import './FeaturedTestimonials.scss'

export default ({ testimonialsFeatured }) => (
  <section className="Section-Featured--Testimonial ">
    <div className="container">
      <div className="FeaturedTestimonials">
        {testimonialsFeatured.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </div>
  </section>
)
