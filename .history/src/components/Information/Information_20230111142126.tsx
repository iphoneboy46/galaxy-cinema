import React, { useContext, useEffect, useState } from "react";
import "./Information.scss";
import combo1 from "../../asset/image/combo1big.jpg";
import { TotalContext } from "../TotalContext/TotalContext";
import { ComboContext } from "../ComboContext/ComboContext";
import { VeContext } from "../VeContext/VeContext";
import { GheContext } from "../GheContext/GheContext";

interface InformationProps {
  page: number;
  choosePage: React.Dispatch<React.SetStateAction<number>>;
}

function Information({ choosePage, page }: InformationProps) {
  const info = JSON.parse(localStorage.getItem("info") || "{}");

  const date = info.date;

  const dateRevers = date.split("-").reverse().join("-");
  const age1 = info.age;
  const agenum = age1.slice(1);

  const thu = info.thu;
  const [day, setDay] = useState<string>("");
  const totalContext = useContext(TotalContext);
  const comboContext = useContext(ComboContext);
  const veContext = useContext(VeContext);
  const quantity2D =  veContext?.veList?.quantity2D as number;
  const quantity2DTV =  veContext?.veList?.quantity2DTV as number;
  const quantity2DGD =  veContext?.veList?.quantity2DGD as number;
  const quantity2DGDTV =  veContext?.veList?.quantity2DGDTV as number;
  const gheContext = useContext(GheContext);


  useEffect(() => {
    switch (thu) {
      case 0: {
        setDay("Chủ nhật");
        break;
      }
      case 1: {
        setDay("Thứ hai");
        break;
      }
      case 2: {
        setDay("Thứ ba");
        break;
      }
      case 3: {
        setDay("Thứ tư");
        break;
      }
      case 4: {
        setDay("Thứ năm");
        break;
      }
      case 5: {
        setDay("Thứ sáu");
        break;
      }
      case 6: {
        setDay("Thứ bảy");
        break;
      }

      default:
        setDay("");
    }
  }, []);

  const handleNextPage = () => {
    const alertVe = document.querySelector(".book-ticket-alert") as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;
    if(quantity2D > 0 || quantity2DTV > 0 || quantity2DGD > 0 || quantity2DGDTV > 0) {
      choosePage(2);
    }else{
      alertVe.style.top = "5%";
      alertVe.style.opacity = "1";
      modal.style.display = "block";
      document.body.style.overflowY = "hidden";
      choosePage(1);
    }
  };

  const handlePrevPage = () => {
    choosePage(1);
    
  };

  return (
    <div className="info">
      <div className="info-img">
        <img src={info.img} alt="" />
      </div>
      <div className="info-name">
        <h4>{info.name1}</h4>
        <h4>{info.name2}</h4>
      </div>
      <div className="info-age">
        <div className="age">{info.age}</div>
        <p>(*) Phim chỉ dành cho khán giả từ {agenum} tuổi trở lên</p>
      </div>
      <div className="info-rap">
        <h4>Rạp:</h4>
        <h4>Galaxy {info.name}</h4> |<h4>{info.rap}</h4>
      </div>
      <div className="info-suat">
        <h4>Suất chiếu:</h4>
        <h4>{info.suatchieu}</h4> |
        <h4>
          {day}, {dateRevers}
        </h4>
      </div>
      <div className="info-combo">
        <h4>Combo:</h4>
        {comboContext?.comboList?.comboBig1Ex === 0 ? (
          ""
        ) : (
          <h4>iCombo 1 Big Extra({comboContext?.comboList?.comboBig1Ex})</h4>
        )}
        {comboContext?.comboList?.comboBig2Ex === 0 ? (
          ""
        ) : (
          <h4>iCombo 2 Big Extra({comboContext?.comboList?.comboBig2Ex})</h4>
        )}
        {comboContext?.comboList?.comboBig1 === 0 ? (
          ""
        ) : (
          <h4>iCombo 1 Big({comboContext?.comboList?.comboBig1})</h4>
        )}
        {comboContext?.comboList?.comboBig2 === 0 ? (
          ""
        ) : (
          <h4>iCombo 2 Big({comboContext?.comboList?.comboBig2})</h4>
        )}
      </div>
      <div className="info-ghe">
        <h4>Ghế: {gheContext?.chooseList.toString()}</h4>
      </div>
      <div className="info-tong">
        <h4>Tổng:</h4>
        {totalContext?.total === 0 ? (
          <h4>0 VNĐ</h4>
        ) : (
          <h4>{totalContext?.total}.000 VNĐ</h4>
        )}
      </div>
      <div className="info-btn">
        {page === 2 ? (
          <div
            className="info-btn-prev"
            onClick={() => {
              handlePrevPage();
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Quay lại
          </div>
        ) : (
          ""
        )}

        <div
          className="info-btn-next"
          onClick={() => {
            handleNextPage();
          }}
        >
          tiếp tục <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Information;
