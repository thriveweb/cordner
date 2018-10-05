import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, X, ChevronRight } from 'react-feather'

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
            <div className="NavLink">
              <Link to="/our-services/" exact>
                Our Services
              </Link>
              <div className="children level-one">
                <NavLink to="/services/business-advisory" exact>
                  Business advisory
                </NavLink>
                <NavLink to="/services/taxation-and-compliance" exact>
                  Taxation and compliance
                </NavLink>
                <div className="NavLink hasCildren">
                  <Link
                    to="/services/r-d-grants-and-taxation-entitlements"
                    exact
                  >
                    R&D grants and taxation entitlements
                  </Link>
                  <ChevronRight />
                  <div className="children level-two">
                    <NavLink
                      to="/services/research-and-development-r-d-entitlements"
                      exact
                    >
                      Research and development R&D entitlements
                    </NavLink>
                    <NavLink
                      to="/services/export-marketing-development-grants-emdg"
                      exact
                    >
                      Export marketing development grants (emdg)
                    </NavLink>

                    <NavLink to="/services/government-innovation-grants" exact>
                      Government innovation grants
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/services/private-advisory-services" exact>
                  Private advisory services
                </NavLink>
                <NavLink to="/services/self-managed-super-funds" exact>
                  Self managed super funds
                </NavLink>

                <div className="NavLink hasCildren">
                  <Link to="/services/key-industries" exact>
                    Key industries
                  </Link>
                  <ChevronRight />
                  <div className="children level-two">
                    <NavLink to="/services/childcare-centre-services" exact>
                      Childcare centre services
                    </NavLink>
                    <NavLink to="/services/technology-and-startups" exact>
                      Technology and startups
                    </NavLink>
                    <NavLink
                      to="/services/property-construction-and-building-services"
                      exact
                    >
                      Property construction and building services
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
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
