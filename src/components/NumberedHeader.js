import React from 'react'

import './NumberedHeader.scss'

export default ({ number, title }) => (
  <div className="numbered-header">
    <span className="tagline opacity">{number}</span>
    <span className="tagline">{title}</span>
  </div>
)
