import React from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'

import Image from './Image'
import './PostCard.scss'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    <div className="flex">
      <div className="PostCard--Content">
        {title && <h3 className="PostCard--Title">{title}</h3>}
        {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
      </div>
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    </div>
  </Link>
)

export default PostCard
