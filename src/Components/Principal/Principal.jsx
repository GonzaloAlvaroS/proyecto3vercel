import React from 'react'
import "./Principal.css"
import postresgeneral from "../../assets/postresgeneral.png"
import checkverde from "../../assets/checkverde.png"

const Principal = () => {

  return (
    <div className='principal'>
      <div className="principal-left">
        <h2>Come rico toda la semana</h2>
      <div className='principal-left2'>
        <p><img src={checkverde} alt="" /> Envíos a toda Lima</p>
        <p><img src={checkverde} alt="" /> Sin suscripciones, sin compromisos</p>
        <p><img src={checkverde} alt="" /> Tus postres de la semana en una entrega</p>
        <p><img src={checkverde} alt="" /> Sin cocinar, sin limpiar... <b>¡Listo en minutos!</b></p>
      </div>
        <button className='btn btnprincipal'>HAZ YA TU PEDIDO</button>
      </div>
      <div className="principal-right">
        <img src={postresgeneral} alt="" className='imagen'/>
      </div>
    </div>
  )
}

export default Principal
