import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ServiceCard.scss'

const ServiceCard = ({
  slug,
  title,
  icon,
  featuredImage,
  className = '',
  parentService,
  ...props
}) => (
  <Link to={slug} className={`ServiceCard relative ${className}`} {...props}>
    {icon && <Image className="ServiceCard--icon" src={icon} alt={title} />}
    <h3 className="ServiceCard--title">{title}</h3>
    <Image background src={featuredImage} alt={title} size="cover" />
  </Link>
)

export default ServiceCard
