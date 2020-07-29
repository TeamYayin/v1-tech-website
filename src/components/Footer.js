import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <div className="copyright">
      Powered by{' '}
      <a
        href="https://gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        title="GatsbyJS"
      >
        <i className="icon brands fa-react small"></i>
      </a>{' '}
      and design inspired by{' '}
      <a
        href="https://html5up.net"
        target="_blank"
        rel="noopener noreferrer"
        title="Paradigm Shift"
      >
        HTML5 UP
      </a>{' '}
      <br></br>© 2020{' '}
      <Link to="/" className="small">
        Yayin AI Labs Pvt. Ltd.
      </Link>
    </div>
  )
}
