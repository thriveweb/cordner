import React from 'react'

import './Footer.scss'

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className="Footer">
    <div className="container section flex">
      <div className="column taLeft">
        <h3>Contact Us</h3>
      </div>

      <div className="column taCenter">
        <h3>Sign up for our newsletter</h3>
      </div>

      <div className="column taRight">
        <h3>Info></h3>
      </div>
    </div>
  </footer>
)
