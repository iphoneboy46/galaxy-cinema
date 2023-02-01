import React from 'react'
import "./MenuResponsive.scss"
import Search from '../Search/Search'
import { Link } from 'react-router-dom'

function MenuResponsive() {
  return (
    <div className="menu-responsive">
        <div className="menu-responsive-search">
            <Search />
        </div>
        <ul>
            <li>
                <Link to="/"></Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuResponsive