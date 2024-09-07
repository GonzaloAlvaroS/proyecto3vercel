import React from 'react'
import "./Descuento.css"
import postresvertical from "../../assets/postresvertical.png"
import checkverde from "../../assets/checkverde.png"
import barraporcentaje from "../../assets/barraporcentaje.mp4"

const Descuento = () => {

  return (
    <div className='descuento'>
      <div className="descuento-left">
        <h3>AHORA CON ALTA PINTA...</h3>
        <h1>Pide más, paga menos.</h1>
        <p>Obtén descuentos en cada unos de tus pedidos, cuanto más postres añadas, mayor sera tu descuento...</p>  
      <div className='descuento-left2'>
        <p><img src={checkverde} alt="" /> A partir de <b>3 postres:</b> obtén un <b>5%</b> de descuento.</p>
        <p><img src={checkverde} alt="" /> A partir de <b>5 postres:</b> obtén un <b>8%</b> de descuento.</p>
        <p><img src={checkverde} alt="" /> A partir de <b>7 postres:</b> obtén un <b>10%</b> de descuento.</p>
        <video width="450" loop autoPlay muted>
        <source src={barraporcentaje}/>
        </video> 
      </div>
      </div>
      <div className="descuento-right">
        <img src={postresvertical} alt="" className='imagen1'/>
      </div>
    </div>
  )
}

export default Descuento