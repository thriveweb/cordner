import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'
import Link from 'gatsby-link'

import './Resources.scss'

// Export Template for use in CMS preview
export const ResourcesPageTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="Resources">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section--1 section">
      <div className="container">
        <div className="column">
          <NumberedHeader number="01" title="Who Are We" />
          <h2>Team</h2>
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
  </main>
)

const ResourcesPage = ({ data: { page } }) => (
  <ResourcesPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default ResourcesPage

export const pageQuery = graphql`
  query ResourcesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`
