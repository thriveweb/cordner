import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layouts'

import PageHeader from '../components/PageHeader'
import CasestudiesSection from '../components/CasestudiesSection'

// Export Template for use in CMS preview
export const CasestudiesIndexTemplate = ({
  title,
  featuredImage,
  casestudies = [],
  contentType
}) => {
  return (
    <main className="Blog">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageHeader title={title} backgroundImage={featuredImage} />
      {!!casestudies.length && (
        <section className="section">
          <div className="container">
            <CasestudiesSection casestudies={casestudies} />
          </div>
        </section>
      )}
    </main>
  )
}

// Export Default BlogIndex for front-end
const CasestudiesIndex = ({ data, casestudies }) => (
  <Layout>
    <CasestudiesIndexTemplate
      {...data.page}
      {...data.page.fields}
      {...data.page.frontmatter}
      casestudies={data.casestudies.edges.map(testimonial => ({
        ...testimonial.node,
        ...testimonial.node.frontmatter,
        ...testimonial.node.fields
      }))}
    />
  </Layout>
)

export default CasestudiesIndex

export const pageQuery = graphql`
  ## Query for CasestudiesIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CasestudiesIndex($id: String!) {
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

    casestudies: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "casestudies" } } }
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
