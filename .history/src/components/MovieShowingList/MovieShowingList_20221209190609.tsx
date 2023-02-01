import React from "react";
import { MovieShowing } from "../../data/Data";

function MovieShowingList() {
  return (
    <div className="movie-showing-list">
      {MovieShowing.map((movie) => {
        return (
          <div className="movie-showing-item">
            <img src="" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default MovieShowingList;
