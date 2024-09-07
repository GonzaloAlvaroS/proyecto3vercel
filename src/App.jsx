import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useLocation } from 'react-router-dom';

import Partearriba from './Components/Partearriba/Partearriba'
import Navbar from './Components/Navbar/Navbar'
import Principal from './Components/Principal/Principal'
import Pasos from './Components/Pasos/Pasos'
import Menu from './Components/Menu/Menu'
import Franjainfinita from './Components/FranjaInfinita/FranjaInfinita'
import Tabla from './Components/Tabla/Tabla'
import Descuento from './Components/Descuento/Descuento'
import Preguntas from './Components/Preguntas/Preguntas'
import Marcas from './Components/Marcas/Marcas'
import Partebaja from './Components/Partebaja/Partebaja'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ pathname ]); 

  return null;
}

const App = () => { 

  return (
    <Router basename="/">
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path="/" element={
    <div>
    <Partearriba/>
    <Principal/>
    <Pasos/>
    <Menu/>
    <Franjainfinita/>
    <Tabla/>
    <Descuento/>
    <Preguntas/>
    <Marcas/>
    <Partebaja/>
    </div>
    }/>
    </Routes>
    <Partebaja/>
    </Router>
  )
}

export default App
