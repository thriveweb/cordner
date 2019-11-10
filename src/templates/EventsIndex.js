import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import EventsSection from '../components/EventsSection'
import PostCategoriesNav from '../components/PostCategoriesNav'

// Export Template for use in CMS preview
export const EventsIndexTemplate = ({
  title,
  featuredImage,
  posts = [],
  categories = [],
  contentType,
  bannerImage,
  date
}) => {
  const isCategory = contentType === 'categories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  const filteredPosts = isCategory ? posts.filter(byCategory) : posts

  return (
    <main className="Events">
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
            <EventsSection posts={filteredPosts} />
          </div>
        </section>
      )}
    </main>
  )
}

// Export Default EventsIndex for front-end
const EventsIndex = ({ data }) => (
  <EventsIndexTemplate
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

export default EventsIndex

export const pageQuery = graphql`
  ## Query for EventsIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query EventsIndex($id: String!) {
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
      filter: { fields: { contentType: { eq: "events" } } }
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
            date
            featuredImage {
              ...FluidImage
            }
            bannerImage {
              ...FluidImage
            }
            categories {
              category
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
