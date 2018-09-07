import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'

import './SingleTeam.scss'

// Export Template for use in CMS preview
export const SingleTeamTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="SingleTeam">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <div className="NavBackground"></div>

    <section className="SingleTeam section">
      <div className="SingleTeam--container">
        <div className="column-left">
          <NumberedHeader title="Our Team" />

          <div>
            <h2 >Tony Cordner</h2>
            <p className="big-body">Founder</p>
            <p>
            Tony has over 35 years’ experience in the professional practice of business services, taxation, superannuation and auditing. As a past business owner and operator, Tony understands the needs of a small medium business first hand. <br/><br/>
            Tony now consults with Cordner Advisory in structuring for taxation, asset protection, estate planning strategies and all aspects of SMSF operation and compliance.<br/><br/>
            Tony is committed to continual professional development which helps him remain at the forefront of business advisory services.
          </p>
          </div>

          <div className="socials">
            <ul>
              <li><a href="https://twitter.com/CordnerAdvisory"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://twitter.com/CordnerAdvisory"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="https://twitter.com/CordnerAdvisory"><i className="fas fa-envelope-open"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="column-right relative">
          <Image
            background
            src="/images/uploads/tony.jpg"
            alt="team-member"
            size="cover"
          />
        </div>
      </div>

    </section>
  </main>
)

const SingleTeam = ({ data: { page } }) => (
  <SingleTeamTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default SingleTeam

export const pageQuery = graphql`
  query SingleTeam($id: String!) {
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
