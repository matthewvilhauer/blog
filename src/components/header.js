import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo_64x64.png'

const Header = ({ siteTitle }) => (
  <header
    className="appHeader"
    style={{
      background: `black`,
      display: `table`,
      flex: `0 0 auto`,
      width: `100%`,
    }}
  >
    <div
      className="tableCell"  
      style={{
        display: `table-cell`,
        width: `100%`,
        textAlign: `center`
      }}
    >
      <span
        className="HeaderLogo"       
        style={{
        display: `inline-block`,
        verticalAlign: `middle`,
        position: `relative`,
      }}>
        <Link
          to="/"
          style={{
            display: `flex`
          }}
        >
          <img
            alt="logo"
            src={Logo}
            style={{
              position: `relative`,
              border: `none`,
              padding: `0px`,
              margin: `0px`,
              height: `40px`
            }}
          />
        </Link>
      </span>
      <span      
        className="HeaderTitle"       
        style={{
        display: `inline-block`,
        verticalAlign: `middle`,
        position: `relative`
      }}>
        <h2 className="appHeaderTitle doses" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
