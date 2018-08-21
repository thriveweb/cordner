import React, { Component } from 'react'
import Link from 'gatsby-link'
import NavLink from './NavLink'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideServicesSubmenu: true,
      hideMobileMenu: true,
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  showSettings(event) {
    event.preventDefault()
  }

  toggleServicesSubmenu() {
    if (this.state.hideServicesSubmenu) {
      this.setState({ hideServicesSubmenu: false })
    } else {
      this.setState({ hideServicesSubmenu: true })
    }
  }

  hideSubMenu() {
    this.setState({ menuOpen: false })
  }

  closeMobileMenu() {}

  render() {
    let state = this.state

    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        right
      >
        <NavLink to="/" onClick={this.hideSubMenu.bind(this)} exact>
          Home
        </NavLink>
        <NavLink to="/our-services/" onClick={this.hideSubMenu.bind(this)}>
          Our Services
        </NavLink>
        <NavLink to="/advisors/" onClick={this.hideSubMenu.bind(this)} exact>
          Your Advisors
        </NavLink>
        <NavLink to="/resources/" onClick={this.hideSubMenu.bind(this)} exact>
          Resources
        </NavLink>
        <NavLink to="/blog/" onClick={this.hideSubMenu.bind(this)} exact>
          Blog
        </NavLink>
        <NavLink to="/contact/" onClick={this.hideSubMenu.bind(this)} exact>
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
