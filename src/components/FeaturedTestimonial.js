import React from 'react'

import CasestudyCard from './CasestudyCard'

import './FeaturedCasestudies.scss'

export default ({ casestudiesFeatured }) => (
  <section className="Section-Featured--Casestudy ">
    <div className="container">
      <div className="FeaturedCasestudies">
        {casestudiesFeatured.map((casestudy, index) => (
          <TestimonialCard {...casestudy} key={index} />
        ))}
      </div>
    </div>
  </section>
)
