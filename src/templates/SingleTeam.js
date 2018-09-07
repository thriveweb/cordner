import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import SingleTeamSection from '../components/SingleTeamSection'

import './SingleTeam.scss'




// Export Template for use in CMS preview
export const SingleTeamTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="SingleTeam">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <div className="NavBackground"></div>

    <SingleTeamSection />

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
