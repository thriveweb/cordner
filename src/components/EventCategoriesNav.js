import React from 'react'
import Link from 'gatsby-link'

import './PostCategoriesNav.css'

const EventCategoriesNav = ({ categories }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" exact to={`/events/`}>
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        exact
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
  </div>
)

export default EventCategoriesNav
