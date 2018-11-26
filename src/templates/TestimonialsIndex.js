import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import TestimonialsSection from '../components/TestimonialsSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import FeaturedTestimonial from '../components/FeaturedTestimonial'

// Export Template for use in CMS preview
export const TestimonialsIndexTemplate = ({
  title,
  featuredImage,
  testimonials = [],
  testimonialsFeatured = [],
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

      <div className="section">
        <div className="container">
          <FeaturedTestimonial testimonialsFeatured={testimonialsFeatured} />
        </div>
      </div>

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
const TestimonialsIndex = ({ data, testimonials, testimonialsFeatured }) => (
  <TestimonialsIndexTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
    testimonials={data.testimonials.edges.map(testimonial => ({
      ...testimonial.node,
      ...testimonial.node.frontmatter,
      ...testimonial.node.fields
    }))}
    testimonialsFeatured={data.testimonialsFeatured.edges.map(
      testimonialsFeatured => ({
        ...testimonialsFeatured.node,
        ...testimonialsFeatured.node.frontmatter,
        ...testimonialsFeatured.node.fields
      })
    )}
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
    testimonialsFeatured: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "testimonials" } }
        frontmatter: { status: { regex: "/Featured/i" } }
        # limit: 1
      }
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
