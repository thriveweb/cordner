import React from 'react'

import './NumberedHeader.scss'

export default ({ title }) => (
  <div className="numbered-header">
    <span className="tagline">{title}</span>
  </div>
)
