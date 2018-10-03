import React from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import ServiceCard from '../components/ServiceCard'
import PostCard from '../components/PostCard'
import Testimonials from '../components/Testimonials'

import Button from '../components/Button'
import NumberedHeader from '../components/NumberedHeader'

import './HomePage.scss'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  featureLink,
  section1,
  section2,
  section3,
  section4,
  section5,
  testimonials,
  posts,
  services
}) => (
  <main className="Home">
    <div className="relative">
      <PageHeader large title={title} backgroundImage={featuredImage} />

      <div className="container">
        <Link to={featureLink.link} className="button">
          <span>{featureLink.label}</span>
          <img src="/images/uploads/button_arrow.svg" alt="login icon" />
        </Link>
      </div>
    </div>

    <section className="section--1 section">
      <div className="container">
        <div className="flex-column">
          <div>
            <p className="numbers">{section1.number}</p>
            <p className="client">{section1.numberTitle}</p>
          </div>

          <div>
            <h3>{section1.title}</h3>
          </div>

          <div className="about-us">
            <Link className="flex" to={section1.button.link}>
              <p className="big-body">{section1.button.label}</p>
              <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
            </Link>
          </div>
        </div>

        <div className="flex-column">
          <NumberedHeader number="01" title="About Us" />

          <div>
            <h4>{section1.rightTitle}</h4>
            <div className="opacity">{section1.rightContent}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section--2">
      <div className="grid">
        <div className="ServiceCard red">
          <NumberedHeader number="02" title="Our Services" />
          <h2>{section2.title}</h2>
        </div>
        {services.map((service, index) => (
          <ServiceCard key={service.title + index} {...service} />
        ))}
      </div>
    </section>

    <section className="section--3">
      <div className="grid">
        <div className="part-image relative">
          <Image
            background
            src={section3.image}
            alt="background"
            size="cover"
          />
        </div>

        <div className="part-text">
          <NumberedHeader number="03" title="Our Team" />

          <h3>{section3.title}</h3>

          <div className="button--secondary">
            <Link className="flex" to={section3.button.link}>
              <span className="big-body">{section3.button.label}</span>
              <img src="/images/uploads/button_arrow_1.svg" alt="login icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section--4-blog section">
      <div className="container">
        <NumberedHeader number="04" title="Blog" />
        <h2>{section4.title}</h2>
        <Button link={section4.button.link} title={section4.button.label} />
      </div>
      <div className="container PostSection--Grid">
        {posts.map((post, index) => (
          <PostCard key={post.title + index} {...post} />
        ))}
      </div>
    </section>

    <section className="section--5-testimonials section">
      <div className="container">
        <div className="title">
          <NumberedHeader number="05" title="Testimonials" />
          <h3>{section5.title}</h3>
        </div>
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts, services } }) => (
  <HomePageTemplate
    {...page}
    {...page.frontmatter}
    posts={posts.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields
    }))}
    services={services.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields
    }))}
  />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
        featureLink {
          label
          link
        }

        section1 {
          number
          numberTitle
          title
          button {
            label
            link
          }

          rightTitle
          rightContent
        }

        section2 {
          title
        }
        section3 {
          image {
            ...FluidImage
          }
          title
          button {
            label
            link
          }
        }

        section4 {
          title
          button {
            label
            link
          }
        }
        section5 {
          title
        }
        testimonials {
          quote
          author {
            avatar {
              ...SmallImage
            }
            name
            company
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
    services: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "services" } }
        frontmatter: { status: { regex: "/Featured/i" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
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
  }
`
