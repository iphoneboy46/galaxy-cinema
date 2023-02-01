import React from "react";
import { MovieShowing } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
import "./MovieShowingList.scss";

function MovieShowingList() {
  return (
    <div className="movie-showing-list-content">
      {MovieShowing.map((movie) => {
        if (movie.id < 7) {
          return (
            <div className="movie-showing-item-content">
              <div className="movie-showing-item-content-img">
                <img src={movie.img1} alt="" />
                <div className="btn-outline">
                  <div>
                    <ButtonOutline name={movie.name} />
                  </div>
                </div>
              </div>

              <h3>{movie.name}</h3>
              <h3>{movie.name2}</h3>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MovieShowingList;
