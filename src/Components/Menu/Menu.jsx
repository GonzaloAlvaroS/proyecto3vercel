import React, { useRef, useState, useEffect } from 'react';
import "./Menu.css"
import dulce from "../../assets/dulce.png"
import arrozconleche from "../../assets/arrozconleche.png"
import lecheasada from "../../assets/lecheasada.png"
import budin from "../../assets/budin.png"
import piedemanzana from "../../assets/piedemanzana.png"
import tortadechocolate from "../../assets/tortadechocolate.png"
import alfajor from "../../assets/alfajor.png"
import piedelimon from "../../assets/piedelimon.png"
import brownie from "../../assets/brownie.png"


const Menu = () => {

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'pointer';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'pointer';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startX, scrollLeft]);


  return (
    <div className='menu'>
      <div className='menutitulo'>
        <h1>Tienes que probar</h1>
      </div>
         <div className="slider"  ref={sliderRef} onMouseDown={handleMouseDown}>
           <div className="slide">
             <div className="menu-info">
               <img src={arrozconleche} alt="" className="menuimagen"/>         
               <h3>Arroz con leche</h3>
               <span>(450g)</span>
               <button className="btnpostre2"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/6,00</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
               </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>
          
           <div className="slide">
             <div className="menu-info">
               <img src={lecheasada} alt="" className="menuimagen"/>         
               <h3>Leche Asada</h3>
               <span>(150g)</span>
               <button className="btnpostre2"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/5,00</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
               </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>
         
           <div className="slide">
             <div className="menu-info">
               <img src={budin} alt="" className="menuimagen"/>         
               <h3>Budin</h3>
               <span>(200g)</span>
               <button className="btnpostre1"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/3,50</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>
          
           <div className="slide">
             <div className="menu-info">
               <img src={piedemanzana} alt="" className="menuimagen"/>         
               <h3>Pie de Manzana</h3>
               <span>(600g)</span>
               <button className="btnpostre3"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/6,00</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>

           <div className="slide">
             <div className="menu-info">
               <img src={tortadechocolate} alt="" className="menuimagen"/>         
               <h3>Torta de Chocolate</h3>
               <span>(750g)</span>
               <button className="btnpostre3"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/6,50</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>

           <div className="slide">
             <div className="menu-info">
               <img src={alfajor} alt="" className="menuimagen"/>         
               <h3>Alfajor</h3>
               <span>(150g)</span>
               <button className="btnpostre1"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/4,50</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>

           <div className="slide">
             <div className="menu-info">
               <img src={piedelimon} alt="" className="menuimagen"/>         
               <h3>Pie de Limón</h3>
               <span>(500g)</span>
               <button className="btnpostre2"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/5,50</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>

           <div className="slide">
             <div className="menu-info">
               <img src={brownie} alt="" className="menuimagen"/>         
               <h3>Brownie</h3>
               <span>(450g)</span>
               <button className="btnpostre2"><img src={dulce} alt="" className="imagencantidaddulce"/></button>
               <h2>S/4,00</h2>
             <div className="menu-info2">
               <button className="btncarta">
                 <div className='botontexto1'>
                   <p className="menuinfonumero1">553</p>
                   <p className="menuinfonumero2">43g</p>
                   <p className="menuinfonumero3">36g</p>
                   <p className="menuinfonumero4">25g</p>
                 </div>
                 <div className='botontexto2'>
                   <p>Kilocalorías</p>
                   <p>Proteínas</p>
                   <p>Carbohidratos</p>
                   <p>Grasas</p>
                 </div>
              </button>
             </div>
               <button className="btn btnañadir">AÑADIR</button>
             </div>
           </div>       
         </div>
      <button className="btn btnopciones">VER TODOS</button>
    </div>
  )
}

export default Menu
