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
        <div className="footer-ho-tro"></div>
        <div className="footer-ket-noi"></div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
