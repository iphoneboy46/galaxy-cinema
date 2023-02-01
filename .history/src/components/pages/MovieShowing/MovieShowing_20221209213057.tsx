import React, { useState } from "react";
import ButtonOutline from "../../Button/ButtonOutline";
import { MovieShowing } from "../../../data/Data";

import "./MovieShowing.scss";
import { Link } from "react-router-dom";

function MovieShowingPage() {
  return (
    <div className="movie-showing-container">
      <div className="movie-content-choose">
        <Link to="/phimdangchieu" className="movie-content-show active">
          PHIM ĐANG CHIẾU
          <span></span>
        </Link>
        <Link to="/phimsapchieu" className="movie-content-wait">
          PHIM SẮP CHIẾU
          <span></span>
        </Link>
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
      <div className="movie-showing-description">
        <h1>GALAXY CINEMA</h1>
        <p>
        <strong>Galaxy Cinema</strong> luôn cập nhật nhanh nhất những bộ phim chiếu rạp mới nhất, hấp dẫn nhất sắp ra mắt trong thời gian tới. Các bộ phim sắp chiếu tại Galaxy Cinema luôn đủ mọi thể loại được ưa chuộng nhất bao gồm hành động, kinh dị, phiêu lưu, hoạt hình…phù hợp cho mọi lứa tuổi, đến từ Hollywood và nhiều quốc gia khác, thật dễ dàng để lựa chọn phim hay theo sở thích của bạn tại website Galaxy Cinema. Xem thêm tại: https://www.galaxycine.vn/phim-sap-chieu/

Xem thêm tại: https://www.galaxycine.vn/phim-sap-chieu/
        </p>
      </div>
    </div>
  );
}

export default MovieShowingPage;
