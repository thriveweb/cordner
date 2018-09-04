import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Link from 'gatsby-link'


import './SingleService.scss'

// Export Template for use in CMS preview
export const SingleServiceTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="SingleService">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} backgroundImage={featuredImage} />
  </main>
)

const SingleService = ({ data: { page } }) => (
  <SingleServiceTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default SingleService

export const pageQuery = graphql`
  query SingleService($id: String!) {
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
