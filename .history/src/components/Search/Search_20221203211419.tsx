import React from 'react'
import './Search.scss'

function Search() {
  return (
    <div className="search">
        <input placeholder="Tìm tên phim, diễn viên..." className="search__input"  />
        <i className="fa-solid fa-magnifying-glass search__icon"></i>
    </div>
  )
}

export default Search