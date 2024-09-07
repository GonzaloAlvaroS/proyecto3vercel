import React from 'react'
import "./Partebaja.css"
import logo3 from "../../assets/logo3.png"
import instagramlogo from "../../assets/instagramlogo.png"
import facebooklogo from "../../assets/facebooklogo.png"


const Partebaja = () => {
  const handleButtonClick = () => {
    window.open('https://www.instagram.com/knoweats/', '_blank');
  };
  const handleButtonClick2 = () => {
    window.open('https://www.facebook.com/Knoweats/', '_blank');
  };


  return (
    <div className='partebajatodo'>
      <div className='partebajainfotodo'>
        <div className='infobaja'>
          <img src={logo3} alt="" className='logopartebaja'/>
            <div className='logoboton'>
              <img src={instagramlogo} alt="" onClick={handleButtonClick} />
              <img src={facebooklogo} alt="" onClick={handleButtonClick2}/>
            </div>
        </div>
        <div className='infobaja'>
          <h3>Empresa</h3>
          <p>¿Como funciona?</p>
          <p>¿Quiénes somos?</p>
          <p>Sistemas de Envíos</p>
          <p>Trabaja con nosotros</p>
          <p>Plastic Neutral</p>
       </div>
       <div className='infobaja'>
         <h3>Productos y Servicios</h3>
         <p>Menú de la semana</p>
         <p>Comidas para empresa</p>
         <p>Recargar el monedero</p>
       </div>
       <div className='infobaja infobaja3'>
         <h3>información</h3>
         <p className='doblelinea'>Preguntas frecuentes - Alta Pinta</p>
         <p>Política de privacidad</p>
         <p className='doblelinea'>Terminos y condiciones de uso</p>
         <p>Aviso legal</p>
         <p>Envíos</p>
         <p>Devoluciones</p>
         <p>GDPR Compliance</p>
       </div>
       <div className='infobaja'>
         <h3>Contacto</h3>
         <p>Contact con nosotros</p>
         <p>info@altapinta.com</p>
       </div>
      </div>
    </div>
  )
}

export default Partebaja



