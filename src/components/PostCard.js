import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'
import _format from 'date-fns/format'
import _parseISO from 'date-fns/parseISO'

import Image from './Image'
import './PostCard.scss'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  authors = [],
  date,
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    <div className="flex">
      <div className="PostCard--Content">
        {title && <h3 className="PostCard--Title">{title}</h3>}
        <div className="PostCard--Category">
          {categories && categories.map(cat => cat.category).join(', ')}
        </div>
        {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
      </div>
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />

        <div className="details">
          <Fragment>
            {!!authors &&
              authors.map((obj, index) => (
                <span
                  key={index + obj.author}
                  className="SinglePost--Meta--Category"
                >
                  By {obj.author}
                </span>
              ))}
          </Fragment>

          {date && (
            <time
              className="SinglePost--Meta--Date"
              itemProp="dateCreated pubdate datePublished"
              date={date}
            >
              {_format(_parseISO(date), 'MMMM Do, yyyy')}
            </time>
          )}
        </div>
      </div>
    </div>
  </Link>
)

export default PostCard
