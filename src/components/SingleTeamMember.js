import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'

import './TeamSection.scss'

export default ({ link, image, title, content }) => (
  <Link to={link} className="single--team relative">
    <Image background src={image} size="cover" />

    <div className="sneak-peak color">
      <div className="sneak-peak--text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  </Link>
)
