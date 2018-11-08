import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const SingleTestimonialTemplate = ({
  title,
  date,
  featuredImage,
  body,
  nextTestimonailURL,
  prevTestimonailURL,
  categories = [],
  authors = []
}) => (
  <article
    className="SinglePost section light"
    itemScope
    itemType="http://schema.org/BlogPosting"
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>

    {featuredImage && (
      <Image
        background
        className="SinglePost--BackgroundImage"
        src={featuredImage}
        alt={title}
      />
    )}

    <div className="container skinny">
      <div className="SinglePost--Content relative">
        {title && (
          <h1 className="SinglePost--Title" itemProp="title">
            {title}
          </h1>
        )}
        <div className="SinglePost--Meta">
          {date && (
            <time
              className="SinglePost--Meta--Date"
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
                    className="SinglePost--Meta--Category"
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
                    className="SinglePost--Meta--Category"
                  >
                    {cat.category}

                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
            </Fragment>
          )}
        </div>

        <div className="SinglePost--InnerContent">
          <Content source={body} />
        </div>

        <div className="SinglePost--Pagination">
          {prevTestimonialURL && (
            <Link
              className="SinglePost--Pagination--Link prev"
              to={prevPostURL}
            >
              Previous Post
            </Link>
          )}
          {nextPostURL && (
            <Link
              className="SinglePost--Pagination--Link next"
              to={nextTestimonialURL}
            >
              Next Post
            </Link>
          )}
        </div>
      </div>
    </div>
  </article>
)

// Export Default SinglePost for front-end
const SingleTestimonial = ({ data, pathContext }) => {
  const { testimonial, allTestimonials } = data
  const thisEdge = allTestimonials.edges.find(
    edge => edge.node.id === testimonial.id
  )
  return (
    <SingleTestimonialTemplate
      {...testimonial}
      {...testimonial.frontmatter}
      body={testimonial.html}
      nextPostURL={_get(thisEdge, 'next.fields.slug')}
      prevPostURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default SingleTestimonial

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleTestimonial($id: String!) {
    testimonial: markdownRemark(id: { eq: $id }) {
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
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
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
  }
`
