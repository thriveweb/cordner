import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'
import _format from 'date-fns/format'
import _parseISO from 'date-fns/parseISO'

// import Image from './Image'
import './EventCard.scss'

class EventCard extends React.Component {
  static defaultProps = {
    name: 'thing'
  }

  state = {
    stuff: true
  }

  render() {
    const {
      title,
      slug,
      categories = [],
      className = '',
      date,
      ...props
    } = this.props

    let currentCats = []
    if (categories) {
      currentCats = categories.map(obj => obj.category)
    }
    let pastEvent = false
    if (currentCats.includes('Past Events')) {
      pastEvent = true
    }

    return (
      <Link to={slug} className={`EventCard ${className}`}>
        <div className="EventCard--Content">
          {date && (
            <time
              className="SinglePost--Meta--Date"
              itemProp="dateCreated pubdate datePublished"
              date={date}
            >
              {_format(_parseISO(date), 'MMMM Do, yyyy')}
            </time>
          )}

          <div className="EventCard--Category">
            {categories && categories.map(cat => cat.category).join(', ')}
          </div>

          {title && <h3 className="EventCard--Title">{title}</h3>}
          {!pastEvent && <div className="Button">Register</div>}
          {pastEvent && <div className="Button">Read more</div>}
        </div>
      </Link>
    )
  }
}

export default EventCard
