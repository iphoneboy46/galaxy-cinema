import React from "react";
import "./MenuResponsive.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import MenuHover from "../MenuHover/MenuHover";
import { menuChildrens1 } from "../Header/Header";


function MenuResponsive() {
  return (
    <div className="menu-responsive">
      <div className="menu-responsive-search">
        <Search />
      </div>
      <ul>
        <li>
          <Link to="/muave">mua vé</Link>
        </li>
        <li>
          <div className="menu-phim">
            Phim <i className="fa-solid fa-angle-down"></i>
          </div>
          <ul>
            <li>
              <Link className="movie--showing-link" to="/phimdangchieu">
                Phim đang chiếu
              </Link>
            </li>
            <li>
              <Link className="movie--showing-link" to="/phimdangchieu">
                Phim sắp chiếu
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="menu-goc-dien-anh-list">
            góc điện ảnh <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="">
            <MenuHover menus={menuChildrens1} />
          </div>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default MenuResponsive;
