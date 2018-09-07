import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'
import Link from 'gatsby-link'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'

import './SingleTeam.scss'

// Export Template for use in CMS preview
export const SingleTeamTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="SingleTeam">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <div className="NavBackground"></div>

    <section className="SingleTeam section">
      <div className="SingleTeam section">
        test
      </div>
    </section>
  </main>
)

const SingleTeam = ({ data: { page } }) => (
  <SingleTeamTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default SingleTeam

export const pageQuery = graphql`
  query SingleTeam($id: String!) {
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
