import React from "react";
import "./MenuResponsive.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import MenuHover from "../MenuHover/MenuHover";
import { menuChildrens1, menuChildrens2 } from "../Header/Header";

const handleMenuPhim = () => {
  const menuChildren = document.querySelector(".menu-phim-item") as HTMLElement;
  console.log(menuChildren);
  menuChildren?.classList.toggle("show");
};

const handleDienAnh = () => {
  const menuChildrenDienAnh = document.querySelector(
    ".menu-goc-dien-anh-item"
  ) as HTMLElement;
  menuChildrenDienAnh?.classList.toggle("show");
};

const handleSuKien = () => {
  const menuChildrenSuKien = document.querySelector(
    ".menu-su-kien-item"
  ) as HTMLElement;
  menuChildrenSuKien?.classList.toggle("show");
};

const handleClose = () => {
  const menuRes = document.querySelector(".menu-res") as HTMLElement;
  menuRes.style.display = "none";
};

window.onload = () =>{
    const a = document.documentElement.getAttribute("href");
    console.log(a);
}

function MenuResponsive() {
  return (
    <div className="menu-responsive">
      <div onClick={handleClose} className="menu-responsive-exits">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="menu-responsive-search">
        <Search />
      </div>
      <ul>
        <li>
          <Link to="/muave">mua vé</Link>
        </li>
        <li>
          <div onClick={handleMenuPhim} className="menu-phim">
            Phim <i className="fa-solid fa-angle-down"></i>
          </div>
          <ul className="menu-phim-item">
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
          <div onClick={handleDienAnh} className="menu-goc-dien-anh-list">
            góc điện ảnh <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="menu-goc-dien-anh-item">
            <MenuHover menus={menuChildrens1} />
          </div>
        </li>
        <li>
          <div onClick={handleSuKien} className="menu-su-kien-list">
            Sự kiện <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="menu-su-kien-item">
            <MenuHover menus={menuChildrens2} />
          </div>
        </li>
        <li>
          <Link to="/rap-giave"> rạp/giá vé</Link>
        </li>
        <li>
          <Link to="/support"> hỗ trợ</Link>
        </li>

        <li>
          <Link to="/chinhsach">thành viên</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuResponsive;
