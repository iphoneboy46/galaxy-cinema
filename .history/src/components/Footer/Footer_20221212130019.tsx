import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-gioi-thieu">
          <h3>GIỚI THIỆU</h3>
          <ul>
            <li>
              <Link to="">VỀ CHÚNG TÔI</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="footer-goc-dien-anh"></div>
        <div className="footer-ho-tro"></div>
        <div className="footer-ket-noi"></div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
}

export default Footer;
