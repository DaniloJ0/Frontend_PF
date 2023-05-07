import React from 'react'
import './squadItem.css'
import logo from '../../img/auto_64.png'

function SquadItem({data}) {
  return (
    <div className="col">
          <div className="amount">
            <p>{data.titulo}</p>
            <p>{data.cantidad}</p>
            <p> En los últimos 7 años </p>
          </div>
          <div className="log_squad">
            <img src={logo} alt="" />
          </div>
        </div>
  )
}

export default SquadItem