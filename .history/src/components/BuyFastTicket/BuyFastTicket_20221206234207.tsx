import React, { useState } from "react";
import BuyDay from "./BuyDay";
import "./BuyFastTicket.scss";
import BuyMovie from "./BuyMovie";
import BuyTheater from "./BuyTheater";

function BuyFastTicket() {

  const [active,setActive] = useState(1)  

  const handleChoose = (number: number) => {
        setActive(number)
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
          <h4>Theo Phim</h4>
        </div>
        <div className="buy-content-item">
          <h4>Theo ngày</h4>
        </div>
        <div className="buy-content-item">
          <h4>Theo rạp</h4>
        </div>
      </div>
      {
        active === 1 ? <BuyMovie /> : ""
      }
      {
        active === 2 ?  <BuyDay /> : ""
      }
      {
        active === 3 ? <BuyTheater /> : ""
      }
    </div>
  );
}

export default BuyFastTicket;
