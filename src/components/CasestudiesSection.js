import React from 'react'

import CasestudyCard from '../components/CasestudyCard'
import './PostSection.css'

class CasestudiesSection extends React.Component {
  static defaultProps = {
    casestudies: [],
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
    const { casestudies, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleCasestudies = casestudies.slice(0, limit || casestudies.length)

    return (
      <div className="PostSection">
        {title && <h2 className="PostSection--Title">{title}</h2>}
        {!!visibleCasestudies.length && (
          <div className="PostSection--Grid">
            {visibleCasestudies.map((casestudy, index) => (
              <CasestudyCard key={casestudy.title + index} {...casestudy} />
            ))}
          </div>
        )}
        {showLoadMore &&
          visibleCasestudies.length < casestudies.length && (
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

export default CasestudiesSection
