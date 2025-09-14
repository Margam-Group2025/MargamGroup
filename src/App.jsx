import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Business from "./components/Business";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import toast, { Toaster } from "react-hot-toast";
import AboutOwner from "./components/AboutOwner";

function HomePage() {
  return (
    <>
    <div className="overflow-y-hidden">
      <section id="home">
        <Hero />
      </section>
      <section>
      <AboutOwner/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="business">
        <Business />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="connect">
        <Connect />
      </section>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
