import React from 'react'
import Hero from '../components/Hero'
import AboutOwner from '../components/AboutOwner'
import About from '../components/About'
import WhatWeDo from '../components/WhatWeDo'
import Brands from '../components/Brands'
import PostPage from '../components/PostPage'
const Home = () => {
  return (
    <div>
        <Hero />
        <AboutOwner />
        <About />
        <WhatWeDo />
        <Brands />
        <PostPage />   
    </div>
  )
}

export default Home