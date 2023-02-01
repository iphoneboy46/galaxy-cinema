import React from "react";
import { Link } from "react-router-dom";
import "./TinKhuyenMai.scss";

function TinKhuyenMai() {
  return (
    <div className="tin-khuyen-mai">
      <Link to="">TIN KHUYẾN MÃI</Link>
      <span></span>
      <div className="list-khuyen-mai">
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/snlongxuyen-digital-1200x1800-1670511934903_1670637164118.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/avatar2-gift-digital-1200x1800_1670637226069.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/snlongxuyen-digital-1200x1800-1670511934903_1670637164118.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/snlongxuyen-digital-1200x1800-1670511934903_1670637164118.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TinKhuyenMai;
