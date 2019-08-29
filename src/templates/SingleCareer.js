import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const SingleCareerTemplate = ({
  title,
  featuredImage,
  body,
  careerDetails,
  nextCareerURL,
  prevCareerURL
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

        <Content source={body} />

        {careerDetails.name && (
          <small>
            <div className="Career--Details">
              <div className="info">
                {careerDetails.name && <strong>{careerDetails.name}</strong>}
                {' - '}
                {careerDetails.company && careerDetails.company}
              </div>
            </div>
          </small>
        )}

        <div className="SinglePost--Pagination">
          {prevCareerURL && (
            <Link
              className="SinglePost--Pagination--Link prev"
              to={prevCareerURL}
            >
              Previous Post
            </Link>
          )}
          {nextCareerURL && (
            <Link
              className="SinglePost--Pagination--Link next"
              to={nextCareerURL}
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
const SingleCareer = ({ data, pathContext }) => {
  const { career, allCareers } = data
  const thisEdge = allCareers.edges.find(edge => edge.node.id === career.id)
  return (
    <SingleCareerTemplate
      {...career}
      {...career.frontmatter}
      body={career.html}
      nextCareerURL={_get(thisEdge, 'next.fields.slug')}
      prevCareerURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default SingleCareer

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleCareer($id: String!) {
    career: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        template
        subtitle
        date
        featuredImage {
          ...FluidImage
        }
        careerDetails {
          name
          company
        }
      }
    }

    allCareers: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "careers" } } }
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
