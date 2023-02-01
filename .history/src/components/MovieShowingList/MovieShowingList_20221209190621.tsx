import React from "react";
import { MovieShowing } from "../../data/Data";

function MovieShowingList() {
  return (
    <div className="movie-showing-list">
      {MovieShowing.map((movie) => {
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
