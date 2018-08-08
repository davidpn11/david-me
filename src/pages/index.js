import React from 'react'
import Link from 'gatsby-link'
import profile from '../images/profile.jpg'
import '../layouts/app.scss'
const IndexPage = () => (
  <div className="wrapper">
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

export default IndexPage
