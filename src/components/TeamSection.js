import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import SingleTeamMember from './SingleTeamMember'

import './TeamSection.scss'

export default ({ title, content, link, buttonText, team }) => (
  <section className="TeamSection dark">
    <div className="grid">
      {team.map((member, index) => (
        <SingleTeamMember
          link={member.slug}
          image={member.featuredImage}
          title={member.title}
          content={member.subtitle}
        />
      ))}

      <div className="services-sneak">
        <div className="container">
          <h2>{title}s</h2>
          <p className="big-body">{content}</p>
          <Link to={link} className="Button">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  </section>
)
