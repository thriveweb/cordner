import React from 'react'

import EventCard from '../components/EventCard'
import './EventsSection.css'

class EventsSection extends React.Component {
  static defaultProps = {
    posts: [],
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
    const { posts, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="EventsSection">
        {title && <h2 className="EventsSection--Title">{title}</h2>}
        {!!visiblePosts.length && (
          <div className="EventsSection--Grid">
            {visiblePosts.map((post, index) => (
              <EventCard key={post.title + index} {...post} />
            ))}
          </div>
        )}
        {showLoadMore &&
          visiblePosts.length < posts.length && (
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

export default EventsSection
