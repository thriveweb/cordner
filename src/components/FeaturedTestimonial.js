import React from 'react'

import TestimonialCard from './TestimonialCard'

// import './FeaturedPackages.scss'

export default ({ testimonialsFeatured }) => (
  <section className="Section-Featured--Testimonial section">
    <div className="container">
      <div className="FeaturedPackages">
        {testimonialsFeatured.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </div>
  </section>
)
