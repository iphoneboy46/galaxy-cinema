import React from "react";
import { MovieShowingData } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
import "./MovieShowingList2.scss";

function MovieShowingList2() {
  return (
    <div className="movie-showing-list-content">
       <h3>PHIM ĐANG CHIẾU

Xem thêm tại: https://www.galaxycine.vn/dat-ve/avatar-the-way-of-water</h3>
      <span></span>
      {MovieShowingData.map((movie,index) => {
        if (movie.id < 4) {
          return (
            <div key={index} className="movie-showing-item-content">
              <div className="movie-showing-item-content-img">
                <img src={movie.img1} alt="" />
                <div className="btn-outline">
                  <div className="btn">
                    <ButtonOutline name={movie.name} nameUrl={movie.nameUrl} age={movie.age} />
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

export default MovieShowingList2;
