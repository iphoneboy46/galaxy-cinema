import React from "react";
import "./MovieContent.scss";

function MovieContent() {
  return (
    <div className="movie-content">
      <div className="movie-content-choose">
        <div className="movie-content-show" >
          PHIM ĐANG CHIẾU
          <span></span>
        </div>
        <div className="movie-content-wait">PHIM SẮP CHIẾU</div>
        <hr />
      </div>
    </div>
  );
}

export default MovieContent;
