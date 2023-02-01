import React from 'react'
import BuyDay from './BuyDay'
import './BuyFastTicket.scss'
import BuyMovie from './BuyMovie'

function BuyFastTicket() {
  return (
    <div className="buy-fast-ticket">
        <h1>MUA VÉ NHANH</h1>
        <div>
            <div>
                <BuyMovie />
            </div>
            <div>
                <BuyDay />
            </div>
        </div>
    </div>
  )
}

export default BuyFastTicket