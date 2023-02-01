import React, { useState } from "react";
import ButtonOutline from "../../Button/ButtonOutline";
import { MovieShowing } from "../../../data/Data";

import "./MovieShowing.scss";

function MovieShowingPage() {
  const [active, setActive] = useState<number>(1);
  const [link, setLink] = useState<string>("/phimdangchieu");

  const handleActive = (number: number) => {
    setActive(number);
  };

  return (
    <div>
      <div className="movie-content-choose">
        <div
          onClick={() => {
            handleActive(1);
            setLink("/phimdangchieu");
          }}
          className={
            active === 1 ? "movie-content-show active" : "movie-content-show"
          }
        >
          PHIM ĐANG CHIẾU
          <span></span>
        </div>
        <div
          onClick={() => {
            handleActive(2);
            setLink("/phimsapchieu");
          }}
          className={
            active === 2 ? "movie-content-wait active" : "movie-content-wait"
          }
        >
          PHIM SẮP CHIẾU
          <span></span>
        </div>
      </div>
      <div className="movie-showing">
        
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

export default MovieShowingPage;
