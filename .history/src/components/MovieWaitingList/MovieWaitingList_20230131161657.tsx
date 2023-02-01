import React from "react";
import { MovieWaitingData } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
import "./MovieWaitingList.scss";

function MovieWaitingList() {
  return (
    <div className="movie-waiting-list-content">
      {MovieWaitingData.map((movie,index) => {
        if (movie.id < 16) {
          return (
            <div key={index} className="movie-waiting-item-content">
              <div className="movie-waiting-item-content-img">
                <img src={movie.img1} alt="" />
                <div className="btn-outline">
                  <div className="btn">
                    <ButtonOutline name={movie.name} nameUrl={movie.nameUrl} />
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

export default MovieWaitingList;
