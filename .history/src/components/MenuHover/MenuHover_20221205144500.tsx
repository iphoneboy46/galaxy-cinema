import React from 'react'
import { Link } from 'react-router-dom'
import './MenuHover.scss'

interface MenuHoverprops {
    menus:{
        name: string
        to: string
    }[]
}

function MenuHover({menus}:MenuHoverprops) {
  return (
    <div className="menu-hover">
        <ul>
            {
                menus.map((menu,index)=>{
                    return (
                        <li>
                           <Link to={menu.to}>{menu.name}</Link> 
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default MenuHover