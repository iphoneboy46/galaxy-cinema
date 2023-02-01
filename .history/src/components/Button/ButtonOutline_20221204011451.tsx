import React from 'react'
import './ButtonOutline.scss'
import {Link} from 'react-router-dom'

interface ButtonOutlineProps {
  name: string
}

function ButtonOutline({name}) {
  return (
    <div className="ButtonOutline">
      <Link to="/movie/name">Mua Vé</Link>
    </div>
  )
}

export default ButtonOutline