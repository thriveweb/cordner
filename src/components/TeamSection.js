import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import SingleTeamMember from './SingleTeamMember'

import './TeamSection.scss'

export default ({ title, content, link, buttonText, team }) => (
  <section className="TeamSection">
    <div className="grid">
      {console.log(team)}
      {team.map((member, index) => (
        <SingleTeamMember
          link={member.slug}
          image={member.image}
          title={member.title}
          content={member.subtitle}
          colour="cream"
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
