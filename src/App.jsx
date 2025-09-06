import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Routes>
        <Route path="/" />

      </Routes>
    </>
  )
}

export default App
