import React, { useContext, useEffect, useMemo, useState } from "react";
import "./ThanhToan.scss";
import Select from "react-select";
import { UserContext } from "../UserContext/UserContext";
import { GheContext } from "../GheContext/GheContext";

interface ThanhToanProps {
  choosePage: React.Dispatch<React.SetStateAction<number>>;
}

const phuongThuc = [
  {
    value: 0,
    label: "Chọn loại thẻ",
  },
  {
    value: 1,
    label: "Ví Điện Tử MoMo",
  },
  {
    value: 2,
    label: "ZaloPay: Bạn mới 9k/ vé",
  },
  {
    value: 3,
    label: "VNPAY",
  },
  {
    value: 4,
    label: "Ví ShopeePay (Nhập SPPCINEEU trên ví giảm 30K)",
  },
];

function ThanhToan({ choosePage }: ThanhToanProps) {
  const userContext = useContext(UserContext);
  const gheContext = useContext(GheContext);

  const [email, setEmail] = useState<string>(userContext.account.email);
  const [name, setName] = useState<string>(userContext.account.displayName);
  const [thanhtoan, setThanhtoan] = useState<number>(0);
  console.log(thanhtoan);
  const [minues, setMinues] = useState<number>(15);
  const [second, setSecond] = useState<number>(60);
  const [listVe, setListVe] = useState<any>(
    JSON.parse(localStorage.getItem("datve") || "{}")
  );

  console.log(listVe);

  const ghe = gheContext?.chooseList as any;
  const info = JSON.parse(localStorage.getItem("info") || "{}");

  const list = {
    ngay: info.date,
    galaxy: info.galaxy,
    rap: info.rap,
    name: info.name1,
    suatchieu: info.suatchieu,
    ghe: ghe,
  } as any;

  useEffect(() => {
    if (second === 0) {
      setSecond(60);
      setMinues(minues - 1);
    }
    const time = setTimeout(() => {
      setSecond(second - 1);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [second]);

  const handleQuayLai = () => {
    choosePage(1);
  };

  const handleThanhToan = () => {
    const alert1 = document.querySelector(".thanh-toan-alert1") as HTMLElement;
    const modal = document.querySelector(".modal") as HTMLElement;

    if (thanhtoan > 0) {
      setListVe([list]);
      if (list.name === info.name1) {
        setListVe([...listVe, list]);
      }
    } else {
      alert1.style.opacity = "1";
      alert1.style.top = "10%";
      alert1.style.animation = "PhongTo";
      alert1.style.animationDuration = "0.5s";
      alert1.style.animationTimingFunction = "linear";

      modal.style.display = "block";

    }
  };

  const handleExits1 = () => {
    const alert1 = document.querySelector(".thanh-toan-alert1") as HTMLElement;
    const modal = document.querySelector(".modal") as HTMLElement;
    alert1.style.opacity = "0";
    alert1.style.top = "-100%";
    modal.style.display = "none";
  };

  localStorage.setItem("datve", JSON.stringify(listVe));

  return (
    <div className="thanh-toan">
      <div className="thanh-toan-alert1">
        <div className="close" onClick={handleExits1}>
          X
        </div>
        <h2>Thông báo</h2>
        <p>Vui lòng chọn hình thức thanh toán</p>
        <button>OK</button>
      </div>
      <div className="thanh-toan-header">
        <h2>VUI LÒNG THANH TOÁN</h2>
        <h2>
          {minues}:{second === 60 ? "00" : second}
        </h2>
      </div>
      <div className="thanh-toan-content">
        <div className="content-thanh-toan">
          <label htmlFor="phuongthuc">Hình thức thanh toán</label>
          <Select
            className="select"
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
                fontSize: "14px",
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "#A9A4AD",
                fontSize: "14px",
              }),
              option: (provided) => ({
                ...provided,
                color: "black",
                fontSize: "14px",
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
            id="phuongthuc"
            options={phuongThuc}
            onChange={(event: any) => {
              setThanhtoan(event.value);
            }}
          />
        </div>
        <div className="content-input">
          <label htmlFor="name">Họ và Tên</label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="name"
            type="text"
            value={name}
            placeholder="Họ và Tên"
          />
        </div>
        <div className="content-input">
          <label htmlFor="email1">Email</label>
          <input
            id="email1"
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        {/* <div className="content-input">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            id="phone"
            placeholder="Số điện thoại"
            type="text"
            value="0927110910"
          />
        </div> */}
        <div className="content-input-btn">
          <div className="content-input">
            <label htmlFor="giamgia">Mã giảm giá</label>
            <input id="giamgia" type="text" placeholder="Mã giảm giá" />
          </div>

          <button>Áp dụng</button>
        </div>

        <div className="content-thanh-toan-end">
          <div className="content-thanh-toan-end-note">
            <p>
              (*) Bằng việc click/chạm vào THANH TOÁN, bạn đã xác nhận hiểu rõ
              các{" "}
              <a href="https://www.galaxycine.vn/khuyen-mai/quy-dinh-giao-dich-truc-tuyen-tai-galaxy-cinema">
                Quy Định Giao Dịch Trực Tuyến
              </a>{" "}
              của Galaxy Cinema.
            </p>
          </div>
          <div className="content-thanh-toan-end-btn">
            <div onClick={handleQuayLai} className="btn-quay-lai">
              Quay lại
            </div>
            <div onClick={handleThanhToan} className="btn-thanh-toan">
              Thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanhToan;
