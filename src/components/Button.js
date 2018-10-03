import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'

export default ({ link, title }) => (
  <div className="button--secondary">
    <Link className="flex" to={link}>
      <p className="big-body">{title}</p>
      <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
    </Link>
  </div>
)
