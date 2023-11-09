import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Element/Home";
import NavbarComp from "./components/NavbarComp";
import About from "./Element/About";
import Bisection from "./Element/Bisection";
import Falseposition from './Element/Falseposition';
import OnePointiteration from './Element/OnePointiteration';
import NewtonRaphson from './Element/NewtonRaphson'
import CramerRule from './Element/GaussElimination'
import Regression from './Element/Regression'
import Lagrange from './Element/Lagrange'
function App() {
  return (
    <div >
    <NavbarComp/> 
    <BrowserRouter>
    <Routes>
      <Route path="/ " element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/About" element={<About />} />
      <Route path="/Bisection" element={<Bisection />} />
      <Route path="/Falseposition" element={<Falseposition />} />
      <Route path="/OnePointiteration" element={<OnePointiteration />} />
      <Route path="/NewtonRaphson" element={<NewtonRaphson />} />
      <Route path="/CramerRule" element={<CramerRule />} />
      <Route path="/Regression" element={<Regression />} />
      <Route path="/Lagrange" element={<Lagrange />} />
      

    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;