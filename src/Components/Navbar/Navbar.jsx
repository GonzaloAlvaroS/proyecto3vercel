import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo3 from "../../assets/logo3.png" 
import menu_icon from "../../assets/menu-icon.png"
import loginicono from "../../assets/loginicono.png"
import shoppingcarticono from "../../assets/shoppingcarticono.png"
import { Link } from 'react-scroll'

const Navbar = () => {

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 15 ? setSticky(true) : setSticky(false)
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
}

  return (

     <nav className={`container ${sticky? "dark-nav" : ""}`}>   
      <img src={logo3} alt="" className='logo' />
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>POSTRES DE LA SEMANA</Link></li>
        <li><Link to="about" smooth={true} offset={-180} duration={500}>CÓMO FUNCIONA</Link></li>
        <li><Link to="servicios" smooth={true} offset={-80} duration={500}>¿QUIÉNES SOMOS?</Link></li>
        <li><Link to="equipo" smooth={true} offset={-70} duration={500}>FAQ'S</Link></li>
        <li><Link to="media" smooth={true} offset={-180} duration={500}><img src={loginicono} alt="" className="navicono" /></Link></li>
        <li><Link to="partebajatodo" smooth={true} offset={-220} duration={500}><img src={shoppingcarticono} alt="" className="navicono" /></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
