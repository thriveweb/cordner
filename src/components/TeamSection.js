import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import SingleTeamMember from './SingleTeamMember'

import './TeamSection.scss'

export default ({ title, content, link, buttonText }) => (
  <section className="TeamSection">
    <div className="grid">
      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--1.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
        colour="cream"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--2.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--3.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--4.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--5.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--6.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

      <SingleTeamMember
        link=""
        image="/images/uploads/team-member--7.jpg"
        title="Di Girvin"
        content="Small to Medium sized Business Advisory and R&D Legislation
        Specialist"
      />

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
