import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieShowingData, trailerMovie } from "../../data/Data";
import { MovieContext } from "../MovieContext/MovieContext";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./MovieDetails.scss";
import { UserContext } from "../UserContext/UserContext";
import Information from "../Information/Information";
import { TotalContext } from "../TotalContext/TotalContext";
import Select from "react-select";
import { CinemaList, location } from "../SelectValue/DataList";

interface MovieDetailsProps {
  name?: string | null;
}

function MovieDetails({ name }: MovieDetailsProps) {
  const [id, setId] = useState<number | string>(1);
  const [timeCheckND, setTimeCheckND] = useState(true);
  const [timeCheckTB, setTimeCheckTB] = useState(true);
  const [timeCheckKDV, setTimeCheckKDV] = useState(true);
  const [timeCheckQT, setTimeCheckQT] = useState(true);
  const [timeCheckBT, setTimeCheckBT] = useState(true);
  const [timeCheckLB, setTimeCheckLB] = useState(true);
  const [timeCheckDN, setTimeCheckDN] = useState(true);
  const [timeCheckCM, setTimeCheckCM] = useState(true);
  const [timeCheckTC, setTimeCheckTC] = useState(true);
  const [timeCheckHTP, setTimeCheckHTP] = useState(true);
  const [timeCheckV, setTimeCheckV] = useState(true);
  const [timeCheckHP, setTimeCheckHP] = useState(true);
  const [timeCheckNVQ, setTimeCheckNVQ] = useState(true);
  const [timeCheckBMT, setTimeCheckBMT] = useState(true);
  const [timeCheckLX, setTimeCheckLX] = useState(true);
  const [timeCheckLT, setTimeCheckLT] = useState(true);
  const [timeCheckNT, setTimeCheckNT] = useState(true);
  
  const d = new Date();
  const month = (d.getMonth() + 1) < 10 ? "0" : "";
  const day = d.getDate() < 10 ? "0" : "";
  const ngay = d.getFullYear() + "-" + month + (d.getMonth() + 1) + "-" + (day + d.getDate());
  console.log(ngay);
  const [date, setDate] = useState<any>(ngay);

  

  const today = new Date();
  const tomorrow = new Date(date);
  const thu = tomorrow.getDay();
  const tomo = tomorrow.getHours();
  const tg = today.getHours();
  const monthToday = (today.getMonth() + 1) < 10 ? "0" : "";
  const dayToday = today.getDate() < 10 ? "0" : "";

  const ng = today.getFullYear() + "-" + monthToday + (today.getMonth() + 1) + "-" +( dayToday + today.getDate());
  console.log(ng);
  const [time, setTime] = useState<string | number>(tg);

  useEffect(() => {
    if (date === ng) {
      setTime(tg);
    } else {
      setTime(tomo);
    }
  });

  console.log(time);

  const movieName = JSON.parse(localStorage.getItem("movie") || "{}");

  useEffect(() => {
    function checkTime() {
      MovieShowingData.map((mv) => {
        return mv.galaxyND?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckND(true);
          } else {
            setTimeCheckND(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyTB?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckTB(true);
          } else {
            setTimeCheckTB(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyKDV?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckKDV(true);
          } else {
            setTimeCheckKDV(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyQT?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckQT(true);
          } else {
            setTimeCheckQT(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyBT?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckBT(true);
          } else {
            setTimeCheckBT(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyLB?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckLB(true);
          } else {
            setTimeCheckLB(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyDN?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckDN(true);
          } else {
            setTimeCheckDN(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyCM?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckCM(true);
          } else {
            setTimeCheckCM(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyTC?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckTC(true);
          } else {
            setTimeCheckTC(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyHTP?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckHTP(true);
          } else {
            setTimeCheckHTP(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyV?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckV(true);
          } else {
            setTimeCheckV(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyHP?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckHP(true);
          } else {
            setTimeCheckHP(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyNVQ?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckNVQ(true);
          } else {
            setTimeCheckNVQ(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyBMT?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckBMT(true);
          } else {
            setTimeCheckBMT(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyLX?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckLX(true);
          } else {
            setTimeCheckLX(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyLT?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckLT(true);
          } else {
            setTimeCheckLT(false);
          }
        });
      });
      MovieShowingData.map((mv) => {
        return mv.galaxyNT?.map((nd) => {
          if (nd.time >= time) {
            setTimeCheckNT(true);
          } else {
            setTimeCheckNT(false);
          }
        });
      });
    }

    checkTime();
  });

  const userContext = useContext(UserContext);
  const movieContext = useContext(MovieContext);

  const handleLogin = (mv: any, movie: any) => {
    const loginForm = document.querySelector(".login-form") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    loginForm.style.visibility = "visible";
    loginForm.style.top = "50%";
    modal.style.display = "block";
    console.log(movie);
    movieContext?.setName(movie.nameUrl);

    const infoMovie = {
      name1: movie.name,
      name2: movie.name2,
      age: movie.age,
      img: movie.img1,
      suatchieu: mv.value,
      rap: mv.rap,
      galaxy: mv.name,
      date: date,
      thu: thu,
    };
    localStorage.setItem("info", JSON.stringify(infoMovie));
  };

  let navigate = useNavigate();
  const totalContext = useContext(TotalContext);

  const handleChooseTime = (mv: any, movie: any) => {
    const infoMovie = {
      name1: movie.name,
      name2: movie.name2,
      age: movie.age,
      img: movie.img1,
      suatchieu: mv.value,
      rap: mv.rap,
      galaxy: mv.name,
      date: date,
      thu: thu,
    };
    console.log(mv);

    localStorage.setItem("info", JSON.stringify(infoMovie));
    navigate(`/book-ticket/${movie.nameUrl}`);
  };

  const [locationValue, setLocationValue] = useState<string>("Cả nước");
  const [rap, setRap] = useState<any>();

  useEffect(() => {
    switch (locationValue) {
      case "Cả nước": {
        setRap(CinemaList);
        break;
      }

      case "TP Hồ Chí Minh": {
        setRap([
          {
            value: "Tất cả rạp tp",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Nguyễn Du",
            label: "Galaxy Nguyễn Du",
          },
          {
            value: "Galaxy Tân Bình",
            label: "Galaxy Tân Bình",
          },
          {
            value: "Galaxy Kinh Dương Vương",
            label: "Galaxy Kinh Dương Vương",
          },
          {
            value: "Galaxy Quang Trung",
            label: "Galaxy Quang Trung",
          },
          {
            value: "Galaxy Trung Chánh",
            label: "Galaxy Trung Chánh",
          },
          {
            value: "Galaxy Huỳnh Tấn Phát",
            label: "Galaxy Huỳnh Tấn Phát",
          },
          {
            value: "Galaxy Nguyễn Văn Quá",
            label: "Galaxy Nguyễn Văn Quá",
          },
          {
            value: "Galaxy Co.opXtra Linh Trung",
            label: "Galaxy Co.opXtra Linh Trung",
          },
        ]);
        break;
      }

      case "Cà Mau": {
        setRap([
          {
            value: "Tất cả rạp cm",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Cà Mau",
            label: "Galaxy Cà Mau",
          },
        ]);
        break;
      }

      case "Bến Tre": {
        setRap([
          {
            value: "Tất cả rạp bt",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Bến Tre",
            label: "Galaxy Bến Tre",
          },
        ]);
        break;
      }

      case "Hà Nội": {
        setRap([
          {
            value: "Tất cả rạp hn",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Hà Nội",
            label: "Galaxy Hà Nội",
          },
        ]);
        break;
      }

      case "Đà Nẵng": {
        setRap([
          {
            value: "Tất cả rạp dn",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Đà Nẵng",
            label: "Galaxy Đà Nẵng",
          },
        ]);
        break;
      }

      case "Đắk Lắk": {
        setRap([
          {
            value: "Tất cả rạp dl",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Đắk Lắk",
            label: "Galaxy Đắk Lắk",
          },
        ]);
        break;
      }

      case "An Giang": {
        setRap([
          {
            value: "Tất cả rạp ag",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy An Giang",
            label: "Galaxy An Giang",
          },
        ]);
        break;
      }

      case "Khánh Hòa": {
        setRap([
          {
            value: "Tất cả rạp kh",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Khánh Hòa",
            label: "Galaxy Khánh Hòa",
          },
        ]);
        break;
      }

      case "Hải Phòng": {
        setRap([
          {
            value: "Tất cả rạp hp",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Hải Phòng",
            label: "Galaxy Hải Phòng",
          },
        ]);
        break;
      }

      case "Nghệ An": {
        setRap([
          {
            value: "Tất cả rạp v",
            label: "Tất cả rạp",
          },
          {
            value: "Galaxy Vinh",
            label: "Galaxy Vinh",
          },
        ]);
        break;
      }

      default:
        setRap(rap);
    }
  }, [locationValue]);

  const handlePlayTrailer = (id: number | string) => {
    const videoPlayer = document.querySelector(
      ".container"
    ) as HTMLVideoElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    modal.style.display = "block";
    videoPlayer.style.display = "block";
    videoPlayer.style.top = "50%";

    setId(id);
  };
  return (
    <>
      <div className="movie-details">
        <div className="modal"></div>
        <div className="container">
          <VideoPlayer id={id} datas={trailerMovie} />
        </div>
        {MovieShowingData.map((movie) => {
          if (movie.name === name || movie.name === movieName) {
            console.log(movie.galaxyTB);
            return (
              <>
                <div className="movie-details-path">
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <i className="fa-solid fa-angle-right"></i>
                    <li>
                      <Link to="/">Đặt vé</Link>
                    </li>
                    <i className="fa-solid fa-angle-right"></i>
                    <li>
                      <h3>{movie.name}</h3>
                    </li>
                  </ul>
                </div>
                <div className="movie-details-des">
                  <div className="movie-details-des-left">
                    <img src={movie.img2} alt="" />
                    <div
                      onClick={() => {
                        handlePlayTrailer(movie.id);
                      }}
                      className="movie-details-des-left-play"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                  <div className="movie-details-des-right">
                    <h2>{movie.name}</h2>
                    <h2>{movie.name2}</h2>
                    <div className="movie-details-des-right-rating">
                      <div className="movie-details-des-right-rating-left">
                        <i className="fa-solid fa-star"></i>
                        <div className="movie-details-des-right-rating-left-dg">
                          {movie.ranking}
                          <h5>{movie.quantityRanking}</h5>
                        </div>
                      </div>
                      <div className="movie-details-des-right-rating-right">
                        đánh giá
                      </div>
                    </div>
                    <div className="movie-details-des-right-con">
                      <div className="movie-details-des-right-con-age">
                        {movie.age}
                      </div>
                      <div className="movie-details-des-right-con-time">
                        <i className="fa-regular fa-clock"></i> {movie.time}
                      </div>
                      <div className="movie-details-des-right-con-like">
                        <i className="fa-solid fa-thumbs-up"></i> Thich 757
                      </div>
                      <div className="movie-details-des-right-con-share">
                        Chia sẻ
                      </div>
                    </div>
                    <div className="movie-details-des-right-content">
                      <ul>
                        <li>
                          Đạo diễn:{" "}
                          <a href={movie.directorUrl}>{movie.director}</a>
                        </li>
                        <li>
                          Quốc gia: <a href="">{movie.nation}</a>
                        </li>
                        <li>
                          {movie.producer ? (
                            <div style={{ display: "flex" }}>
                              <p>Nhà sản xuất</p>:{" "}
                              <a href={movie.producerUrl}>{movie.producer}</a>{" "}
                            </div>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          Diễn viên:{" "}
                          {movie.cast1 ? (
                            <a href={movie.cast1Url}>{movie.cast1},</a>
                          ) : (
                            " "
                          )}
                          {movie.cast2 ? (
                            <a href={movie.cast2Url}>{movie.cast2},</a>
                          ) : (
                            " "
                          )}
                          {movie.cast3 ? (
                            <a href={movie.cast3Url}>{movie.cast3},</a>
                          ) : (
                            " "
                          )}
                          {movie.cast4 ? (
                            <a href={movie.cast4Url}>{movie.cast4},</a>
                          ) : (
                            " "
                          )}
                          {movie.cast5 ? (
                            <a href={movie.cast5Url}>{movie.cast5},</a>
                          ) : (
                            " "
                          )}
                          {movie.cast6 ? (
                            <a href={movie.cast6Url}>{movie.cast6},</a>
                          ) : (
                            " "
                          )}
                        </li>
                        <li>
                          Thể loại:{" "}
                          {movie.hanhdong ? (
                            <a href="">{movie.hanhdong},</a>
                          ) : (
                            ""
                          )}{" "}
                          {movie.tamly ? <a href="">{movie.tamly},</a> : ""}{" "}
                          {movie.lyki ? <a href="">{movie.lyki},</a> : ""}
                          {movie.hai ? <a href="">{movie.hai},</a> : ""}{" "}
                          {movie.kinhdi ? <a href="">{movie.kinhdi},</a> : ""}{" "}
                          {movie.hoathinh ? (
                            <a href="">{movie.hoathinh},</a>
                          ) : (
                            ""
                          )}{" "}
                          {movie.toipham ? <a href="">{movie.toipham},</a> : ""}{" "}
                        </li>
                        <li>
                          Ngày khởi chiếu: <p>{movie.premiere}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="movie-details-nd">
                  <h3>Nội dung phim </h3>
                  <span></span>
                  <p>{movie.description}</p>
                  <p>{movie.description2}</p>
                  <p>{movie.description3}</p>
                  <p>{movie.description4}</p>
                  <p>{movie.description5}</p>
                </div>
                <div className="movie-details-lich">
                  <h3>LỊCH CHIẾU</h3>
                  <span></span>
                </div>

                <div className="movie-details-filter">
                  <div className="movie-details-filter-1">
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          "&:hover": {
                            border: "1px solid #43464b",
                          },
                          "&:focus": {
                            border: "1px solid #43464b",
                          },
                          borderColor: "#A9A4AD",
                        }),
                        dropdownIndicator: (base) => ({
                          ...base,
                          color: "#A9A4AD",
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                      }}
                      placeholder="Cả nước"
                      options={location}
                      onChange={(
                        event: ChangeEvent<HTMLSelectElement> | any
                      ) => {
                        setLocationValue(event.value);
                      }}
                    />
                  </div>
                  <div className="movie-details-filter-2">
                    <input
                      type="date"
                      value={date}
                      min={ng}
                      onChange={(event) => {
                        setDate(event.target.value);
                      }}
                    />
                  </div>
                  <div className="movie-details-filter-3">
                    <Select
                      onChange={(
                        event: ChangeEvent<HTMLSelectElement> | any
                      ) => {
                        setLocationValue(event.value);
                      }}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          "&:hover": {
                            border: "1px solid #43464b",
                          },
                          "&:focus": {
                            border: "1px solid #43464b",
                          },

                          borderColor: "#A9A4AD",
                        }),
                        dropdownIndicator: (base) => ({
                          ...base,
                          color: "#A9A4AD",
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                      }}
                      placeholder="Tất cả rạp"
                      options={rap}
                    />
                  </div>
                </div>

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Tân Bình" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckTB ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Tân Bình</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyTB?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}
                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Nguyễn Du" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckND ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Nguyễn Du</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyND?.map((mv : any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}
                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Kinh Dương Vương" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckKDV ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Kinh Dương Vương</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyKDV?.map((mv: any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}
                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Quang Trung" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckQT ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Quang Trung</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyQT?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Bến Tre" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Bến Tre" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp bt" ? (
                  timeCheckBT ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Bến Tre</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyBT?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Hà Nội" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Mipec Long Biên" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp hn" ? (
                  timeCheckLB ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Mipec Long Biên</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyLB?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Đà Nẵng" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Đà Nẵng" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp dn" ? (
                  timeCheckDN ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Đà Nẵng</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyDN?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Cà Mau" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Cà Mau" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp cm" ? (
                  timeCheckCM ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Cà Mau </h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyCM?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Trung Chánh" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckTC ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Trung Chánh</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyTC?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Huỳnh Tấn Phát" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckHTP ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Huỳnh Tấn Phát</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyHTP?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Nghệ An" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Vinh" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp v" ? (
                  timeCheckV ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Vinh</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyV?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Hải Phòng" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Hải Phòng" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp hp" ? (
                  timeCheckHP ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Hải Phòng</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyHP?.map((mv:any) => {
                            if (mv.time >= time) {
                              return userContext.account.displayName ? (
                                <div
                                  onClick={() => {
                                    handleChooseTime(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    handleLogin(mv, movie);
                                  }}
                                  className="movie-details-rap-bottom-list-item"
                                >
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Nguyễn Văn Quá" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckNVQ ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Nguyễn Văn Quá</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyNVQ?.map((mv:any) => {
                            if (mv.time >= time) {
                              return (
                                <div className="movie-details-rap-bottom-list-item">
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "Đắk Lắk" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Buôn Ma Thuột" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp dl" ? (
                  timeCheckBMT ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Buôn Ma Thuột</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyBMT?.map((mv) => {
                            if (mv.time >= time) {
                              return (
                                <div className="movie-details-rap-bottom-list-item">
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "An Giang" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Long Xuyên" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp ag" ? (
                  timeCheckLX ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Long Xuyên</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyLX?.map((mv) => {
                            if (mv.time >= time) {
                              return (
                                <div className="movie-details-rap-bottom-list-item">
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Co.opXtra Linh Trung" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp tp" ? (
                  timeCheckLT ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Co.opXtra Linh Trung</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyLT?.map((mv) => {
                            if (mv.time >= time) {
                              return (
                                <div className="movie-details-rap-bottom-list-item">
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}

                {locationValue === "TP Hồ Chí Minh" ||
                locationValue === "Cả nước" ||
                locationValue === "Galaxy Nha Trang Center" ||
                locationValue === "Chọn rạp" ||
                locationValue === "Tất cả rạp nt" ? (
                  timeCheckNT ? (
                    <div className="movie-details-rap">
                      <div className="movie-details-rap-top">
                        <h3>Galaxy Nha Trang Center</h3>
                      </div>
                      <div className="movie-details-rap-bottom">
                        <h4>2D - Phụ đề</h4>
                        <div className="movie-details-rap-bottom-list">
                          {movie.galaxyNT?.map((mv) => {
                            if (mv.time >= time) {
                              return (
                                <div className="movie-details-rap-bottom-list-item">
                                  {mv.value}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  ""
                )}
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default MovieDetails;
