import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Link from 'gatsby-link'
import Content from '../components/Content'
import NumberedHeader from '../components/NumberedHeader'
import ServiceCard from '../components/ServiceCard'

import './SingleService.scss'

export const SingleServiceTemplate = ({
  id,
  title,
  subtitle,
  featuredImage,
  categories,
  parentService,
  html,
  services
}) => {
  const relatedServices = services.filter(
    obj => obj.parentService === parentService
  )
  console.log(services)
  return (
    <Fragment>
      <article className="SingleService relative">
        <PageHeader title={title} backgroundImage={featuredImage} />

        <section className="section">
          <div className="container flex">
            <div className="flex-column one-half">
              <NumberedHeader number="01" title="What we offer" />
              <h3>{subtitle}</h3>
            </div>
            <div className="flex-column one-half">
              <Content source={html} />
            </div>
          </div>
        </section>

        {!!parentService && (
          <section className="section--2 subServices">
            <div className="grid">
              <div className="single--service red">
                <NumberedHeader number="02" title="We also offer" />
                <h2>We help you with</h2>
              </div>
              {relatedServices.map((service, index) => {
                if (title !== service.title) {
                  return (
                    <ServiceCard key={service.title + index} {...service} />
                  )
                }
              })}
            </div>
          </section>
        )}

        <section className="section">
          <div className="container flex">
            <div className="flex-column one-half">
              <NumberedHeader number="03" title="We help you" />
              <h3>Who heads up this service</h3>
            </div>
            <div className="flex-column one-half" />
          </div>
          <div className="container flex">
            <div className="one-third">team member</div>
          </div>
        </section>
      </article>
    </Fragment>
  )
}

// Export Default SingleService for front-end
const SingleService = ({ data, pathContext }) => {
  const { service, services } = data

  return (
    <SingleServiceTemplate
      {...service}
      {...service.frontmatter}
      body={service.html}
      services={services.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
    />
  )
}

export default SingleService

export const pageQuery = graphql`
  query SingleService($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        subtitle
        template
        featuredImage {
          ...FluidImage
        }
        categories {
          category
        }
        parentService
      }
    }
    services: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "services" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...MediumImage
            }
            parentService
          }
        }
      }
    }
  }
`
