import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Grid } from 'react-feather'

import Image from '../components/Image'
import NumberedHeader from '../components/NumberedHeader'
import PostCard from '../components/PostCard'
import Content from '../components/Content'

import './SingleTeam.scss'

export const SingleTeamTemplate = ({
  title,
  subtitle,
  html,
  mainImage,
  categories,
  position,
  twitter,
  linkedin,
  email,
  posts
}) => {
  const currentCats = categories.map(obj => obj.category)
  const relatedPosts = posts.filter(post =>
    post.categories.find(cat => currentCats.includes(cat.category))
  )
  return (
    <main className="SingleTeam">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="NavBackground" />

      <section className="SingleTeamSection section relative">
        <div className="SingleTeam--container">
          <div className="column-left">
            <NumberedHeader title="Our Team" />

            <h2>{title}</h2>
            <p className="big-body">{position}</p>
            <Content source={html} />

            <div className="socials">
              <ul>
                {twitter && (
                  <li>
                    <a target="_blank" rel="nofollow" href={twitter}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <a target="_blank" rel="nofollow" href={linkedin}>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`}>
                      <i className="fas fa-envelope-open" />
                    </a>
                  </li>
                )}
              </ul>
              <Link className="backlink" to="/your-advisors/">
                <Grid /> Back to all advisors
              </Link>
            </div>
          </div>

          <div className="column-right">
            <Image src={mainImage} alt={title} />
          </div>
        </div>
      </section>

      {!!relatedPosts.length && (
        <section className="section relatedPosts">
          <div className="container">
            <NumberedHeader title="Blog" />
            <h3>Related news</h3>
          </div>
          <div className="container PostSection--Grid">
            {relatedPosts.map((post, index) => (
              <PostCard key={post.title + index} {...post} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

const SingleTeam = ({ data: { teamMember, posts } }) => (
  <SingleTeamTemplate
    {...teamMember}
    {...teamMember.frontmatter}
    body={teamMember.html}
    posts={posts.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields
    }))}
  />
)

export default SingleTeam

export const pageQuery = graphql`
  query SingleTeam($id: String!) {
    teamMember: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        subtitle
        categories {
          category
        }
        mainImage {
          ...FluidImage
        }
        position
        twitter
        linkedin
        email
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
