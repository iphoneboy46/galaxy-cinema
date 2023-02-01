import React, { useState } from "react";
import ButtonOutline from "../../Button/ButtonOutline";
import { MovieWaiting } from "../../../data/Data";

import "./MovieWaiting.scss";
import { Link } from "react-router-dom";

function MovieWaitingPage() {
  return (
    <div className="movie-waiting-container">
      <div className="movie-content-choose">
        <Link to="/phimdangchieu" className="movie-content-show">
          PHIM ĐANG CHIẾU
          <span></span>
        </Link>
        <Link to="/phimsapchieu" className="movie-content-wait active">
          PHIM SẮP CHIẾU
          <span></span>
        </Link>
      </div>
      <div className="movie-waiting">
        {MovieWaiting.map((movie, index) => {
          return (
            <div key={index} className="movie-waiting-page-content">
              <div className="movie-waiting-page-content-img">
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
    </div>
  );
}

export default MovieWaitingPage;
