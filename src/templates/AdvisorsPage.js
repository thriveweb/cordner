import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import './AdvisorsPage.scss'

// Export Template for use in CMS preview
export const AdvisorsPageTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="Advisors">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section">
      <div className="container">test</div>
    </section>
  </main>
)

const AdvisorsPage = ({ data: { page } }) => (
  <AdvisorsPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AdvisorsPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`
