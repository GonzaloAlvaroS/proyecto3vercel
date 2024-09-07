import React from 'react'
import "./Pasos.css"
import infoimagen1 from "../../assets/infoimagen1.png"
import infoimagen2 from "../../assets/infoimagen2.png"
import infoimagen3 from "../../assets/infoimagen3.png"

const Pasos = () => {
  return (
  <div className='pasos'>
    <div className="pasostitulo">
      <h1>Come rico en tres pasos</h1>
    </div>
      <div className='pasosinfotodo'>
        <div className='pasosinfo1'>
          <img src={infoimagen1} alt="" className='pasosimagen' />
          <h2>1. Elige</h2>
          <p>Nuestros chefs cocinan para ti, una carta nueva cada semana.</p>
        </div>
        <div className='pasosinfo2'>
          <img src={infoimagen2} alt="" className='pasosimagen'/>
          <h2>2. Recibe</h2>
          <p>Te lo enviamos a domicilio en transporte refrigerado.</p>
        </div>
        <div className='pasosinfo3'>
          <img src={infoimagen3} alt="" className='pasosimagen'/>
          <h2>3. Disfruta</h2>
          <p>Tus postres aguantaran 8 dias en tu nevera y los comeras cuando quieras.</p>
        </div>
      </div>
    <button className='btn btnpasos'>¡A COMER RICO!</button>
  </div>
  )
}

export default Pasos
