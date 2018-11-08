import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import TestimonialsSection from '../components/TestimonialsSection'
import PostCategoriesNav from '../components/PostCategoriesNav'

// Export Template for use in CMS preview
export const TestimonialsIndexTemplate = ({
  title,
  featuredImage,
  testimonials = [],
  contentType
}) => {
  const isCategory = contentType === 'categories'
  const byCategory = testimonial =>
    testimonial.categories &&
    testimonial.categories.filter(cat => cat.category === title).length
  const filteredTestimonials = isCategory
    ? testimonials.filter(byCategory)
    : testimonials

  return (
    <main className="Blog">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <PageHeader title={title} backgroundImage={featuredImage} />

      {!!testimonials.length && (
        <section className="section">
          <div className="container">
            <TestimonialsSection testimonials={filteredTestimonials} />
          </div>
        </section>
      )}
    </main>
  )
}

// Export Default BlogIndex for front-end
const TestimonialsIndex = ({ data }) => (
  <TestimonialsIndexTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
    testimonials={data.testimonials.edges.map(testimonial => ({
      ...testimonial.node,
      ...testimonial.node.frontmatter,
      ...testimonial.node.fields
    }))}
  />
)

export default TestimonialsIndex

export const pageQuery = graphql`
  ## Query for TestimonialsIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query TestimonialsIndex($id: String!) {
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

    testimonials: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "testimonials" } } }
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
            categories {
              category
            }
            featuredImage {
              ...SmallImage
            }
          }
        }
      }
    }
  }
`
