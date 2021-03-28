import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import Layout from '../layouts'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content'

import './UpdatesPage.scss'

// Export Template for use in CMS preview
export const UpdatesPageTemplate = ({
  body,
  title,
  featuredImage,
  pdfTitle,
  pdfLinks
}) => (
  <main className="UpdatesPage">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section">
      <div className="container skinny">
        <Content source={body} />
        <hr />
        <div className="links-container">
          <h3>{pdfTitle}</h3>

          {pdfLinks &&
            pdfLinks.map((pdf, index) => (
              <a
                key={pdf.title}
                href={pdf.customLink}
                className="Button"
                target="_blank"
              >
                {pdf.title}
              </a>
            ))}
        </div>
      </div>
    </section>
  </main>
)

const UpdatesPage = ({ data: { page } }) => (
  <Layout>
    <UpdatesPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default UpdatesPage

export const pageQuery = graphql`
  query UpdatesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        pdfTitle
        pdfLinks {
          title
          customLink
        }
      }
    }
  }
`
