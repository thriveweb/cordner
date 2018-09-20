import React from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import SingleService from '../components/SingleService'
import Button from '../components/Button'
import ContactSection from '../components/ContactSection'
import NumberedHeader from '../components/NumberedHeader'

import './HomePage.scss'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  featureLink,
  section1,
  section2,
  section3,
  section4,
  section5,
  banner,
  body
}) => (
  <main className="Home">
    <div className="relative">
      <PageHeader large title={title} backgroundImage={featuredImage} />

      <div className="container">
        <Link to={featureLink.link} className="button">
          <span>{featureLink.label}</span>
          <img src="/images/uploads/button_arrow.svg" alt="login icon" />
        </Link>
      </div>
    </div>

    <section className="section--1 section">
      <div className="container">
        <div className="flex-column">
          <div>
            <p className="numbers">{section1.number}</p>
            <p className="client">{section1.numberTitle}</p>
          </div>

          <div>
            <h3>{section1.title}</h3>
          </div>

          <div className="about-us">
            <Link className="flex" to={section1.button.link}>
              <p className="big-body">{section1.button.label}</p>
              <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
            </Link>
          </div>
        </div>

        <div className="flex-column">
          <NumberedHeader number="01" title="About Us" />

          <div>
            <h4>{section1.rightTitle}</h4>
            <div className="opacity">{section1.rightContent}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section--2">
      <div className="grid">
        <div className="single--service red">
          <NumberedHeader number="02" title="Our Services" />
          <h2>{section2.title}</h2>
        </div>

        <SingleService
          icon="/images/uploads/business-advisory--icon.svg"
          title="Business Advisory"
          image="/images/uploads/business-advisory.jpg"
          link=""
        />
        <SingleService
          icon="/images/uploads/tax--icon.svg"
          title="Taxation & Compliance"
          image="/images/uploads/tax--image.jpg"
          link=""
        />
        <SingleService
          icon="/images/uploads/rd-advisory--icon.svg"
          title="R&D, Grants & Taxation Entitlements"
          image="/images/uploads/rd--image.jpg"
          link=""
        />
        <SingleService
          icon="/images/uploads/private-advisory--icon.svg"
          title="Private Advisory Services"
          image="/images/uploads/private-advisory--image.jpg"
          link=""
        />
        <SingleService
          icon="/images/uploads/self-managed--icon.svg"
          title="Self Managed Super Funds"
          image="/images/uploads/self-managed--image.jpg"
          link=""
        />
      </div>
    </section>

    <section className="section--3">
      <div className="grid">
        <div className="part-image relative">
          <Image
            background
            src={section3.image}
            alt="background"
            size="cover"
          />
        </div>

        <div className="part-text">
          <NumberedHeader number="03" title="Our Team" />

          <h3>{section3.title}</h3>

          <div className="button--secondary">
            <Link className="flex" to={section3.button.link}>
              <span className="big-body">{section3.button.label}</span>
              <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section--4-blog section">
      <div className="container">
        <NumberedHeader number="04" title="Blog" />
        <h2>{section4.button.link}</h2>
        <Button link={section4.button.link} title={section4.button.label} />
      </div>
    </section>

    <section className="section--5-testimonials section">
      <div className="container">
        <NumberedHeader number="05" title="Testimonials" />
      </div>
    </section>

    <section className="section--6-contact relative">
      <ContactSection
        image="/images/uploads/contact--banner.jpg"
        title={banner.title}
        content={banner.excerpt}
        link={banner.button.link}
        buttonText={banner.button.label}
      />
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
        featureLink {
          label
          link
        }

        section1 {
          number
          numberTitle
          title
          button {
            label
            link
          }

          rightTitle
          rightContent
        }

        section2 {
          title
        }
        section3 {
          image {
            ...FluidImage
          }
          title
          button {
            label
            link
          }
        }

        section4 {
          title
          button {
            label
            link
          }
        }

        section5 {
          title
          quote {
            excerpt
            name
            company
          }
        }

        banner {
          title
          excerpt
          button {
            label
            link
          }
        }
      }
    }
  }
`
