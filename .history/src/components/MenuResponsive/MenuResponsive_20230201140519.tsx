import React from 'react'
import "./MenuResponsive.scss"
import Search from '../Search/Search'

function MenuResponsive() {
  return (
    <div className="menu-responsive">
        <div className="menu-responsive-search">
        <Search />
        </div>
        <ul>

        </ul>
    </div>
  )
}

export default MenuResponsive