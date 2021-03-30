import React from 'react'
import { Link } from 'gatsby'

import Bio from '../bio'

import './index.scss'

export const Header = () => {
  return (
    <div className="header">
        <Link to="/about" className="title-link"></Link>
      <Bio />
    </div>
  )
}

export default Header
