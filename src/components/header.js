import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

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
        verticalAlign: `top`,
        width: `100%`,
        padding: `.25rem`,
        textAlign: `center`
      }}
    >
      <div
        className="HeaderLogo"       
        style={{
        display: `inline-block`,
        verticalAlign: `-webkit-baseline-middle`,
        position: `relative`,
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
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
              height: `50px`

            }}
          />
        </Link>
      </div>
      <div      
        className="HeaderTitle"       
        style={{
        display: `inline-block`,
        verticalAlign: `text-top`,
        position: `relative`
      }}>
        <h2 className="Doses" style={{ margin: 0 }}>
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
      </div>
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
