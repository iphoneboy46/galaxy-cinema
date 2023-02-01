import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-item">
          <h3>GIỚI THIỆU</h3>
          <ul>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> VỀ CHÚNG TÔI
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> THOẢ THUẬN SỬ DỤNG
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> QUY CHẾ HOẠT ĐỘNG
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> CHÍNH SÁCH BẢO MẬT
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-item">
          <h3>GÓC ĐIỆN ẢNH</h3>
          <ul>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> THỂ LOẠI PHIM
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> BÌNH LUẬN PHIM
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> BLOG ĐIỆN ẢNH
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> PHIM HAY THÁNG
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-item">
          <h3>HỖ TRỢ</h3>
          <ul>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"> GÓP Ý</i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> SALE & SERVICES
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> RẠP / GIÁ VÉ
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa-solid fa-angles-right"></i> TUYỂN DỤNG
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-item footer-top-item-end">
          <div className="footer-top-item-end-top">
            <h3>KẾT NỐI GALAXY CINEMA</h3>
            <ul>
                <li>
                    <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                </li>
                <li>
                    <a href=""><i className="fa-brands fa-square-youtube"></i></a>
                </li>
                <li>
                    <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
