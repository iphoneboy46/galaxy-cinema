import React, { useState } from "react";
import ButtonOutline from "../../Button/ButtonOutline";
import { MovieShowing } from "../../../data/Data";

import "./MovieWaiting.scss";
import { Link } from "react-router-dom";

function MovieWaitingPage() {
  const [active, setActive] = useState<number>(1);
  const [link, setLink] = useState<string>("/phimdangchieu");

  const handleActive = (number: number) => {
    setActive(number);
  };

  return (
    <div className="movie-waiting-container">
      <div className="movie-content-choose">
        <Link to="/phimdangchieu"
          onClick={() => {
            handleActive(1);
            
          }}
          className={
            active === 1 ? "movie-content-show active" : "movie-content-show"
          }
        >
          PHIM ĐANG CHIẾU
          <span></span>
        </Link>
        <Link to="/phimsapchieu"
          onClick={() => {
            handleActive(2);
            
          }}
          className={
            active === 2 ? "movie-content-wait active" : "movie-content-wait"
          }
        >
          PHIM SẮP CHIẾU
          <span></span>
        </Link>
      </div>
      <div className="movie-waiting">
        
        {MovieShowing.map((movie, index) => {
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
    </div>
  );
}

export default MovieWaitingPage;
