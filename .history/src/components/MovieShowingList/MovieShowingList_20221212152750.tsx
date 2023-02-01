import React from "react";
import { MovieShowing } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
import "./MovieShowingList.scss";

function MovieShowingList() {
  return (
    <div className="movie-showing-list-content">
      {MovieShowing.map((movie,index) => {
        if (movie.id < 7) {
          return (
            <div key={index} className="movie-showing-item-content">
              <div className="movie-showing-item-content-img">
                <img src={movie.img1} alt="" />
                <div className="btn-outline">
                  <div className="btn">
                    <ButtonOutline nameUrl={movie.nameUrl} age={movie.age} />
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
