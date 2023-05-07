import React from 'react'
import './squadItem.css'
import logo from '../../img/auto_64.png'
import iconArrowUp from '../../img/flecha-hacia-arriba_16.png';
import iconArrowDown from '../../img/flecha-hacia-abajo_16.png';

function SquadItem({data}) {
  return (
    <div className="col">
          <div className="amount">
            <p>{data.titulo}</p>
            <p>{data.cantidad}</p>
            <p> En los últimos 8 años <span><img src={data.porcentaje < 0 ? iconArrowDown : iconArrowUp} alt="" /></span></p>
          </div>
          <div className="log_squad">
            <img src={require(`../../img/${data.logoName}`)} alt="" />
          </div>
        </div>
  )
}

export default SquadItem