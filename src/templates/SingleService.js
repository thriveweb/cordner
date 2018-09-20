import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Link from 'gatsby-link'

import './SingleService.scss'

export const SingleServiceTemplate = ({ title, featuredImage }) => (
  <Fragment>
    <article className="SingleProject relative">
      <PageHeader title={title} backgroundImage={featuredImage} large />
    </article>
  </Fragment>
)

// Export Default SingleService for front-end
const SingleService = ({ data, pathContext }) => {
  const { service } = data

  return (
    <SingleServiceTemplate
      {...service}
      {...service.frontmatter}
      body={service.html}
    />
  )
}

export default SingleService

export const pageQuery = graphql`
  query SingleService($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        categories {
          category
        }
      }
    }
  }
`
