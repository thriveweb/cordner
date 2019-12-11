import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'
import _format from 'date-fns/format'

import Image from './Image'
import './EventCard.scss'

const EventCard = ({
  title,
  slug,
  categories = [],
  className = '',
  date,
  ...props
}) => (
  <Link to={slug} className={`EventCard ${className}`}>
    <div className="EventCard--Content">
      {date && (
        <time
          className="SinglePost--Meta--Date"
          itemProp="dateCreated pubdate datePublished"
          date={date}
        >
          {_format(date, 'MMMM Do, YYYY')}
        </time>
      )}

      <div className="EventCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>

      {title && <h3 className="EventCard--Title">{title}</h3>}

      <div className="Button">Register</div>
    </div>
  </Link>
)

export default EventCard
