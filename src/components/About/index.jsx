import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';   

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div id='about' className='w-full h-auto flex flex-col items-center 
        justify-between lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-3'>
        
        {/* Top Box */}
        <div id='top-box'
          className='w-full flex lg:flex-row flex-col items-center justify-between gap-3'
          data-aos="fade-up"
        >
          <div className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-4'>
            <h1 className='text-green-600 uppercase text-md'>Who We Are</h1>
            <h1 className='text-black lg-text-[45px] text-[30px] capitalize leading-[1.2em]'>
              MARGAM GROUP (The Way)
              <br />
              <span className='text-neutral-500 font-extralight'>a popular name in odisha</span>
            </h1>
            <p className='text-gray-500 text-md'>
              Our group unites real estate, construction, interiors, e-commerce, education, textiles, and materials, 
              creating trusted solutions that inspire growth, elevate lifestyles,
              and shape a sustainable future with excellence and innovation.
            </p>
          </div>
          <div className='lg:w-[40%] w-full flex lg:justify-end items-start'>
            <button className='bg-green-600 hover:bg-black hover:text-white py-4 px-6
              text-black text-md font-semibold mt-5 rounded-md'>
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Bottom Box */}
        <div id='bottom-box'
          className='w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]'
          data-aos="fade-right"
        >
          <div id='img-box' className='lg:w-[40%] w-full' data-aos="zoom-in">
            <img src="/about.jpg" alt="" className='w-full bg-cover' />
          </div>

          <div id='content-box'
            className='lg:w-[60%] w-full flex flex-col items-start justify-between gap-[60px]'
          >
            <div className="flex flex-col items-start justify-center gap-3" data-aos="fade-left">
              <h1 className='text-black font-semibold text-[35px] capitalize leading-[1.2em]'>
                our vision
              </h1>
              <p className='text-gray-600 text-md'>
                Our vision is to redefine progress by uniting innovation, sustainability, and excellence, crafting solutions that enhance living, strengthen communities, and create
                meaningful value across industries for a brighter tomorrow.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-3" data-aos="fade-up">
              <h1 className='text-black font-semibold text-[35px] capitalize leading-[1.2em]'>
                What we do
              </h1>
              <p className='text-gray-600 text-md'>
                We specialize in building dreams through real estate, construction, and interiors, strengthening industries with textiles and education, and redefining convenience with e-commerce,
                all driven by quality, sustainability, and customer trust.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-3" data-aos="fade-up">
              <h1 className='text-black font-semibold text-[35px] capitalize leading-[1.2em]'>
                Future outlook
              </h1>
              <p className='text-gray-600 text-md'>
                We envision a future of boundless growth, where technology, sustainability, and creativity converge to elevate industries, redefine possibilities, and
                establish our group as a trusted leader in worldwide transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
