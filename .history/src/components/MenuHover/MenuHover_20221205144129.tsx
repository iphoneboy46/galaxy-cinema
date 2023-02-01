import React from 'react'
import { Link } from 'react-router-dom'
import './MenuHover.scss'

interface MenuHoverprops {
    menus:{}
}

function MenuHover({menus}:MenuHoverprops) {
  return (
    <div className="menu-hover">
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuHover