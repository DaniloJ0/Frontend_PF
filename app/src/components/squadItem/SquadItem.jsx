import React from 'react'
import './squadItem.css'
import logo from '../../img/auto_64.png'

function SquadItem() {
  return (
    <div className="col">
          <div className="amount">
            <p>Cantidad</p>
            <p>$ 24K</p>
            <p> En los últimos 7 años </p>
          </div>
          <div className="log_squad">
            <img src={logo} alt="" />
          </div>
        </div>
  )
}

export default SquadItem