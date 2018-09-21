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
      {console.log(globalSettings)}
      <section className="section--6-contact relative">
        <ContactSection
          image={banner.image}
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
              <li>
                <a href={socialMediaCard.twitter}>
                  <i className="fab fa-twitter" />
                </a>
              </li>
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
            </ul>
          </div>

          <div className="column taRight">
            <h3>Info</h3>
            <ul>
              <Link to="/our-services/" exact>
                Our Services
              </Link>
              <Link to="/your-advisors/" exact>
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
    </Fragment>
  )
}
