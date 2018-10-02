import React from 'react'
import _sortBy from 'lodash/sortBy'

import ServiceCard from '../components/ServiceCard'
import NumberedHeader from '../components/NumberedHeader'
import './ServicesSection.css'

class ServicesSection extends React.Component {
  static defaultProps = {
    services: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))
  }

  render() {
    const { services, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleServices = _sortBy(services, ['date'])
      .reverse()
      // show all unlesss you set a limit.
      .slice(0, limit || services.length)

    return (
      <section className="section--2">
        <div className="grid">
          <div className="single--service red">
            <NumberedHeader number="01" title="Our Services" />
            <h2>How can we help today</h2>
          </div>
          {services.map((service, index) => (
            <ServiceCard key={service.title + index} {...service} />
          ))}
        </div>
        <div className="container">
          {showLoadMore &&
            visibleServices.length < services.length && (
              <div className="taCenter">
                <button className="button" onClick={this.increaseLimit}>
                  {loadMoreTitle}
                </button>
              </div>
            )}
        </div>
      </section>
    )
  }
}

export default ServicesSection
