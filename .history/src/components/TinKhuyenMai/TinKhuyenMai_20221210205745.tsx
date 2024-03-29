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
            <a className="list-khuyen-mai-a" href="https://www.galaxycine.vn/khuyen-mai/sinh-nhat-long-xuyen---qua-nguyen-ca-thang">
                <h3>Sinh Nhật Long Xuyên - Quà Nguyên Cả Tháng</h3>
                <p><strong>Galaxy Long Xuyên</strong> tổ chức tiệc sinh nhật cực hời cả tháng trời với hàng loạt ưu đãi tuyệt vời.</p>
                <button>
                chi tiết
                </button>
            </a>
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/avatar2-gift-digital-1200x1800_1670637226069.jpg" alt="" />
            <a className="list-khuyen-mai-a" href="https://www.galaxycine.vn/khuyen-mai/sinh-nhat-long-xuyen---qua-nguyen-ca-thang">
                <h3>“Cháy” Cùng Dòng Chảy – Nhận Quà Độc Quyền</h3>
                <p><strong>Galaxy Long Xuyên</strong> tổ chức tiệc sinh nhật cực hời cả tháng trời với hàng loạt ưu đãi tuyệt vời.</p>
                <button>
                chi tiết
                </button>
            </a>
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/combo-avatar2-digital-300x450-1669694289185_1670637273331.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/khaitruongtc-digital-300x450-1669190921690_1670637306914.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/2/glx-t12-1200x1800_1669990093381.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/3/1200x1800-gexgs_1670062781110.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/khaitruongnhatrang-digital-300x450-1669018963900_1670637460007.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/combo-u22-digital-300x450-1667285239633_1670637604853.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/nta-t12-2022-digital-300x450-1669278363008_1670637763663.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/12/10/baivietkhaitruong-digital-300x450-1668397638956_1670637377594.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/11/21/glx-nha-trang-baivietwweb-digital-300x450_1669019579491.jpg" alt="" />
        </div>
        <div className="list-khuyen-mai-item">
            <img src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TinKhuyenMai;
