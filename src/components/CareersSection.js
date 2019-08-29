import React from 'react'

import CareersCard from '../components/CareersCard'
import './PostSection.css'

class CareersSection extends React.Component {
  static defaultProps = {
    careers: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { careers, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleCareers = careers.slice(0, limit || careers.length)

    return (
      <div className="PostSection">
        {title && <h2 className="PostSection--Title">{title}</h2>}
        {!!visibleCareers.length && (
          <div className="PostSection--Grid">
            {visibleCareers.map((career, index) => (
              <CareersCard key={career.title + index} {...career} />
            ))}
          </div>
        )}
        {showLoadMore &&
          visibleCareers.length < careers.length && (
            <div className="taCenter">
              <br />
              <button className="Button" onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          )}
      </div>
    )
  }
}

export default CareersSection
