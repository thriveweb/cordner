import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.scss'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children, data }) => {
  const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
    data.settingsYaml || {}

  const globalSettings = data.globalSettings

  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <link
          href="https://fonts.googleapis.com/css?family=Lora"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />
      </Helmet>

      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
      />

      <Nav />

      <Fragment>{children()}</Fragment>

      <Footer globalSettings={globalSettings} />
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
    globalSettings: settingsYaml {
      banner {
        button {
          label
          link
        }
        title
        subtitle
        excerpt
      }
      phone
      email
      address
      socialMediaCard {
        image
        twitter
        facebook
        linkedin
        instagram
      }
      subscribeFormTitle
    }
  }
`
