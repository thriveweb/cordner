import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'
import Link from 'gatsby-link'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'

import './AdvisorsPage.scss'

// Export Template for use in CMS preview
export const AdvisorsPageTemplate = ({
  title,
  featuredImage,
  categories,
  section1,
  section2,
  team
}) => (
  <main className="Advisors">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section--1 section">
      <div className="container">
        <div className="column">
          <NumberedHeader number="01" title="Who Are We" />
          <h2>{section1.title}</h2>
        </div>
        <div className="column">
          <h3>{section1.rightTitle}</h3>
          {section1.rightContent}
        </div>
      </div>
    </section>

    <TeamSection
      title={section2.title}
      content={section2.subtitle}
      link={section2.button.link}
      buttonText={section2.button.label}
      team={team}
    />
  </main>
)

const AdvisorsPage = ({ data: { page, team } }) => (
  <AdvisorsPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AdvisorsPage

export const pageQuery = graphql`
  query AdvisorsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        categories {
          category
        }
        section1 {
          title
          rightTitle
          rightContent
        }
        section2 {
          title
          subtitle
          button {
            label
            link
          }
        }
      }
    }
    team: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "team" } } }
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
  }
`
