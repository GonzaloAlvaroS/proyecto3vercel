import React from 'react'
import "./Tabla.css"
import tabla from "../../assets/tabla.png"


const Tabla = () => {
  return (
  <div className='tabla'>
    <div className="tablatitulo">
      <p>¿LISTO PARA RECUPERAR TU TIEMPO?</p>
      <h1>Hacemos tu vida más fácil</h1>
    </div>
      <div className='tablainfotodo'>
        <div className='tablainfo1'>
          <img src={tabla} alt="" className='tablaimagen' />
        </div>
      </div>
  </div>
  )
}

export default Tabla
