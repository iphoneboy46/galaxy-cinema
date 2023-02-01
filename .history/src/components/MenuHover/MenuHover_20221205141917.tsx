import React from 'react'
import { Link } from 'react-router-dom'

function MenuHover() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuHover