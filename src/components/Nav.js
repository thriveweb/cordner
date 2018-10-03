import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, X } from 'react-feather'

import Logo from './Logo'
import './Nav.scss'

export default class Nav extends Component {
  state = {
    active: false
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  render() {
    const { active } = this.state

    const NavLink = ({ className, children, ...props }) => (
      <Link
        {...props}
        className={`NavLink ${className || ''}`}
        onClick={this.handleLinkClick}
      >
        {children}
      </Link>
    )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/our-services/" exact>
              Our Services
            </NavLink>
            <NavLink to="/your-advisors/" exact>
              Your Advisors
            </NavLink>
            <NavLink to="/blog/" exact>
              Blog
            </NavLink>
            <NavLink to="/contact/" exact>
              Contact
            </NavLink>

            <div className="Client--Login">
              <img src="/images/uploads/login-icon.svg" alt="login icon" />
              <p>Client login</p>
            </div>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}
