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
        <strong>Galaxy Cinema</strong> luôn cập nhật nhanh nhất những bộ phim chiếu rạp mới nhất, hấp dẫn nhất sắp ra mắt trong thời gian tới. Các bộ phim sắp chiếu tại Galaxy Cinema luôn đủ mọi thể loại được ưa chuộng nhất bao gồm hành động, kinh dị, phiêu lưu, hoạt hình…phù hợp cho mọi lứa tuổi, đến từ Hollywood và nhiều quốc gia khác, thật dễ dàng để lựa chọn phim hay theo sở thích của bạn tại website Galaxy Cinema. <br /> <br/>
        Mỗi bộ phim mới cập nhật lên website sẽ hiển thị đầy đủ thông tin từ tựa phim, nội dung phim, ngày công chiếu giúp bạn thuận tiện trong việc theo dõi. Ngoài ra, Galaxy Cinema sẽ luôn cập nhật và tạo thuận tiện giúp bạn nhanh tay đặt lấy suất phim mới nhất, phù hợp nhất để thưởng thức. <br/> <br />
        2020 vốn là năm hốt bạc của các studio với hàng loạt bom tấn điện ảnh xếp hàng ra rạp chỉ xê xích vài tuần. Thế nhưng, cơn hồng thủy mang tên đại dịch Covid-19 quét ngang, các siêu phẩm kéo nhau bay sạch, làm đảo lộn lịch chiếu không chỉ năm nay mà vài năm tiếp theo. Chính vì thế, lịch chiếu phim 2021 & 2022 đã được các hãng lên kế hoạch xong xuôi nay phải “gồng gánh” thêm hàng chục thương hiệu phim nặng ký khác. 
        
        Hãy cùng Galaxy Cinema lướt sơ danh sách các phim hay không-thể-không-mua-vé vào năm 2022 nhé! 
        </p>
      </div>
    </div>
  );
}

export default MovieShowingPage;
