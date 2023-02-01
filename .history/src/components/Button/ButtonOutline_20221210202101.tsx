import React from 'react'
import './ButtonOutline.scss'
import {Link} from 'react-router-dom'

interface ButtonOutlineProps {
  name: string
  age?:string
}

function ButtonOutline({name,age}:ButtonOutlineProps) {
  return (
    <div className="ButtonOutline">
      <div>
        {age}
      </div>
      <Link to={`/movie/${name}`} >Mua Vé</Link>
    </div>
  )
}

export default ButtonOutline