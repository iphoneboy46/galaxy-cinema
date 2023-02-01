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
          <div className="footer-top-item footer-top-item-end-left">
            <div className="footer-top-item-end-left-top1">
              <h3>KẾT NỐI GALAXY CINEMA</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/galaxycinevn/">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/galaxymovies">
                    <i className="fa-brands fa-square-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/galaxycinema/">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-top-item-end-left-top2">
              <h3>DOWNLOAD APP</h3>
              <ul>
                <li>
                  <a href="https://apps.apple.com/vn/app/galaxy-cinema/id593312549?l=vi">
                    <i className="fa-brands fa-apple"></i>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi">
                    <i className="fa-brands fa-google-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-item footer-top-item-end-right">
            <img
              src="https://www.galaxycine.vn/website/images/glx_trade.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <span></span>
      <div className="footer-bottom">
        <div className="footer-bottom-img">
          <img
            src="https://www.galaxycine.vn/website/images/galaxy-logo-footer.png"
            alt=""
          />
        </div>
        <h3>
          Công Ty Cổ Phần Phim Thiên Ngân, Tầng 3, Toà Nhà Bitexco Nam Long, 63A
          Võ Văn Tần, P. Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh
        </h3>
        <h3>@copyright Galaxy Cinema 2022</h3>
      </div>
    </div>
  );
}

export default Footer;
