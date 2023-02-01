import React from "react";
import { MovieShowing } from "../../data/Data";
import "./MovieShowingList.scss";

function MovieShowingList() {
  return (
    <div className="movie-showing-list">
      {MovieShowing.map((movie) => {
        if (movie.id < 7) {
          return (
            <div className="movie-showing-item">
              <div className="movie-showing-item-img">
                <img src={movie.img1} alt="" />
              </div>
              <h3>
                {movie.name}
              </h3>
              <h2>
                {movie.name2}
              </h2>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MovieShowingList;
