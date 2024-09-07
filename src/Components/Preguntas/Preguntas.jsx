
import React, { useState } from 'react';
import "./Preguntas.css"


const Preguntas = () => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const toggleRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

  const [mostrarRespuesta2, setMostrarRespuesta2] = useState(false);

  const toggleRespuesta2 = () => {
    setMostrarRespuesta2(!mostrarRespuesta2);
  };

  const [mostrarRespuesta3, setMostrarRespuesta3] = useState(false);

  const toggleRespuesta3 = () => {
    setMostrarRespuesta3(!mostrarRespuesta3);
  };

  const [mostrarRespuesta4, setMostrarRespuesta4] = useState(false);

  const toggleRespuesta4 = () => {
    setMostrarRespuesta4(!mostrarRespuesta4);
  };

  const [mostrarRespuesta5, setMostrarRespuesta5] = useState(false);

  const toggleRespuesta5 = () => {
    setMostrarRespuesta5(!mostrarRespuesta5);
  };
  
  
  return (
    <div className='preguntas'>
      <div className="preguntastitulo">
        <p>TE AYUDAMOS EN LO QUE NECESITES</p>
        <h1>¿Alguna duda?</h1>
      </div>
      <div className='preguntascolumna'>

    <div className='pregunta1todo' onClick={toggleRespuesta}>
      <div className='pregunta1solo'>
        <div className='preguntaslinea'></div>
          <h2 className='pregunta1'>¿Cuándo recibiré mi pedido?</h2>
          <p>+</p>
      </div>
      {mostrarRespuesta && (
        <div id="respuesta" className='respuesta'>
          <p>Haz tu pedido de lunes a domingo (hasta las 23:59h) y <b>recíbelo el martes* siguiente.</b></p>
          <p className='textodoblelinea'>*Importante: Los días de entrega pueden sufrir cambios debido a días festivos (locales y nacionales) y/o huelgas de transporte u otras circunstancias.</p>
          <p className='textocursiva'>El horario de reparto es de 9:00 a 15:00h.</p>
        </div>
      )}
    </div>

    <div className='pregunta2todo' onClick={toggleRespuesta2}>
      <div className='pregunta2solo'>
        <div className='preguntaslinea2'></div>
          <h2 className='pregunta2'>¿Cuándo caducan y cómo se conservan los postres?</h2>
          <p>+</p>
       </div>
       {mostrarRespuesta2 && (
        <div id="respuesta" className='respuesta'>
          <p className='textodoblelinea'>La fecha de caducidad se especifica en la etiqueta trasera de cada plato, éstos <b>tienen una vida útil de 2-3</b> días desde su recepción.</p>
          <p className='textodoblelinea'>Desde que se envasan hasta que te los comes <b>ha de mantenerse la cadena de frío</b>, los recibirás con envío refrigerado y deberás meterlos directamente a tu nevera hasta que los vayas a consumir.</p>
        </div>
      )}
    </div>

    <div className='pregunta3todo' onClick={toggleRespuesta3}>
      <div className='pregunta3solo'>
        <div className='preguntaslinea2'></div>
          <h2 className='pregunta3'>¿Comó abro el paquete con los postres?</h2>
          <p>+</p>
       </div>
       {mostrarRespuesta3 && (
        <div id="respuesta" className='respuesta'>
          <p className='textodoblelinea'>Puedes calentar tanto en microondas como en sartén. Para el microondas debes retirar o agujerear el film protector y aunque la bandeja es apta para calentar en el micro, recomendamos colocar la comida en un plato y calentar el tiempo recomendado que se especifica en la etiqueta de cada táper.</p>
          <p className='textodoblelinea'>*Importante: Los días de entrega pueden sufrir cambios debido a días festivos (locales y nacionales) y/o huelgas de transporte u otras circunstancias.</p>
        </div>
      )}
    </div>

    <div className='pregunta4todo' onClick={toggleRespuesta4}>
      <div className='pregunta4solo'>
        <div className='preguntaslinea2'></div>
          <h2 className='pregunta4'>¿Puedo elegir una hora específica de entrega?</h2>
          <p>+</p>
        </div>
        {mostrarRespuesta4 && (
        <div id="respuesta" className='respuesta'>
          <p>La franja horaria establecida para el reparto es <b>de 9:00h a 15:00h.</b></p>
          <p className='textodoblelinea'>No podemos asegurar una específica de entrega por lo que recomendamos que si por cualquier motivo estaréis ausentes en un horario determinado, nos lo comuniquéis con antelación a la entrega o incluso a la realización del pedido para intentar buscar una solución.</p>
        </div>
      )}
    </div>

    <div className='pregunta5todo' onClick={toggleRespuesta5}>
      <div className='pregunta5solo'>
        <div className='preguntaslinea2'></div>
          <h2 className='pregunta5'>¿Qué pasa si no he estado en casa para recibir mi pedido?</h2>
          <p>+</p>
        <div className={`preguntaslinea3 ${mostrarRespuesta5 ? 'desplazado' : ''}`}></div>
      </div>
      {mostrarRespuesta5 && (
        <div id="respuesta" className='respuesta'>
          <p className='textodoblelinea'>Ponte en contacto con nosotros para volver a gestionar la entrega de nuevo lo antes posible. Dependiendo de la agencia de transporte, cabe la posibilidad de que el pedido se entregue al día siguiente, haremos todo lo posible para que se le entregue con la mayor brevedad.</p>
          <p className='textodoblelinea'>La forma más rápida de ponerte en contacto con nosotros es escribiéndonos al chat de Whatsapp que aparece en la web o enviándonos un correo electrónico a <b>pedidos@altapinta.com</b>.</p>
        </div>
      )}
    </div>
      </div>
    </div>
  )
}

export default Preguntas
