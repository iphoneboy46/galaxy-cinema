import React from "react";
import { MovieShowing } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
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
              <div>
                <ButtonOutline name={movie.name} />
              </div>
              <h3>
                {movie.name}
              </h3>
              <h3>
                {movie.name2}
              </h3>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MovieShowingList;
