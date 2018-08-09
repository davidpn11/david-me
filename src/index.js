import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import prof from '../images/profile.jpg'
import Header from '../components/header'
import './index.css'
import './app.scss'
import profile from '../images/profile.jpg'

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <header className="header">
      <img className="profile" src={profile} />
    </header>
    <div className="content">
      <span className="title">David Nascimento</span>
      <span className="subtitle">Front End Developer</span>
      <span className="text-body">
        Currently working full time at
        <a className="take-link" href="http://take.net/" target="blank">
          Take
        </a>
      </span>
      <div className="social">
        <span className="social-icon facebook">
          <a href="https://www.facebook.com/davidpn.11" target="blank">
            <i className="fa fa-2x fa-facebook" />
          </a>
        </span>
        <span className="social-icon github">
          <a href="https://github.com/davidpn11" target="blank">
            <i className="fa fa-2x fa-github" />
          </a>
        </span>
        <span className="social-icon linkedin">
          <a href="https://www.linkedin.com/in/davidpn11/" target="blank">
            <i className="fa fa-2x fa-linkedin" />
          </a>
        </span>
        <span className="social-icon twitter">
          <a href="https://twitter.com/11Davidpn" target="blank">
            <i className="fa fa-2x fa-twitter" />
          </a>
        </span>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
