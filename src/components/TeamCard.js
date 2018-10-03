import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './TeamCard.scss'

const TeamCard = ({ teamMember, className = '', ...props }) => (
  <Link
    to={teamMember.slug}
    className={`TeamCard relative flex ${className}`}
    {...props}
  >
    <Image src={teamMember.featuredImage} alt={teamMember.title} />
    <div className="info">
      <h4 className="TeamCard--title">{teamMember.title}</h4>
      <div className="button">
        <span>See profile</span>
        <img src="/images/uploads/button_arrow_2.svg" alt="login icon" />
      </div>
    </div>
  </Link>
)

export default TeamCard
