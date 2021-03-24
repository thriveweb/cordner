import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layouts'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './StandardPage.scss'

// Export Template for use in CMS preview
export const StandardPageTemplate = ({ body, title, featuredImage }) => (
  <main className="StandardPage">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const StandardPage = ({ data: { page } }) => (
  <Layout>
    <StandardPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default StandardPage

export const pageQuery = graphql`
  query StandardPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          ...FluidImage
        }
      }
    }
  }
`
