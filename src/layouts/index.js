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
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134430735-1"
        />
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-134430735-1');
        `}
        </script>
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({‘gtm.start’:
          new Date().getTime(),event:‘gtm.js’});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!=‘dataLayer’?‘&l=‘+l:‘’;j.async=true;j.src=
          ’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,‘script’,‘dataLayer’,‘GTM-5WHHNSW’);
        `}
        </script>
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
