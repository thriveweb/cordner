import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, X, ChevronRight } from 'react-feather'

import Logo from './Logo'
import './Nav.scss'

export default class Nav extends Component {
  state = {
    active: false
    // servicesMenuActive: false,
    // levelTwoMenuActive: false
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })
  // Only close nav if it is open

  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  // toggleServicesMenu = () => {
  //   if (this.state.servicesMenuActive) {
  //     this.setState({
  //       servicesMenuActive: false
  //     })
  //   } else {
  //     this.setState({
  //       servicesMenuActive: true
  //     })
  //   }
  // }
  //
  // toggleLevel2Menu = () => {
  //   if (this.state.levelTwoMenuActive) {
  //     this.setState({
  //       levelTwoMenuActive: false
  //     })
  //   } else {
  //     this.setState({
  //       levelTwoMenuActive: true
  //     })
  //   }
  // }

  handleMobileList = item => {
    this.setState({
      [`navList${item}`]: !this.state[`navList${item}`]
    })

    console.log('click')
  }

  render() {
    const { active, servicesMenuActive, levelTwoMenuActive } = this.state

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
              <span
                className="services"
                onClick={() => this.handleMobileList('Services')}
                exact
              >
                Our Services
              </span>
              <div
                className={`children level-one  ${
                  this.state['navListServices'] ? 'active' : ''
                }`}
              >
                <NavLink to="/services/business-advisory" exact>
                  Business advisory
                </NavLink>
                <NavLink to="/services/taxation-and-compliance" exact>
                  Taxation and compliance
                </NavLink>
                <div
                  className="NavLink hasCildren"
                  onClick={() => this.handleMobileList('RdGrants')}
                >
                  R&D grants and taxation entitlements
                  <ChevronRight />
                  <div
                    className={`children level-two rd-grants-children  ${
                      this.state['navListRdGrants'] ? 'active' : ''
                    }`}
                  >
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
                  <Link
                    to="/services/key-industries"
                    className="key-industries-hover"
                    exact
                  >
                    Key industries
                  </Link>
                  <ChevronRight />
                  <div className="children level-two key-industries-children">
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
              <p>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://cordner.acclipse.com/clientportal/"
                >
                  Client login
                </a>
              </p>
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
