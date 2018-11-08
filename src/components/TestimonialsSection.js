import React from 'react'

import TestimonialCard from '../components/TestimonialCard'
import './PostSection.css'

class TestimonialsSection extends React.Component {
  static defaultProps = {
    testimonials: [],
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
    const { testimonials, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleTestimonials = testimonials.slice(
      0,
      limit || testimonials.length
    )

    return (
      <div className="PostSection">
        {title && <h2 className="PostSection--Title">{title}</h2>}
        {!!visibleTestimonials.length && (
          <div className="PostSection--Grid">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.title + index}
                {...testimonial}
              />
            ))}
          </div>
        )}
        {showLoadMore &&
          visibleTestimonials.length < testimonials.length && (
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

export default TestimonialsSection
