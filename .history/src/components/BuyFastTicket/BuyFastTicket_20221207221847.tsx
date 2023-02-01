import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const today = new Date();
const timenow = today.getHours();
const datenow = today.getDate();

let resultTimes: string[] = [];
let resultDates: string[] = [];
ShowTimeList1.map((time: any) => {
  if (time.time >= timenow) {
    return resultTimes.push();
  }
});

DayList.map((date: any) => {
  if (date.date >= datenow) {
    return resultDates.push(date);
  }
});

function BuyFastTicket() {
  const [active, setActive] = useState(1);
  const [showtime, setShowtime] = useState()

  const handleChoose = (number: number) => {
    setActive(number);
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
        {active === 1 ? <BuyMovie resultTimes={resultTimes} resultDates={resultDates} MovieList={MovieList} CinemaList={CinemaList} /> : ""}
        {active === 2 ? <BuyDay resultTimes={resultTimes} resultDates={resultDates} MovieList={MovieList} CinemaList={CinemaList}  /> : ""}
        {active === 3 ? <BuyTheater resultTimes={resultTimes} resultDates={resultDates} MovieList={MovieList} CinemaList={CinemaList}/> : ""}
      </div>
      <div className="btn-buy">
        <Link to="/">
          Mua vé
        </Link>
      </div>
    </div>
  );
}

export default BuyFastTicket;
