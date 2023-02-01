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
            <Link to="/muave">mua vé</Link>
            </li>
            <li>
                <div className="menu-phim">Phim</div>
            </li>
        </ul>
    </div>
  )
}

export default MenuResponsive