import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ServiceCard.scss'

const ServiceCard = ({
  slug,
  title,
  icon,
  featruedImage,
  className = '',
  ...props
}) => (
  <Link
    to={slug}
    className={`ServiceCard single--service relative ${className}`}
    {...props}
  >
    <img className="SingleService--icon" src={icon} alt={title} />
    <h3 className="SingleService--title">{title}</h3>
    <Image background src={featruedImage} alt={title} size="cover" />
  </Link>
)

export default ServiceCard
