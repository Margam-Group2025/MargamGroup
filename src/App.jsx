import { react,useEffect,useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Business from './components/Business';
import Team from './components/Team';
import Footer from './components/Footer';
import Connect from './components/Connect';
import toast, { Toaster } from "react-hot-toast";
function App() {
   
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} /> 
      <Header/>
      <Hero/>
      <About/>
      <Business/>
      <Team/>
      <Connect/>
      <Footer/>
      <Routes>
        <Route path="/" />

      </Routes>
        </>
  )
}

export default App
