import React from 'react'
import "./ThanhToan.scss"
import Select from 'react-select'

const phuongThuc = [
    {
        value: "Chọn loại thẻ",
        label: "Chọn loại thẻ"
    }
]

function ThanhToan() {
  return (
    <div className="thanh-toan">
        <div className="thanh-toan-header">
            <h2>VUI LÒNG THANH TOÁN</h2>
            <h2>15:00</h2>
        </div>
        <div className="thanh-toan-content">
            <div className="content-thanh-toan">
                <label htmlFor="phuongthuc">Hình thức thanh toán</label>
                <Select id="phuongthuc" options={phuongThuc} />
            </div>
            <div className="content-input">
                <label htmlFor="name">Họ và Tên</label>
                <input id="name" type="text" value="name" placeholder="Họ và Tên" />
            </div>
            <div className="content-input">
                <label htmlFor="email1">Email</label>
                <input id="email1" type="text" placeholder="Email" value="name@gmail.com" />
            </div>
            <div className="content-input">
                <label htmlFor="phone">Số điện thoại</label>
                <input id="phone" placeholder='Số điện thoại' type="text" value="0927110910" />
            </div>
            <div >
                <div className="content-input-btn">
                    <label htmlFor="giamgia">Mã giảm giá</label>
                    <input id="giamgia" type="text" placeholder="Mã giảm giá"  />
                </div>

                <button>Áp dụng</button>
            </div>
        </div>
    </div>
  )
}

export default ThanhToan