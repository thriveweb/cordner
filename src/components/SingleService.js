import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'

import './SingleService.scss'

export default ({ link, icon, title, image }) => (
  <Link to={link} className="single--service relative">
    <img className="SingleService--icon" src={icon} alt={title} />
    <h3 className="SingleService--title">{title}</h3>
    <Image background src={image} alt={title} size="cover" />
  </Link>
)
