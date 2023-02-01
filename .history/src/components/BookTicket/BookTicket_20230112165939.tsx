import React, { useContext, useEffect, useState } from "react";
import "./BookTicket.scss";
import combo1ex from "../../asset/image/combo1.png";
import combo2ex from "../../asset/image/combo2.jpg";
import combo1 from "../../asset/image/combo1big.jpg";
import combo2 from "../../asset/image/combo2big.jpg";
import Information from "../Information/Information";
import { TotalContext } from "../TotalContext/TotalContext";
import { ComboContext } from "../ComboContext/ComboContext";
import { VeContext } from "../VeContext/VeContext";
import { GheContext } from "../GheContext/GheContext";

function BookTicket() {
  console.log("re-render");

  const info = JSON.parse(localStorage.getItem("info") || "{}");
  const [gia2D, setGia2D] = useState<number>(75);
  const [gia2DTV, setGia2DTV] = useState<number>(70);
  const [gia2DGD, setGia2DGD] = useState<number>(110);
 


  const totalContext = useContext(TotalContext);
  const comboContext = useContext(ComboContext);
  const veContext = useContext(VeContext);
  const gheContext = useContext(GheContext);

  let i = 0;
  const [quantity2D, setQuantity2D] = useState<number>(i);
  const [price2DTong, setPrice2DTong] = useState<number>(0);

  const [quantity2DTV, setQuantity2DTV] = useState<number>(i);
  const [price2DTVTong, setPrice2DTVTong] = useState<number>(0);

  const [quantity2DGD, setQuantity2DGD] = useState<number>(i);
  const [price2DGDTong, setPrice2DGDTong] = useState<number>(0);

  const [quantity2DGDTV, setQuantity2DGDTV] = useState<number>(i);
  const [price2DGDTVTong, setPrice2DGDTVTong] = useState<number>(0);

  const [quantity2DGDHD, setQuantity2DGDHD] = useState<number>(i);
  const [price2DGDHDTong, setPrice2DGDHDTong] = useState<number>(0);

  const [quantityBigEx1, setQuantityBigEx1] = useState<number>(i);
  const [priceBigEx1, setPriceBigEx1] = useState<number>(0);

  const [quantityBigEx2, setQuantityBigEx2] = useState<number>(i);
  const [priceBigEx2, setPriceBigEx2] = useState<number>(0);

  const [quantityBig1, setQuantityBig1] = useState<number>(i);
  const [priceBig1, setPriceBig1] = useState<number>(0);

  const [quantityBig2, setQuantityBig2] = useState<number>(i);
  const [priceBig2, setPriceBig2] = useState<number>(0);

  const totalGheDon = [
    quantity2D,
    quantity2DTV,
  ]

  const totalGheDoi = [
    quantity2DGD,
    quantity2DGDTV,
    quantity2DGDHD
  ]

  const totalGheDonTong = totalGheDon.reduce((tong,sum)=>{
    return sum += tong
  })

  const totalGheDoiTong = totalGheDon.reduce((tong,sum)=>{
    return sum += tong
  })

  useEffect(() => {
    const comboList: {
      comboBig1?: number;
      comboBig2?: number;
      comboBig1Ex?: number;
      comboBig2Ex?: number;
    } = {
      comboBig1: quantityBig1,
      comboBig2: quantityBig2,
      comboBig1Ex: quantityBigEx1,
      comboBig2Ex: quantityBigEx2,
    };

    comboContext?.setComboList(comboList);
  }, [quantityBig1, quantityBig2, quantityBigEx1, quantityBigEx2]);

  useEffect(() => {
    const veList: {
      quantity2D?: number;
      quantity2DTV?: number;
      quantity2DGD?: number;
      quantity2DGDTV?: number;
      quantity2DGDHD?: number
      totalGheTong?: number;
    } = {
      quantity2D: quantity2D,
      quantity2DTV: quantity2DTV,
      quantity2DGD: quantity2DGD,
      quantity2DGDTV: quantity2DGDTV,
      quantity2DGDHD: quantity2DGDHD,
      totalGheTong: totalGheTong
    };

    veContext?.setVeList(veList);
  }, [quantity2D, quantity2DTV, quantity2DGD, quantity2DGDTV,quantity2DGDHD]);

  const totalGia1 = [
    price2DTong,
    price2DTVTong,
    price2DGDTong,
    price2DGDTVTong,
    price2DGDHDTong,
  ];

  const totalGia2 = [priceBigEx1, priceBigEx2, priceBig1, priceBig2];

  const totalTong1 = totalGia1.reduce((total, sum) => {
    return (sum += total);
  });

  const totalTong2 = totalGia2.reduce((total, sum) => {
    return (sum += total);
  });

  const tong = [totalTong1, totalTong2];

  const tongAll = tong.reduce((total, sum) => {
    return (sum += total);
  });

  useEffect(() => {
    totalContext?.setTotal(tongAll);
    if(quantity2D < 1 || quantity2DTV < 1 || quantity2DGDTV < 1 || quantity2DGDTV < 1){
      gheContext?.setChooseList([]) ;
    }
  },[tongAll]);

  useEffect(() => {
    if (info.thu === 2) {
      setGia2D(55);
      setGia2DTV(55);
    } else {
      setGia2D(75);
      setGia2DTV(70);
    }

    const btnPlus2D = document.querySelector(".btn-plus-2d") as HTMLDivElement;
    const btnMinus2D = document.querySelector(
      ".btn-minus-2d"
    ) as HTMLDivElement;

    const btnPlus2DTV = document.querySelector(
      ".btn-plus-2dtv"
    ) as HTMLDivElement;
    const btnMinus2DTV = document.querySelector(
      ".btn-minus-2dtv"
    ) as HTMLDivElement;
    const btnPlus2DGD = document.querySelector(
      ".btn-plus-2dgd"
    ) as HTMLDivElement;
    const btnMinus2DGD = document.querySelector(
      ".btn-minus-2dgd"
    ) as HTMLDivElement;
    const btnPlus2DGDTV = document.querySelector(
      ".btn-plus-2dgdtv"
    ) as HTMLDivElement;
    const btnMinus2DGDTV = document.querySelector(
      ".btn-minus-2dgdtv"
    ) as HTMLDivElement;
    const btnPlus2DGDHD = document.querySelector(
      ".btn-plus-2dgdhd"
    ) as HTMLDivElement;
    const btnMinus2DGDHD = document.querySelector(
      ".btn-minus-2dgdhd"
    ) as HTMLDivElement;

    const btnMinusBigEx1 = document.querySelector(
      ".btn-minus-bigex1"
    ) as HTMLDivElement;

    const btnMinusBigEx2 = document.querySelector(
      ".btn-minus-bigex2"
    ) as HTMLDivElement;

    const btnMinusBig1 = document.querySelector(
      ".btn-minus-big1"
    ) as HTMLDivElement;

    const btnMinusBig2 = document.querySelector(
      ".btn-minus-big2"
    ) as HTMLDivElement;

    if (quantity2D === 8) {
      btnPlus2D.classList.add("disabled");
    } else if (quantity2D === 0) {
      btnMinus2D.classList.add("disabled");
    } else {
      btnMinus2D.classList.remove("disabled");
      btnPlus2D.classList.remove("disabled");
    }

    if (quantity2DTV === 8) {
      btnPlus2DTV.classList.add("disabled");
    } else if (quantity2DTV === 0) {
      btnMinus2DTV.classList.add("disabled");
    } else {
      btnMinus2DTV.classList.remove("disabled");
      btnPlus2DTV.classList.remove("disabled");
    }

    if (quantity2DGD === 8) {
      btnPlus2DGD?.classList.add("disabled");
    } else if (quantity2DGD === 0) {
      btnMinus2DGD?.classList.add("disabled");
    } else {
      btnMinus2DGD?.classList.remove("disabled");
      btnPlus2DGD?.classList.remove("disabled");
    }

    if (quantity2DGDTV === 8) {
      btnPlus2DGDTV?.classList.add("disabled");
    } else if (quantity2DGDTV === 0) {
      btnMinus2DGDTV?.classList.add("disabled");
    } else {
      btnMinus2DGDTV?.classList.remove("disabled");
      btnPlus2DGDTV?.classList.remove("disabled");
    }

    if (quantity2DGDHD === 8) {
      btnPlus2DGDHD?.classList.add("disabled");
    } else if (quantity2DGDHD === 0) {
      btnMinus2DGDHD?.classList.add("disabled");
    } else {
      btnMinus2DGDHD?.classList.remove("disabled");
      btnPlus2DGDHD?.classList.remove("disabled");
    }

    if (quantityBigEx1 === 0) {
      btnMinusBigEx1.classList.add("disabled");
    } else {
      btnMinusBigEx1.classList.remove("disabled");
    }

    if (quantityBigEx2 === 0) {
      btnMinusBigEx2.classList.add("disabled");
    } else {
      btnMinusBigEx2.classList.remove("disabled");
    }

    if (quantityBig1 === 0) {
      btnMinusBig1.classList.add("disabled");
    } else {
      btnMinusBig1.classList.remove("disabled");
    }

    if (quantityBig2 === 0) {
      btnMinusBig2.classList.add("disabled");
    } else {
      btnMinusBig2.classList.remove("disabled");
    }
  });

  useEffect(() => {
    setPrice2DTong(quantity2D * gia2D);
    setPrice2DTVTong(quantity2DTV * gia2DTV);
    setPrice2DGDHDTong(quantity2DGDHD * gia2DGD);
    setPrice2DGDTong(quantity2DGD * 160);
    setPrice2DGDTVTong(quantity2DGDTV * 150);
    setPriceBigEx1(quantityBigEx1 * 99);
    setPriceBigEx2(quantityBigEx2 * 120);
    setPriceBig1(quantityBig1 * 89);
    setPriceBig2(quantityBig2 * 109);
  });

  const handlePlus2D = () => {
    if (quantity2D < 8) {
      setQuantity2D(quantity2D + 1);
    }
  };

  const handleMinus2D = () => {
    if (quantity2D > 0) {
      setQuantity2D(quantity2D - 1);
    }
  };

  const handlePlus2DTV = () => {
    if (quantity2DTV < 8) {
      setQuantity2DTV(quantity2DTV + 1);
    }
  };

  const handleMinus2DTV = () => {
    if (quantity2DTV > 0) {
      setQuantity2DTV(quantity2DTV - 1);
    }
  };

  const handlePlus2DGD = () => {
    if (quantity2DGD < 8) {
      setQuantity2DGD(quantity2DGD + 1);
    }
  };

  const handleMinus2DGD = () => {
    if (quantity2DGD > 0) {
      setQuantity2DGD(quantity2DGD - 1);
    }
  };

  const handlePlus2DGDTV = () => {
    if (quantity2DGDTV < 8) {
      setQuantity2DGDTV(quantity2DGDTV + 1);
    }
  };

  const handleMinus2DGDTV = () => {
    if (quantity2DGDTV > 0) {
      setQuantity2DGDTV(quantity2DGDTV - 1);
    }
  };

  const handlePlus2DGDHD = () => {
    if (quantity2DGDHD < 8) {
      setQuantity2DGDHD(quantity2DGDHD + 1);
    }
  };

  const handleMinus2DGDHD = () => {
    if (quantity2DGDHD > 0) {
      setQuantity2DGDHD(quantity2DGDHD - 1);
    }
  };

  const handlePlusBigEx1 = () => {
    setQuantityBigEx1(quantityBigEx1 + 1);
  };

  const handleMinusBigEx1 = () => {
    if (quantityBigEx1 > 0) {
      setQuantityBigEx1(quantityBigEx1 - 1);
    }
  };

  const handlePlusBigEx2 = () => {
    setQuantityBigEx2(quantityBigEx2 + 1);
  };

  const handleMinusBigEx2 = () => {
    if (quantityBigEx2 > 0) {
      setQuantityBigEx2(quantityBigEx2 - 1);
    }
  };

  const handlePlusBig1 = () => {
    setQuantityBig1(quantityBig1 + 1);
  };

  const handleMinusBig1 = () => {
    if (quantityBig1 > 0) {
      setQuantityBig1(quantityBig1 - 1);
    }
  };

  const handlePlusBig2 = () => {
    setQuantityBig2(quantityBig2 + 1);
  };

  const handleMinusBig2 = () => {
    if (quantityBig2 > 0) {
      setQuantityBig2(quantityBig2 - 1);
    }
  };

  const handleOk = () => {
    const alertVe = document.querySelector(
      ".book-ticket-alert"
    ) as HTMLDivElement;
    const modal = document.querySelector(".modal") as HTMLDivElement;

    alertVe.style.top = "-50%";
    alertVe.style.opacity = "0";
    modal.style.display = "none";
    document.body.style.overflowY = "auto";

  };

  return (
    <div className="book-ticket">
      <div className="book-ticket-alert">
        <h1>Thông báo</h1>
        <p>Vui lòng chọn số lượng vé</p>
        <button className="btn-ok" onClick={handleOk}>OK</button>
      </div>
      <div className="book-ticket-right">
        <h2>CHỌN VÉ/THỨC ĂN</h2>
        <div className="book-ticket-right-top">
          <div className="book-ticket-right-top-title">
            <h4>Loại vé</h4>
            <h4>Số lượng</h4>
            <h4>Giá (VNĐ)</h4>
            <h4>Tổng (VNĐ)</h4>
          </div>
          <ul className="book-ticket-right-top-content">
            <li>
              <div className="book-ticket-right-top-content-2d">
                {info.thu === 2 ? (
                  <div className="loai-ve">
                    <h5>Happy Day</h5>
                    <h5></h5>
                  </div>
                ) : (
                  <div className="loai-ve">
                    <h5>Nguoi Lon</h5>
                    <h5>Vé 2D</h5>
                  </div>
                )}

                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-2d"
                    onClick={handleMinus2D}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input type="text" className="quantity" value={quantity2D} />
                  <div className="btn-plus btn-plus-2d" onClick={handlePlus2D}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">{gia2D}.000</div>
                <div className="tong">
                  {price2DTong === 0 ? price2DTong : price2DTong + ".000"}
                </div>
              </div>
            </li>
            <li>
              <div className="book-ticket-right-top-content-2dtv">
                <div className="loai-ve">
                  <h5>Ve 2D Thanh Vien</h5>
                  <h5>Vé 2D-Chỉ áp dụng khách hàng thành viên</h5>
                </div>
                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-2dtv"
                    onClick={handleMinus2DTV}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input
                    type="text"
                    className="quantity"
                    value={quantity2DTV}
                  />
                  <div
                    className="btn-plus btn-plus-2dtv"
                    onClick={handlePlus2DTV}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">{gia2DTV}.000</div>
                <div className="tong">
                  {price2DTVTong === 0 ? price2DTVTong : price2DTVTong + ".000"}
                </div>
              </div>
            </li>
            {info.thu === 2 ? (
              <li>
                <div className="book-ticket-right-top-content-gd">
                  <div className="loai-ve">
                    <h5>Ghe Doi Happy Day</h5>
                    <h5>Vé ghế đôi (bao gồm 2 vé) áp dụng ngày Happy Day</h5>
                  </div>
                  <div className="so-luong">
                    <div
                      className="btn-minus btn-minus-2dgdhd"
                      onClick={handleMinus2DGDHD}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <input
                      type="text"
                      className="quantity"
                      value={quantity2DGDHD}
                    />
                    <div
                      className="btn-plus btn-plus-2dgdhd"
                      onClick={handlePlus2DGDHD}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <div className="gia">{gia2DGD}.000</div>
                  <div className="tong">
                    {price2DGDHDTong === 0
                      ? price2DGDHDTong
                      : price2DGDHDTong + ".000"}
                  </div>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <div className="book-ticket-right-top-content-gd">
                    <div className="loai-ve">
                      <h5>Ghe Doi</h5>
                      <h5>Vé ghế đôi (bao gồm 2 vé)</h5>
                    </div>
                    <div className="so-luong">
                      <div
                        className="btn-minus btn-minus-2dgd"
                        onClick={handleMinus2DGD}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        className="quantity"
                        value={quantity2DGD}
                      />
                      <div
                        className="btn-plus btn-plus-2dgd"
                        onClick={handlePlus2DGD}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="gia">160.000</div>
                    <div className="tong">
                      {price2DGDTong === 0
                        ? price2DGDTong
                        : price2DGDTong + ".000"}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="book-ticket-right-top-content-gdtv">
                    <div className="loai-ve">
                      <h5>Ghe Doi Thanh Vien</h5>
                      <h5>Vé ghế đôi ( bao gồm 2 vé) áp dụng cho Thành viên</h5>
                    </div>
                    <div className="so-luong">
                      <div
                        className="btn-minus btn-minus-2dgdtv"
                        onClick={handleMinus2DGDTV}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        className="quantity"
                        value={quantity2DGDTV}
                      />
                      <div
                        className="btn-plus btn-plus-2dgdtv"
                        onClick={handlePlus2DGDTV}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="gia">150.000</div>
                    <div className="tong">
                      {price2DGDTVTong === 0
                        ? price2DGDTVTong
                        : price2DGDTVTong + ".000"}
                    </div>
                  </div>
                </li>
              </>
            )}

            <li>
              <div className="tong-gia-ve">
                <h4>Tổng</h4>
                <h4>{totalTong1 === 0 ? totalTong1 : totalTong1 + ".000"}</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="book-ticket-right-bottom">
          <div className="book-ticket-right-bottom-title">
            <h4>Combo</h4>
            <h4>Số lượng</h4>
            <h4>Giá (VNĐ)</h4>
            <h4>Tổng (VNĐ)</h4>
          </div>
          <ul className="book-ticket-right-bottom-content">
            <li>
              <div className="book-ticket-right-bottom-content-combo1ex">
                <div className="combo">
                  <div className="combo-img">
                    <img src={combo1ex} alt="" />
                  </div>
                  <div className="combo-des">
                    <h5>ICombo 1 Big Extra</h5>
                    <p>
                      1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK
                    </p>
                  </div>
                </div>
                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-bigex1"
                    onClick={handleMinusBigEx1}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input
                    value={quantityBigEx1}
                    type="text"
                    className="quantity"
                  />
                  <div
                    className="btn-plus btn-plus-bigex1"
                    onClick={handlePlusBigEx1}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">99.000</div>
                <div className="tong">
                  {priceBigEx1 === 0 ? priceBigEx1 : priceBigEx1 + ".000"}
                </div>
              </div>
            </li>
            <li>
              <div className="book-ticket-right-bottom-content-combo1ex">
                <div className="combo">
                  <div className="combo-img">
                    <img src={combo2ex} alt="" />
                  </div>
                  <div className="combo-des">
                    <h5>ICombo 2 Big Extra</h5>
                    <p>
                      1 BẮP + 2 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1 SNACK
                    </p>
                  </div>
                </div>
                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-bigex2"
                    onClick={handleMinusBigEx2}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input
                    value={quantityBigEx2}
                    type="text"
                    className="quantity"
                  />
                  <div
                    className="btn-plus btn-plus-bigex2"
                    onClick={handlePlusBigEx2}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">120.000</div>
                <div className="tong">
                  {priceBigEx2 === 0 ? priceBigEx2 : priceBigEx2 + ".000"}
                </div>
              </div>
            </li>
            <li>
              <div className="book-ticket-right-bottom-content-combo1ex">
                <div className="combo">
                  <div className="combo-img">
                    <img src={combo1} alt="" />
                  </div>
                  <div className="combo-des">
                    <h5>ICombo 1</h5>
                    <p>1 BẮP + 1 NƯỚC NGỌT 32 Oz</p>
                  </div>
                </div>
                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-big1"
                    onClick={handleMinusBig1}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input
                    value={quantityBig1}
                    type="text"
                    className="quantity"
                  />
                  <div
                    className="btn-plus btn-plus-big1"
                    onClick={handlePlusBig1}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">89.000</div>
                <div className="tong">
                  {priceBig1 === 0 ? priceBig1 : priceBig1 + ".000"}
                </div>
              </div>
            </li>
            <li>
              <div className="book-ticket-right-bottom-content-combo1ex">
                <div className="combo">
                  <div className="combo-img">
                    <img src={combo2} alt="" />
                  </div>
                  <div className="combo-des">
                    <h5>ICombo 2</h5>
                    <p>1 BẮP + 2 NƯỚC NGỌT 32 Oz</p>
                  </div>
                </div>
                <div className="so-luong">
                  <div
                    className="btn-minus btn-minus-big2"
                    onClick={handleMinusBig2}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <input
                    value={quantityBig2}
                    type="text"
                    className="quantity"
                  />
                  <div
                    className="btn-plus btn-plus-big2"
                    onClick={handlePlusBig2}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="gia">109.000</div>
                <div className="tong">
                  {priceBig2 === 0 ? priceBig2 : priceBig2 + ".000"}
                </div>
              </div>
            </li>
            <li>
              <div className="tong-gia-ve">
                <h4>Tổng</h4>
                <h4>{totalTong2 === 0 ? totalTong2 : totalTong2 + ".000"}</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
