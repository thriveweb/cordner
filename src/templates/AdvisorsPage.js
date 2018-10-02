import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'
import Link from 'gatsby-link'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'

import './AdvisorsPage.scss'

// Export Template for use in CMS preview
export const AdvisorsPageTemplate = ({
  title,
  featuredImage,
  categories,
  section1,
  section2
}) => (
  <main className="Advisors">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section--1 section">
      <div className="container">
        <div className="column">
          <NumberedHeader number="01" title="Who Are We" />
          <h2>{title}</h2>
        </div>

        <div className="column">
          <h3>Versatile financial solutions for everyone</h3>
          <p>
            Established on the Gold Coast in 1981. Cordner Advisory specialises
            in Business Advisory Services, Tax & Compliance, Family Wealth &
            Superannuation (SMSF), and specialist R&D tax incentive/government
            grants. <br /> <br />
            Cordner Advisory service a broad range of businesses and most
            industries including technology companies and startups, childcare,
            medical/health, construction and property. Cordner Advisory delivers
          </p>
        </div>
      </div>
    </section>

    <TeamSection
      title="Browse our services"
      content="Maecenas consectetur mi lacus, sit amet facilisis elit dignissim vitae. Nam dictum ac sapien vitae porta."
      link="our-services"
      buttonText="know more"
    />
  </main>
)

const AdvisorsPage = ({ data: { page } }) => (
  <AdvisorsPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AdvisorsPage

export const pageQuery = graphql`
  query AdvisorsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        categories {
          category
        }
        section1 {
          title
          rightTitle
          rightContent
        }
        section2 {
          title
          subtitle
          button {
            label
            link
          }
        }
      }
    }
  }
`
