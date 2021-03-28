import React from 'react'
import GatsbyImage from 'gatsby-image'
import PropTypes from 'prop-types'
import _get from 'lodash/get'
import { graphql } from 'gatsby'

import './Image.css'

const extractChildImageSharp = (src = '', format) => {
  if (!format) {
    if (typeof src === 'string' && !format) return src
    const childImageSharp = _get(src, 'childImageSharp')
    if (!childImageSharp) return _get(src, 'publicURL')
  }
  if (format === 'fluid' || format === 'fixed')
    return _get(src, `childImageSharp.${format}`)
  return src
}

class Image extends React.Component {
  render() {
    let {
      background,
      backgroundSize = 'cover',
      className = '',
      src,
      srcSet,
      source,
      onClick,
      sizes,
      alt,
      style,
      imgStyle
    } = this.props

    const imageSizes = extractChildImageSharp(src, 'fluid')
    const resolutions = extractChildImageSharp(src, 'fixed')
    const imageSrc = extractChildImageSharp(src || source)

    if (background) {
      let style = {}

      if (typeof imageSrc === 'string') {
        style = { backgroundImage: `url(${imageSrc})`, backgroundSize }
      }

      return (
        <div className={`BackgroundImage absolute ${className}`} style={style}>
          {!style.backgroundImage && (
            <Image
              src={imageSrc}
              alt={alt}
              style={{
                position: 'absolute',
                width: 'auto',
                height: 'auto'
              }}
              imgStyle={{
                objectFit: backgroundSize
              }}
            />
          )}
        </div>
      )
    }

    if (imageSizes || resolutions) {
      return (
        <GatsbyImage
          className={`Image ${className}`}
          fluid={imageSizes}
          fixed={resolutions}
          onClick={onClick}
          alt={alt}
          style={style}
          imgStyle={imgStyle}
        />
      )
    }

    return (
      <img
        className={`Image ${className}`}
        src={imageSrc}
        sizes={sizes || '100vw'}
        onClick={onClick}
        alt={alt}
      />
    )
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image

export const query = graphql`
  fragment FluidImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 2800, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment NoBlurImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 2800, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  fragment TracedImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 2800, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment LargeImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 1800, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment MediumImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 800, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment SmallImage on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 400, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment LargeImageFixed on File {
    publicURL
    childImageSharp {
      fixed(width: 1800, quality: 75) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  fragment MediumImageFixed on File {
    publicURL
    childImageSharp {
      fixed(width: 800, quality: 75) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  fragment SmallImageFixed on File {
    publicURL
    childImageSharp {
      fixed(width: 400, quality: 75) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`
