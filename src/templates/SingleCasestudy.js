import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import Link from 'gatsby-link'

import Content from '../components/Content'
import Image from '../components/Image'
import './SinglePost.css'

export const SingleCasestudyTemplate = ({
  title,
  featuredImage,
  body,
  casestudyDetails,
  nextCasestudyURL,
  prevCasestudyURL
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

        {casestudyDetails.name && (
          <small>
            <div className="Casestudy--Details">
              <div className="info">
                {casestudyDetails.name && (
                  <strong>{casestudyDetails.name}</strong>
                )}
                {' - '}
                {casestudyDetails.company && casestudyDetails.company}
              </div>
            </div>
          </small>
        )}

        <div className="SinglePost--Pagination">
          {prevCasestudyURL && (
            <Link
              className="SinglePost--Pagination--Link prev"
              to={prevCasestudyURL}
            >
              Previous Post
            </Link>
          )}
          {nextCasestudyURL && (
            <Link
              className="SinglePost--Pagination--Link next"
              to={nextCasestudyURL}
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
const SingleCasestudy = ({ data, pathContext }) => {
  const { casestudy, allCasestudies } = data
  const thisEdge = allCasestudies.edges.find(
    edge => edge.node.id === casestudy.id
  )
  return (
    <SingleCasestudyTemplate
      {...casestudy}
      {...casestudy.frontmatter}
      body={casestudy.html}
      nextCasestudyURL={_get(thisEdge, 'next.fields.slug')}
      prevCasestudyURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default SingleCasestudy

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleCasestudy($id: String!) {
    casestudy: markdownRemark(id: { eq: $id }) {
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
        casestudyDetails {
          name
          company
        }
      }
    }

    allCasestudies: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "casestudies" } } }
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
