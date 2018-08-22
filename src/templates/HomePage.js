import React from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'

import './HomePage.scss'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <div className="relative">
      <PageHeader large title={title} backgroundImage={featuredImage} />

      <div className="container">
        <Link to="/" className="button">
          <p>Let’s talk business</p>
          <img src="/images/uploads/button_arrow.svg" alt="login icon" />
        </Link>
      </div>
    </div>

    <section className="section--1 section">
      <div className="container">
        <div className="flex-column">
          <div>
            <p className="numbers">300+</p>
            <p className="client">Happy clients</p>
          </div>

          <div>
            <h3>Delivering trustworthy financial solutions since 1981</h3>
          </div>

          <div className="about-us">
            <Link className="flex" to="/">
              <p className="big-body">More about us</p>
              <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
            </Link>
          </div>
        </div>

        <div className="flex-column">
          <div>
            <span className="tagline opacity">01 </span>
            <span className="tagline">About Us</span>
          </div>

          <div>
            <h4>Versatile financial solutions for everyone</h4>
            <p className="opacity">
              Established on the Gold Coast in 1981. Cordner Advisory
              specialises in Business Advisory Services, Tax & Compliance,
              Family Wealth & Superannuation (SMSF), and specialist R&D tax
              incentive/government grants.
            </p>

            <p className="opacity">
              Cordner Advisory service a broad range of businesses and most
              industries including technology companies and startups, childcare,
              medical/health, construction and property. Cordner Advisory
              delivers experienced senior big firm specialist skills with local
              care and attention.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section--2">
      <div className="grid">
        <div className="single--service red">
          <div className="numbered-header">
            <span className="tagline opacity">02 </span>
            <span className="tagline">Our Services</span>
          </div>

          <h2>How can we help you today?</h2>
        </div>
        <Link to="/" className="single--service relative">
          <img
            className="SingleService--icon"
            src="/images/uploads/business-advisory--icon.svg"
            alt="business icon"
          />
          <h3 className="SingleService--title">Business Advisory</h3>
          <Image
            background
            src="/images/uploads/business-advisory.jpg"
            alt="background"
            size="cover"
          />
        </Link>

        <Link to="/" className="single--service relative">
          <img
            className="SingleService--icon"
            src="/images/uploads/tax--icon.svg"
            alt="business icon"
          />
          <h3 className="SingleService--title">Taxation & Compliance</h3>
          <Image
            background
            src="/images/uploads/tax--image.jpg"
            alt="background"
            size="cover"
          />
        </Link>

        <Link to="/" className="single--service relative">
          <img
            className="SingleService--icon"
            src="/images/uploads/rd-advisory--icon.svg"
            alt="business icon"
          />
          <h3 className="SingleService--title">
            R&D, Grants & Taxation Entitlements
          </h3>
          <Image
            background
            src="/images/uploads/rd--image.jpg"
            alt="background"
            size="cover"
          />
        </Link>

        <Link to="/" className="single--service relative">
          <img
            className="SingleService--icon"
            src="/images/uploads/private-advisory--icon.svg"
            alt="business icon"
          />
          <h3 className="SingleService--title">Private Advisory Services</h3>
          <Image
            background
            src="/images/uploads/private-advisory--image.jpg"
            alt="background"
            size="cover"
          />
        </Link>

        <Link to="/" className="single--service relative">
          <img
            className="SingleService--icon"
            src="/images/uploads/self-managed--icon.svg"
            alt="business icon"
          />
          <h3 className="SingleService--title">Self Managed Super Funds</h3>
          <Image
            background
            src="/images/uploads/self-managed--image.jpg"
            alt="background"
            size="cover"
          />
        </Link>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`
