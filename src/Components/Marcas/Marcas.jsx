import React, { useRef, useState, useEffect } from 'react';
import "./Marcas.css";
import fieldlogo from "../../assets/fieldlogo.png";
import donofriologo from "../../assets/donofriologo.png";
import glorialogo from "../../assets/glorialogo.png";
import soldelcuscologo from "../../assets/soldelcuscologo.png";
import nestlelogo from "../../assets/nestlelogo.png";

const Marcas = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const isCloned = useRef(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'default';
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'default';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'default';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; 
    sliderRef.current.scrollLeft = scrollLeft - walk;

    if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
      sliderRef.current.scrollLeft = 0;
    } else if (sliderRef.current.scrollLeft <= 0) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!isCloned.current) {
      const clonedContent = slider.innerHTML;
      slider.innerHTML += clonedContent;
      isCloned.current = true;
    }

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
    <div className='marcas'>
      <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown}>
        <div className='marcastodo'>
          <img src={fieldlogo} alt="" />
          <img src={donofriologo} alt="" />
          <img src={glorialogo} alt="" />
          <img src={soldelcuscologo} alt="" />
          <img src={nestlelogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Marcas;


