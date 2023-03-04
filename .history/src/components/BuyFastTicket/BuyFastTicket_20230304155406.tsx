import React, { useContext, useEffect, useState } from "react";
import BuyDay from "./BuyDay";
import "./BuyFastTicket.scss";
import BuyMovie from "./BuyMovie";
import BuyTheater from "./BuyTheater";
import {
  MovieList,
  CinemaList,
  DayList,
  ShowTimeList1,
} from "../SelectValue/DataList";
import "./SelectOptionStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import Login from "../Login/Login";

function BuyFastTicket() {
  const [date, setDate] = useState<string>("");
  const navigate = useNavigate();
  console.log(date);
  const today = date !== "" ? new Date(date) : new Date();
  console.log(today);
  const today2 = new Date();

  const timenow =
    today.getDate() === today2.getDate() ? today2.getHours() : today.getHours();
  console.log(today2.getDate(), today.getDate());
  console.log(timenow);
  const datenow = today.getDate();
  console.log(datenow);
  const [active, setActive] = useState(1);
  const [showtime, setShowtime] = useState(ShowTimeList1);
  const [movieFast, setMovieFast] = useState<any>({});
  const userContext = useContext(UserContext);

  console.log(showtime);

  let resultTimes = showtime.filter((time: any) => {
    return time.time >= timenow;
  });

  console.log(resultTimes);

  let resultDates = DayList.filter((date: any) => {
    return date.date >= datenow;
  });

  const handleChoose = (number: number) => {
    setActive(number);
  };

  console.log(movieFast.length);

  const handleFast = () => {
    if(movieFast.length <= 0) {
      console.error("Bạn chưa chọn suất chiếu")
    }else{
      if(userContext.account.displayName === ""){
        localStorage.setItem("info", JSON.stringify(movieFast));
  
        navigate(`/book-ticket/${movieFast.nameUrl}`);
      }else{
        const loginForm = document.querySelector(".login-form") as HTMLDivElement;
        const modal = document.querySelector(".modal") as HTMLDivElement;
        loginForm.style.visibility = "visible";
        loginForm.style.top = "50%";
        modal.style.display = "block";
      }
    }
    
   
  };

  return (
    <div className="buy-fast-ticket">
      <h1>MUA VÉ NHANH</h1>
      <div className="buy-content-list">
        <div
          onClick={() => {
            handleChoose(1);
          }}
          className="buy-content-item"
        >
          <h4 className={active === 1 ? "active" : ""}>Theo Phim</h4>
        </div>
        <div
          onClick={() => {
            handleChoose(2);
          }}
          className="buy-content-item"
        >
          <h4 className={active === 2 ? "active" : ""}>Theo ngày</h4>
        </div>
        <div
          onClick={() => {
            handleChoose(3);
          }}
          className="buy-content-item"
        >
          <h4 className={active === 3 ? "active" : ""}>Theo rạp</h4>
        </div>
      </div>
      <div className="buy-content-data">
        {active === 1 ? (
          <BuyMovie
            setDate={setDate}
            setShowtime={setShowtime}
            resultTimes={resultTimes}
            resultDates={resultDates}
            MovieList={MovieList}
            CinemaList={CinemaList}
            setMovieFast={setMovieFast}
          />
        ) : (
          ""
        )}
        {active === 2 ? (
          <BuyDay
            setDate={setDate}
            setShowtime={setShowtime}
            resultTimes={resultTimes}
            resultDates={resultDates}
            MovieList={MovieList}
            CinemaList={CinemaList}
          />
        ) : (
          ""
        )}
        {active === 3 ? (
          <BuyTheater
            setDate={setDate}
            setShowtime={setShowtime}
            resultTimes={resultTimes}
            resultDates={resultDates}
            MovieList={MovieList}
            CinemaList={CinemaList}
          />
        ) : (
          ""
        )}
      </div>

      <div onClick={handleFast} className="btn-buy">
        Mua vé
      </div>
    </div>
  );
}

export default BuyFastTicket;
