import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'

import './ContactSection.scss'

export default ({ title, subtitle, content, link, buttonText }) => (
  <div className="ContactSection container">
    <Image
      background
      src="/images/uploads/call-banner.jpg"
      alt={title}
      size="cover"
    />
    <div className="container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <Link to={link} className="Button">
        {buttonText}
      </Link>
    </div>
  </div>
)
