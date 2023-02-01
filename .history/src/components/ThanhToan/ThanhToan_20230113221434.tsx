import React, { useContext, useState } from "react";
import "./ThanhToan.scss";
import Select from "react-select";
import { UserContext } from "../UserContext/UserContext";

const phuongThuc = [
  {
    value: "Chọn loại thẻ",
    label: "Chọn loại thẻ",
  },
  {
    value: "Ví Điện Tử MoMo",
    label: "Ví Điện Tử MoMo",
  },
  {
    value: "ZaloPay: Bạn mới 9k/ vé",
    label: "ZaloPay: Bạn mới 9k/ vé",
  },
  {
    value: "VNPAY",
    label: "VNPAY",
  },
  {
    value: "Ví ShopeePay (Nhập SPPCINEEU trên ví giảm 30K)",
    label: "Ví ShopeePay (Nhập SPPCINEEU trên ví giảm 30K)",
  },
];

function ThanhToan() {

  const userContext = useContext(UserContext);
  const [email,setEmail] = useState<string>(userContext.account.email);
  console.log(userContext);

  return (
    <div className="thanh-toan">
      <div className="thanh-toan-header">
        <h2>VUI LÒNG THANH TOÁN</h2>
        <h2>15:00</h2>
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
                fontSize: "14px"
              }),
              dropdownIndicator: (base) => ({
                ...base,
                color: "#A9A4AD",
                fontSize: "14px"
                
              }),
              option: (provided) => ({
                ...provided,
                color: "black",
                fontSize: "14px"
                
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
          />
        </div>
        <div className="content-input">
          <label htmlFor="name">Họ và Tên</label>
          <input id="name" type="text" value={userContext.account.displayName} placeholder="Họ và Tên" />
        </div>
        <div className="content-input">
          <label htmlFor="email1">Email</label>
          <input
            id="email1"
            type="text"
            placeholder="Email"
            onChange={(event)=>{
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
            <div className="btn-quay-lai">Quay lại</div>
            <div className="btn-thanh-toan">Thanh toán</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanhToan;
