import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _findIndex from 'lodash/findIndex'
import _find from 'lodash/find'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Link from 'gatsby-link'
import Content from '../components/Content'
import NumberedHeader from '../components/NumberedHeader'
import ServiceCard from '../components/ServiceCard'
import TeamCard from '../components/TeamCard'
import PostCard from '../components/PostCard'

import './SingleService.scss'

export const SingleServiceTemplate = ({
  id,
  title,
  subtitle,
  featuredImage,
  categories,
  parentService,
  body,
  services,
  featuredServices,
  team,
  posts
}) => {
  let currentCats = []
  let relatedServices = []
  let relatedMembers = []
  let relatedPosts = []
  if (!!categories) {
    currentCats = categories.map(obj => obj.category)
  }
  if (!!services) {
    relatedServices = services.filter(obj =>
      obj.categories.find(cat => currentCats.includes(cat.category))
    )
  }
  if (!!team) {
    relatedMembers = team.filter(member =>
      member.categories.find(cat => currentCats.includes(cat.category))
    )
  }
  if (posts) {
    relatedPosts = posts.filter(post =>
      post.categories.find(cat => currentCats.includes(cat.category))
    )
  }

  return (
    <Fragment>
      <article className="SingleService relative">
        <PageHeader title={title} backgroundImage={featuredImage} />

        <section className="section SingleService--Welcome">
          <div className="container flex">
            <div className="flex-column one-half">
              <NumberedHeader number="" title="What we offer" />
              <h3>{subtitle}</h3>
            </div>
            <div className="flex-column one-half">
              <Content source={body} />
            </div>
          </div>
        </section>

        {parentService && (
          <section className="SubServices">
            <div className="grid">
              <div className="ServiceCard red">
                <NumberedHeader number="" title="We also offer" />
                <h2>We help you with</h2>
              </div>
              {!!relatedServices &&
                relatedServices.map((service, index) => {
                  if (title !== service.title) {
                    return (
                      <ServiceCard key={service.title + index} {...service} />
                    )
                  }
                })}
            </div>
          </section>
        )}
        <section className="section RelatedMembers">
          <div className="container flex">
            <div className="flex-column one-half">
              <NumberedHeader number="" title="We help you" />
              <h3>Who heads up this service</h3>
            </div>
            <div className="flex-column one-half" />
          </div>
          <div className="container flex">
            {!!relatedMembers &&
              relatedMembers.map((member, index) => (
                <div key={index + member.title} className="one-third">
                  {!!member && <TeamCard teamMember={member} />}
                </div>
              ))}
          </div>
        </section>

        {!!relatedPosts && (
          <section className="section relatedPosts">
            <div className="container">
              <NumberedHeader number="" title="Blog" />
              <h3>Related news</h3>
            </div>
            <div className="container PostSection--Grid">
              {relatedPosts.map((post, index) => (
                <PostCard key={post.title + index} {...post} />
              ))}
            </div>
          </section>
        )}

        <section className="SubServices">
          <div className="SubServices--Titlebar red">
            <NumberedHeader number="" title="We also offer" />
            <h3>Other services</h3>
          </div>
          <div className="grid">
            {!!featuredServices &&
              featuredServices.map((service, index) => {
                if (
                  title !== service.title &&
                  parentService !== service.title
                ) {
                  return (
                    <ServiceCard key={service.title + index} {...service} />
                  )
                }
              })}
          </div>
        </section>
      </article>
    </Fragment>
  )
}

// Export Default SingleService for front-end
const SingleService = ({ data, pathContext }) => {
  const { service, services, featuredServices, team, posts } = data

  return (
    <SingleServiceTemplate
      {...service}
      {...service.frontmatter}
      body={service.html}
      services={services.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
      featuredServices={featuredServices.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
      team={team.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
      posts={posts.edges.map(edge => ({
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
            categories {
              category
            }
            parentService
          }
        }
      }
    }
    featuredServices: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "services" } }
        frontmatter: { status: { regex: "/Featured/i" } }
      }
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon {
              ...FluidImage
            }
            featuredImage {
              ...MediumImage
            }
          }
        }
      }
    }
    team: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "team" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
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
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
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
