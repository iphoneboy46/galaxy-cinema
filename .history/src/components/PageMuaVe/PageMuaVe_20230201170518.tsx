import React, { useEffect, useState } from "react";
import "./PageMuaVe.scss";
import Information from "../Information/Information";
import BookTicket from "../BookTicket/BookTicket";
import { Route, Routes } from "react-router-dom";
import ChooseGhe from "../ChooseGhe/ChooseGhe";
import ThanhToan from "../ThanhToan/ThanhToan";

function PageMuaVe() {
  const [page, setPage] = useState<number>(1);
  const [widthX,setWidthX] = useState<number>();

  useEffect(() => {
    const ticketRight = document.querySelector(
      ".page-mua-ve-right"
    ) as HTMLDivElement;

    const pageMuaVe = document.querySelector(".page-mua-ve") as HTMLElement;
   
    window.onresize = () =>{
      const widthScreen = pageMuaVe.offsetWidth as any;
      setWidthX(widthScreen)
    }

    if(pageMuaVe.offsetWidth > 1024){
      window.onscroll = () => {
        ticketRight.style.top = window.scrollY + "px";
      };
    }
    
  },[widthX]);

  return (
    <div className="page-mua-ve">
       <div className="page-mua-ve-right">
        <Information page={page} choosePage = {setPage} />
      </div>
      <div className="page-mua-ve-left">
        {page === 1 ? <BookTicket /> : ""}
        {page === 2 ? <ChooseGhe /> : ""}
        {page === 3 ? <ThanhToan choosePage={setPage} /> : ""}

      </div>
     
    </div>
  );
}

export default PageMuaVe;
