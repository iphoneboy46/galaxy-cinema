import React from 'react'
import BuyDay from './BuyDay'
import './BuyFastTicket.scss'
import BuyMovie from './BuyMovie'
import BuyTheater from './BuyTheater'

function BuyFastTicket() {
  return (
    <div className="buy-fast-ticket">
        <h1>MUA VÉ NHANH</h1>
        <div className="buy-content">
            <div>
                <h3>Theo Phim</h3>
                <BuyMovie />
            </div>
            <div>
                <BuyDay />
            </div>
            <div>
                <BuyTheater />
            </div>
        </div>
    </div>
  )
}

export default BuyFastTicket