import React from 'react'
import "./ThanhToan.scss"

const phuongthuc = [
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
                <h4>Hình thức thanh toán</h4>
                <Select options={} />
            </div>
        </div>
    </div>
  )
}

export default ThanhToan