import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'

// Export Template for use in CMS preview
export const TestimonialsIndexTemplate = ({
  title,
  featuredImage,
  posts = [],
  categories = [],
  contentType
}) => {
  const isCategory = contentType === 'categories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  const filteredPosts = isCategory ? posts.filter(byCategory) : posts

  return (
    <main className="Blog">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <PageHeader title={title} backgroundImage={featuredImage} />
      {/*
      {!!categories.length && (
        <section className="section thin">
          <div className="container">
            <PostCategoriesNav categories={categories} />
          </div>
        </section>
      )} */}

      {!!posts.length && (
        <section className="section">
          <div className="container">
            <PostSection posts={filteredPosts} />
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
    posts={data.posts.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
    categories={data.categories.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
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

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
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
    categories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "categories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
