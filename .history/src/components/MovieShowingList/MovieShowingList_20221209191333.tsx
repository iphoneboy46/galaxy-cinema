import React from "react";
import { MovieShowing } from "../../data/Data";
import "./MovieShowingList.scss"

function MovieShowingList() {
  return (
    <div className="movie-showing-list">
      {MovieShowing.map((movie) => {
        if(movie.id =< 6){

        }
        return (
          <div className="movie-showing-item">
            <img src={movie.img1} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default MovieShowingList;
