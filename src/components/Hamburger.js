import React, { Component } from 'react'
import Link from 'gatsby-link'
import NavLink from './NavLink'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right>
        <NavLink to="/our-services/" exact>
          Our Services
        </NavLink>
        <NavLink to="/advisors/" exact>
          Your Advisors
        </NavLink>
        <NavLink to="/resources/" exact>
          Resources
        </NavLink>
        <NavLink to="/blog/" exact>
          Blog
        </NavLink>
        <NavLink to="/contact/" exact>
          Contact
        </NavLink>

        <div className="Client--Login Client-Login--Mobile">
          <img src="/images/uploads/login-icon.svg" alt="login icon" />
          <p>Client login</p>
        </div>
      </Menu>
    )
  }
}

export default Hamburger
