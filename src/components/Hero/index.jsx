import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HeroSlider() {
  useEffect(() => {
         AOS.init({
           duration: 800,
           delay: 100,
           once: false,
         });
       }, []);
  const [current, setCurrent] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next button handler
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };
  // Prev Button handler
  const prevSlide =()=>{
    setCurrent((prev) => (prev - 1) % totalSlides)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://mggroup.ae/img/about/mg-group.jpg"
          alt="slide1"
          className="w-full h-full object-cover blur-0 brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
        <h1 className="text-6xl font-bold mb-4" >Margam Group </h1>
          <h1 className="text-4xl font-bold mb-4"  >The Way to Build, Grow & Inspire</h1>
          <button className="bg-blue-600 px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://nirmalyasaiannex.com/wp-content/uploads/2023/07/1-Aerial-1-scaled.jpg"
          alt="slide1"
          className="w-full h-full object-cover blur-0 brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
        <h1 className="text-6xl font-bold mb-4">Real Estate & Infrastructure</h1>
          <h1 className="text-4xl font-bold mb-4">Building for the Future.</h1>
          <button className="bg-blue-600 px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>

    
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://www.equicoopai.com/images/construction-equipment-marketplace.jpeg"
          alt="slide2"
          className="w-full h-full object-cover blur-0 brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
          <h1 className="text-6xl font-bold mb-4">BricknBar-Construction Materials</h1>
          <h1 className="text-4xl font-bold mb-4">Your Trusted Partner in Building Materials.</h1>
          <button className="bg-green-600 px-5 py-2 rounded-lg shadow-lg hover:bg-green-700">
            Explore More
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2024/9/450722691/OH/CB/KX/229597258/e-commerce-website-design.png"
          alt="slide3"
          className="w-full h-full object-cover blur-0 brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
          <h1 className="text-6xl font-bold mb-4">Mohepiya - Premium Textiles</h1>
          <h1 className="text-4xl font-bold mb-4">Weaving Quality, Style, and Comfort for You.</h1>
          <button className="bg-red-600 px-5 py-2 rounded-lg shadow-lg hover:bg-red-700">
            Learn More
          </button>
        </div>
      </div>
      
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTE3NTlmNTEwLWQ0MjMtMTFlZi1hYjUxLWYzNTVhNmM0NTNjMi5qcGc="
          alt="slide3"
          className="w-full h-full object-cover blur-0 brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">INSD(Education & Skill Development)</h1>
          <h1 className="text-4xl font-bold mb-4">Designing Careers, Building Futures.</h1>
          <button className="bg-red-600 px-5 py-2 rounded-lg shadow-lg hover:bg-red-700">
            Learn More
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          current === 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://cdn2.hubspot.net/hubfs/2347101/Imported_Blog_Media/projmgt-e1473358613687.jpg"
          alt="slide3"
          className="w-full h-full object-cover blur-sm brightness-50"
        />
        <div className="absolute top-1/3 left-10 text-white" data-aos="fade-up">
          <h1 className="text-6xl font-bold mb-4"> Construction</h1>
<h1 className="text-4xl font-bold mb-4">Building Strong Foundations for Your Dreams.</h1>
          <button className="bg-red-600 px-5 py-2 rounded-lg shadow-lg hover:bg-red-700">
            Learn More
          </button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute bottom-6 left-6 bg-black/60 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-black/80"
      >
        <ChevronLeft /> Prev
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute bottom-6 right-6 bg-black/60 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-black/80"
      >
        Next <ChevronRight />
      </button>
       {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {[0, 1, 2 ,3 ,4, 5 ].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
