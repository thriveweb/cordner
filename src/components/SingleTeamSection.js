import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import NumberedHeader from '../components/NumberedHeader'


import './SingleTeamSection.scss'

export default ({ link, image, title, content }) => (
  <section className="SingleTeamSection section relative">
    <div className="SingleTeam--container">
      <div className="column-left">
        <NumberedHeader title="Our Team" />

        <div>
          <h2 >Tony Cordner</h2>
          <p className="big-body">Founder</p>
          <p>
          Tony has over 35 years’ experience in the professional practice of business services, taxation, superannuation and auditing. As a past business owner and operator, Tony understands the needs of a small medium business first hand. <br/><br/>
          Tony now consults with Cordner Advisory in structuring for taxation, asset protection, estate planning strategies and all aspects of SMSF operation and compliance.<br/><br/>
          Tony is committed to continual professional development which helps him remain at the forefront of business advisory services.
        </p>
        </div>

        <div className="socials">
          <ul>
            <li><a href="https://twitter.com/CordnerAdvisory"><i className="fab fa-twitter" /></a></li>
            <li><a href="https://twitter.com/CordnerAdvisory"><i className="fab fa-linkedin-in" /></a></li>
            <li><a href="https://twitter.com/CordnerAdvisory"><i className="fas fa-envelope-open"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="column-right">
        <Image
          src="/images/uploads/tony.jpg"
          alt="team-member"
        />
      </div>
    </div>
  </section>
)
