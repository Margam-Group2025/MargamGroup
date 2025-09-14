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
            <h1 className='text-black lg-text-[45px] text-[30px] capitalize leading-[1.2em] font-[20px]'>
              MARGAM GROUP 
              <br />
              <span className='text-neutral-500 font-extralight'>_____The Way_____</span>
            </h1>
            <p className='text-gray-500 text-md'>
             Margam Group is a multi-venture enterprise shaping the future of real estate, construction, education, 
             and business solutions. With a focus on trust, quality, and innovation, we are committed to creating value for communities, businesses, and individuals across India.
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
               Who We Are
              </h1>
              <p className='text-gray-600 text-md'>
                Margam Group is a diversified organization with strong roots in infrastructure, construction materials, education, and emerging industries. Founded with the vision of building sustainable opportunities, we have steadily
                grown into a brand known for reliability and forward-thinking.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-3" data-aos="fade-up">
              <h1 className='text-black font-semibold text-[35px] capitalize leading-[1.2em]'>
                Why Join Margam Group
              </h1>
              <p className='text-gray-600 text-md'>
                Become a Margaveer
               Our people are our greatest strength. At Margam, we call our team members Margaveers – warriors of growth. We offer an environment 
               where creativity, innovation, and ambition are celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
