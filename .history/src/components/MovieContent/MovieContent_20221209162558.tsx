import React, { useState } from "react";
import MovieShowingList from "../MovieShowingList/MovieShowingList";
import MovieWaitingList from "../MovieWaitingList/MovieWaitingList";
import "./MovieContent.scss";

function MovieContent() {

  conts [active, setActive] = useState<number>(1)


  return (
    <div className="movie-content">
      <div className="movie-content-choose">
        <div className="movie-content-show" >
          PHIM ĐANG CHIẾU
          <span></span>
        </div>
        <div className="movie-content-wait">PHIM SẮP CHIẾU
        <span></span>
        </div>
      </div>
      <hr />
      <MovieShowingList />
      <MovieWaitingList />
    </div>
  );
}

export default MovieContent;
