import React from 'react'
import ButtonOutline from '../../Button/ButtonOutline';
import { MovieShowing } from "../../../data/Data";


import './MovieShowing.scss'

function MovieShowingPage() {
  return (
    <div className="movie-showing">
      {MovieShowing.map((movie,index) => {
          return (
            <div key={index} className="movie-showing-page-content">
              <div className="movie-showing-page-content-img">
                <img src={movie.img2} alt="" />
                <div className="btn-outline">
                  <div className="btn">
                    <ButtonOutline name={movie.name} />
                  </div>
                </div>
              </div>

              <h3>{movie.name}</h3>
              <h3>{movie.name2}</h3>
            </div>
          );
        
      })}
    </div>
  )
}

export default MovieShowingPage