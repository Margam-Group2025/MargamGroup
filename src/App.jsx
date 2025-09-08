import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Business from './components/Business';
import Team from './components/Team';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Business/>
      <Team/>
      <Footer/>
      <Routes>
        <Route path="/" />

      </Routes>
    </>
  )
}

export default App
