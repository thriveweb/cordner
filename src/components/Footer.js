import React, { Fragment } from 'react'
import SubscribeForm from '../components/SubscribeForm'
import Link from 'gatsby-link'

import ContactSection from '../components/ContactSection'
import './Footer.scss'

export default ({ globalSettings = {}, ...props }) => {
  const {
    banner,
    phone,
    email,
    address,
    subscribeFormTitle,
    socialMediaCard
  } = globalSettings
  return (
    <Fragment>
      <section className="section--6-contact relative">
        <ContactSection
          title={banner.title}
          subtitle={banner.subtitle}
          content={banner.excerpt}
          link={banner.button.link}
          buttonText={banner.button.label}
        />
      </section>

      <footer className="Footer">
        <div className="container section flex">
          <div className="column taLeft">
            <h3>Contact Us</h3>
            <a href={`tel:${phone}`}>Ph: {phone}</a>
            <a href={`mailto:${email}`}>E: {email}</a>
            <p>{address}</p>
          </div>

          <div className="column socials taCenter">
            <h3>{subscribeFormTitle}</h3>
            <SubscribeForm />
            <ul className="socials-list">
              {/* <li>
                <a href={socialMediaCard.twitter}>
                  <i className="fab fa-twitter" />
                </a>
              </li> */}
              <li>
                <a href={socialMediaCard.facebook}>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href={socialMediaCard.linkedin}>
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href={socialMediaCard.instagram}>
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <small>
              {' '}
              I asked the other prefects and staff to see if they know how.
              No-one has replied yet. Mr Q changed the server structure and I
              can't find the list of commnands.
              <a
                target="_blank"
                rel="nofollow"
                href="https://thriveweb.com.au"
                className="thrive"
              >
                Site designed and developed by Thrive.
              </a>
            </small>
          </div>

          <div className="column taRight">
            <h3>Info</h3>
            <ul>
              <a
                target="_blank"
                rel="nofollow"
                href="https://cordner.acclipse.com/clientportal/"
              >
                Client login
              </a>
              <Link to="/contact/" exact>
                Contact
              </Link>
              <Link to="/terms/" exact>
                Terms & Conditions
              </Link>
              <Link to="/disclaimer/" exact>
                Disclaimer
              </Link>
              <Link to="/privacy/" exact>
                Privacy
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
