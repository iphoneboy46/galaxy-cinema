import React, { useEffect } from 'react'
import Content from '../../Content/Content'
import Slider from '../../slider/Slider'


function Home() {
  useEffect(()=>{
    document.documentElement.scrollTop = document.body.scrollTop = 0
  })
  return (
    <div className="Home">
      <Slider />
      <Content />
    </div>
  )
}

export default Home