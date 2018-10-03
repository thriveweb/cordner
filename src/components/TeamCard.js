import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './TeamCard.scss'

const TeamCard = ({ teamMember, className = '', ...props }) => (
  <Link
    to={teamMember.slug}
    className={`TeamCard single--service relative flex ${className}`}
    {...props}
  >
    <Image background src={teamMember.featuredImage} alt={teamMember.title} />
    <div className="info">
      <h3 className="SingleService--title">{teamMember.title}</h3>
      <div className="flex">
        <span className="big-body">See profile</span>
        <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
      </div>
    </div>
  </Link>
)

export default TeamCard
