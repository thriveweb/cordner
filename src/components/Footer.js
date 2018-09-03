import React from 'react'
import SubscribeForm from '../components/SubscribeForm'
import Link from 'gatsby-link'

import './Footer.scss'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    <div className="container section flex">
      <div className="column taLeft">
        <h3>Contact Us</h3>
        <a href="tel:0755045700">Ph: (07) 5504 5700</a>
        <a href="mailto:info@cordner.com.au">E: info@cordner.com.au</a>
        <p>
          Suite 315E, Level 3, 3 Oracle Boulevard, Broadbeach, QLD, 4218,
          Australia
        </p>
      </div>

      <div className="column socials taCenter">
        <h3>Sign up for our newsletter</h3>
        <SubscribeForm />
        <ul className="socials-list">
          <li>
            <a href="https://twitter.com/CordnerAdvisory">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/CordnerAdvisory/">
              <i class="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/cordner-taylor-accountants-pty-ltd/">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>

      <div className="column taRight">
        <h3>Info</h3>

        <ul>
          <Link to="/our-services/" exact>
            Our Services
          </Link>
          <Link to="/advisors/" exact>
            Your Advisors
          </Link>
          <Link to="/resources/" exact>
            Resources
          </Link>
          <Link to="/blog/" exact>
            Blog
          </Link>
        </ul>
      </div>
    </div>
  </footer>
)
