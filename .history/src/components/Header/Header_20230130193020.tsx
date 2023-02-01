import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logoGalaxy from "../../asset/image/galaxy-logo.png";
import { MovieShowingData, MovieWaitingData } from "../../data/Data";
import ButtonOutline from "../Button/ButtonOutline";
import Login from "../Login/Login";
import MenuHover from "../MenuHover/MenuHover";
import Search from "../Search/Search";
import "./Header.scss";
import { UserContext } from "../UserContext/UserContext";

const menuChildrens1 = [
  { name: "Thể loại phim", to: "/dienanh" },
  { name: "Diễn viên", to: "/dienvien" },
  { name: "Đạo điễn", to: "/daodien" },
  { name: "Bình luận phim", to: "/binhluanphim" },
  { name: "blog điện ảnh", to: "/movieblog" },
];

const menuChildrens2 = [
  { name: "Ưu đãi", to: "/khuyenmai" },
  { name: "Phim hay tháng", to: "/phimhay" },
];

function Header() {
  const [active, setActive] = useState(1);

  const userContext = useContext(UserContext);
  console.log(userContext.account.displayName);
  const name = userContext.account.displayName;
  // console.log(name);

  const handleVN = (index: number) => {
    setActive(1);
  };

  const handleEN = (index: number) => {
    setActive(2);
  };

  const handleLogin = () => {
    const loginForm = document.querySelector(".login-form") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    loginForm.style.visibility = "visible";
    loginForm.style.top = "50%";
    modal.style.display = "block";
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top--left">
          <div className="header__logo">
            <Link to="/">
              <img src={logoGalaxy} alt="" />
            </Link>
          </div>
          <div className="header__search">
            <Search />
          </div>
        </div>
        <div className="header__top--right">
          {name ? (
            <div className="header__name">
            <div className="header__name--list"> <i className="fa-solid fa-user"></i>  <h4>{name}</h4> </div>
            </div>
          ) : (
            <div onClick={handleLogin} className="header__login">
              <i className="fa-solid fa-user"></i>Đăng nhập
            </div>
          )}

          <div className="header__language">
            <span
              className={active === 1 ? "active" : ""}
              onClick={() => {
                handleVN(1);
              }}
            >
              VN
            </span>
            <span className="nth2">|</span>
            <span
              className={active === 2 ? "active" : ""}
              onClick={() => {
                handleEN(2);
              }}
            >
              EN
            </span>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <ul className="menu-list">
          <li>
            <Link to="/muave">mua vé</Link>
          </li>
          |
          <li className="movie">
            <div className="movie-a">
              {" "}
              phim <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="menu--movie">
              <div className="movie--showing">
                <Link className="movie--showing-link" to="/phimdangchieu">
                  Phim đang chiếu
                </Link>
                <span></span>
                <div className="movie-showing-list">
                  {MovieShowingData.map((movie) => {
                    if (movie.id < 5) {
                      return (
                        <>
                          <div className="movie-showing-item">
                            <div className="movie-showing-item-img">
                              <img src={movie.img1} alt="" />
                            </div>
                            <h4>{movie.name}</h4>
                            <h5>{movie.name2}</h5>
                            <div className="movie-showing-hover">
                              <ButtonOutline
                                name={movie.name}
                                nameUrl={movie.nameUrl}
                              />
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="movie--showing">
                <Link className="movie--showing-link" to="/phimdangchieu">
                  Phim sắp chiếu
                </Link>
                <span></span>
                <div className="movie-showing-list">
                  {MovieWaitingData.map((movie:any) => {
                    if (movie.id < 5) {
                      return (
                        <>
                          <div className="movie-showing-item">
                            <div className="movie-showing-item-img">
                              <img src={movie.img1} alt="" />
                            </div>
                            <h4>{movie.name}</h4>
                            <h5>{movie.name2}</h5>
                            <div className="movie-showing-hover">
                              <ButtonOutline
                                name={movie.name}
                                nameUrl={movie.nameUrl}
                              />
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </li>
          |
          <li>
            <div className="movie-a movie-gda">
              {" "}
              góc điện ảnh <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="movie-children">
              <MenuHover menus={menuChildrens1} />
            </div>
          </li>
          |
          <li>
            <div className="movie-a movie-sk">
              {" "}
              sự kiện <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="movie-children">
              <MenuHover menus={menuChildrens2} />
            </div>
          </li>
          |
          <li>
            <Link to="/rap-giave"> rạp/giá vé</Link>
          </li>
          |
          <li>
            <Link to="/support"> hỗ trợ</Link>
          </li>
          |
          <li>
            <Link to="/chinhsach">thành viên</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
