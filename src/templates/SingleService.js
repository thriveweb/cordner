import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Link from 'gatsby-link'

import './SingleService.scss'

export const SingleServiceTemplate = ({ title, featuredImage }) => (
  <Fragment>
    <article className="SingleProject relative">
      <PageHeader
        title={title}
        subtitle={
          excerpt &&
          (excerpt.length >= 150 ? excerpt.slice(0, 150) + '...' : excerpt)
        }
        backgroundImage={featuredImage}
        large
      />
    </article>
  </Fragment>
)

// Export Default SingleService for front-end
const SingleService = ({ data, pathContext }) => {
  const { service } = data
  // get current categories
  const currentCategory = _get(service, 'frontmatter.categories[0].category')
  // filter by category
  const filtedProjects = relatedProjects.edges.filter(
    edge =>
      _get(edge, `node.frontmatter.categories[0].category`) &&
      edge.node.frontmatter.categories[0].category === currentCategory
  )

  return (
    <SingleServiceTemplate
      {...service}
      {...service.frontmatter}
      relatedProjects={related}
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
