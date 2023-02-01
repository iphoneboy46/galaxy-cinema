import React from "react";
import "./MenuResponsive.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

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
          <div className="menu-phim">Phim</div>
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
            
        </li>
      </ul>
    </div>
  );
}

export default MenuResponsive;
