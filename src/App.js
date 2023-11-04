import React from 'react'
import Header from './Componants/Header'
import Home from './Componants/Home';
import Beagd from './Componants/Beagd';
import CardDetails from './Componants/CardDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Beagd/>}/>
      <Route path='/cardetails/:id' element={<CardDetails/>}/>
    </Routes>
   
  </div>
  )
}

export default App
