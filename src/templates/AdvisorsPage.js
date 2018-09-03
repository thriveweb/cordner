import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Image from '../components/Image'
import Content from '../components/Content.js'
import NumberedHeader from '../components/NumberedHeader'
import Link from 'gatsby-link'
import ContactSection from '../components/ContactSection'

import './AdvisorsPage.scss'

// Export Template for use in CMS preview
export const AdvisorsPageTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="Advisors">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} backgroundImage={featuredImage} />

    <section className="section--1 section">
      <div className="container">
        <div className="column">
          <NumberedHeader number="01" title="Who Are We" />
          <h2>Team</h2>
        </div>

        <div className="column">
          <h3>Versatile financial solutions for everyone</h3>
          <p>
            Established on the Gold Coast in 1981. Cordner Advisory specialises
            in Business Advisory Services, Tax & Compliance, Family Wealth &
            Superannuation (SMSF), and specialist R&D tax incentive/government
            grants. <br /> <br />
            Cordner Advisory service a broad range of businesses and most
            industries including technology companies and startups, childcare,
            medical/health, construction and property. Cordner Advisory delivers
          </p>
        </div>
      </div>
    </section>

    <section className="section--2">
      <div className="grid">
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--1.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak cream">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--2.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak grey">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--3.jpg"
            alt={title}
            size="cover"
          />
          <div className="sneak-peak purple">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--4.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak red">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--5.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak brown">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--6.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak cream">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="single--team relative">
          <Image
            background
            src="/images/uploads/team-member--7.jpg"
            alt={title}
            size="cover"
          />

          <div className="sneak-peak grey">
            <div className="sneak-peak--text">
              <h3>Di Girvin</h3>
              <p>
                Small to Medium sized Business Advisory and R&D Legislation
                Specialist
              </p>
            </div>
          </div>
        </Link>
        <div className="services-sneak ">
          <div className="container">
            <h2>Browse our services</h2>
            <p className="big-body">
              Maecenas consectetur mi lacus, sit amet facilisis elit dignissim
              vitae. Nam dictum ac sapien vitae porta.{' '}
            </p>
            <Link to="our-services" className="Button">
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section--3 relative">
      <ContactSection
        image="/images/uploads/contact--banner.jpg"
        title="We are your financial adviser"
        content="Start a conversation today sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accus"
        link="/contact/"
        buttonText="contact us"
      />
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
