import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Button } from 'antd'

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `rebeccapurple`
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Button type="primary">
          <Link to="/create-news">Добавить новость</Link>
        </Button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
