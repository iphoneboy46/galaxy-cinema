import React from 'react'
import BuyDay from './BuyDay'
import './BuyFastTicket.scss'
import BuyMovie from './BuyMovie'
import BuyTheater from './BuyTheater'

function BuyFastTicket() {
  return (
    <div className="buy-fast-ticket">
        <h1>MUA VÉ NHANH</h1>
        <div className="buy-content-list">
            <div className="buy-content-item">
                <h4>Theo Phim</h4>
                <BuyMovie />
            </div>
            <div className="buy-content-item">
                <h4>Theo ngày</h4>
                <BuyDay />
            </div>
            <div className="buy-content-item">
            <h4>Theo rạp</h4>
                <BuyTheater />
            </div>
        </div>
    </div>
  )
}

export default BuyFastTicket