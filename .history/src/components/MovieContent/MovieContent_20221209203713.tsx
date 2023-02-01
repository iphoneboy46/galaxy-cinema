import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieShowingList from "../MovieShowingList/MovieShowingList";
import MovieWaitingList from "../MovieWaitingList/MovieWaitingList";
import "./MovieContent.scss";

function MovieContent() {
  const [active, setActive] = useState<number>(1);
  const [link,setLink] = useState();

  const handleActive = (number: number) => {
    setActive(number);
  };

  return (
    <div className="movie-content">
      <div className="movie-content-choose">
        <div
          onClick={() => {
            handleActive(1);
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
          }}
          className={
            active === 2 ? "movie-content-wait active" : "movie-content-wait"
          }
        >
          PHIM SẮP CHIẾU
          <span></span>
        </div>
      </div>
      <hr />
      {active === 1 ? <MovieShowingList /> : ""}
      {active === 2 ? <MovieWaitingList /> : ""}
      <div className="movie-btn-more">
        <Link to={link} className="btn-more" >
          Xem thêm <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default MovieContent;
