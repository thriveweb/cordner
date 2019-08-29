import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import CareersSection from '../components/CareersSection'

// Export Template for use in CMS preview
export const CareersIndexTemplate = ({
  title,
  featuredImage,
  careers = [],
  contentType
}) => {
  return (
    <main className="Blog">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader title={title} backgroundImage={featuredImage} />
      {!!careers.length && (
        <section className="section">
          <div className="container">
            <CareersSection careers={careers} />
          </div>
        </section>
      )}
    </main>
  )
}

// Export Default BlogIndex for front-end
const CareersIndex = ({ data, careers }) => (
  <CareersIndexTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
    careers={data.careers.edges.map(testimonial => ({
      ...testimonial.node,
      ...testimonial.node.frontmatter,
      ...testimonial.node.fields
    }))}
  />
)

export default CareersIndex

export const pageQuery = graphql`
  ## Query for CareersIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CareersIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
      }
    }

    careers: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "careers" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...SmallImage
            }
          }
        }
      }
    }
  }
`
