import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Image from '../components/Image'
import NumberedHeader from '../components/NumberedHeader'
import EventCard from '../components/EventCard'
import './SingleEvent.css'

export const SingleEventTemplate = ({
  title,
  date,
  featuredImage,
  bannerImage,
  body,
  nextPostURL,
  prevPostURL,
  categories = [],
  authors = [],
  posts
}) => {
  let currentCats = []
  let relatedPosts = []
  if (categories) {
    currentCats = categories.map(obj => obj.category)
  }
  if (posts) {
    relatedPosts = posts.filter(post =>
      post.categories.find(cat => currentCats.includes(cat.category))
    )
  }

  return (
    <article
      className="SingleEvent section light"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="featured-image">
        {featuredImage && (
          <Image
            background
            className="SingleEvent--BackgroundImage"
            src={bannerImage}
            alt={title}
          />
        )}

        {prevPostURL && <Link className="arrow-left" to={prevPostURL} />}

        {nextPostURL && <Link className="arrow-right" to={nextPostURL} />}
      </div>

      <div className="container skinny">
        <div className="SingleEvent--Content relative">
          {title && (
            <h1 className="SingleEvent--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SingleEvent--Meta">
            {date && (
              <time
                className="SingleEvent--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={date}
              >
                {_format(date, 'MMMM Do, YYYY')}
              </time>
            )}
            {authors && (
              <Fragment>
                <span>|</span>
                {!!authors &&
                  authors.map((obj, index) => (
                    <span
                      key={index + obj.author}
                      className="SingleEvent--Meta--Category"
                    >
                      by {obj.author}
                    </span>
                  ))}
              </Fragment>
            )}
            {categories && (
              <Fragment>
                <span>|</span>
                {!!categories &&
                  categories.map((cat, index) => (
                    <span
                      key={index + cat.category}
                      className="SingleEvent--Meta--Category"
                    >
                      {cat.category}
                      {/* Add a comma on all but last category */}
                      {index !== categories.length - 1 ? ',' : ''}
                    </span>
                  ))}
              </Fragment>
            )}
          </div>

          <div className="SingleEvent--InnerContent">
            <h3>Interested in this event?</h3>
            <a href="mailto:info@cordner.com.au" class="Button">
              Find out more
            </a>
            <Content source={body} />
          </div>

          <div className="SingleEvent--Pagination">
            {prevPostURL && (
              <Link
                className="SingleEvent--Pagination--Link prev"
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
            {nextPostURL && (
              <Link
                className="SingleEvent--Pagination--Link next"
                to={nextPostURL}
              >
                Next Post
              </Link>
            )}
          </div>
        </div>
      </div>

      {relatedPosts &&
        relatedPosts.length && (
          <section className="section relatedPosts">
            <div className="container">
              <NumberedHeader number="" title="Events" />
              <h3>Related events</h3>
            </div>
            <div className="container EventsSection--Grid">
              {relatedPosts.map((post, index) => (
                <EventCard key={post.title + index} {...post} />
              ))}
            </div>
          </section>
        )}
    </article>
  )
}

// Export Default SingleEvent for front-end
const SingleEvent = ({ data, pathContext }) => {
  const { post, allPosts, posts } = data
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <SingleEventTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
      nextPostURL={_get(thisEdge, 'next.fields.slug')}
      prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      posts={posts.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
    />
  )
}

export default SingleEvent

export const pageQuery = graphql`
  ## Query for SingleEvent data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleEvent($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        template
        subtitle
        date
        categories {
          category
        }
        authors {
          author
        }
        featuredImage {
          ...FluidImage
        }
        bannerImage {
          ...FluidImage
        }
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "events" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "events" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            date
            authors {
              author
            }
            categories {
              category
            }
            featuredImage {
              ...MediumImage
            }
          }
        }
      }
    }
  }
`
