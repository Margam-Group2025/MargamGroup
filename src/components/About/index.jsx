import React, { useEffect } from 'react'
import AOS from 'aos';
const About = () => {

  useEffect(()=>{
    AOS.init({
      duration: 800,
      delay:200,
      once:false,
    });
  },[]);

  return (
  <>
    <div id='about' className='w-full h-auto flex flex-col items-center 
    justify-between lg:px-[80px] lg:py-[20px] py-[60px] px-[20px] gap-[60px]'>
    <div id='top-box' className='w-full flex flex-col justify-center items-start gap-[10px]'>
      <h1 className='text-themegreen uppercase text-sm font-serif'>Who We Are</h1>
      <h1 className='text-black lg-text-[45px] text-[30px] capitalize leading-[1.2em]'>MARGAM GROUP (The Way)
        <br/>
        <span className='text-neutral-500 font-extralight'>a popular name in odisha</span>
      </h1>
      <p className='text-gray-500 text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, magnam exercitationem molestias minus cupiditate aut veniam ullam qui nam molestiae est quas illum consequatur quasi praesentium facere labore inventore ut?</p>
    </div>
     <div className='lg:w-[40%] w-full flex lg:justify-end items-start'>
      <button className='bg-themegreen hover:bg-black hover:text-white py-4 px-6
      text-black text-md font-semibold mt-5 rounded-md'>LEARN MORE</button>
     </div>
    </div>
    <div id='bottom-box' className='w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]'>
      <div id='img-box' className='lg:w-[40%] w-full'>
        <img src="/about.jpg" alt="" className='w-full bg-cover'/>
      </div>
      <div id='content-box'></div>
    </div>
  </>
  )
}

export default About