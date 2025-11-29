import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: false,
    });
  }, []);

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://imageio.forbes.com/specials-images/imageserve/61517de15b3fa218e4310d36/960x0.jpg?format=jpg&width=960",
      title: "Margam Group",
      subtitle: "The Way to Build, Grow & Inspire",
      btn: "Get Started",
      link: "/aboutus",
    },
    {
      img: "/realestate.jpg",
      title: "Real Estate & Infrastructure",
      subtitle: "Building for the Future.",
      btn: "Get Started",
      link: "/realestate",
    },
    {
      img: "https://www.equicoopai.com/images/construction-equipment-marketplace.jpeg",
      title: "BricknBar - Construction Materials",
      subtitle: "Your Trusted Partner in Building Materials.",
      btn: "Explore More",
      link: "https://www.bricknbar.com",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2024/9/450722691/OH/CB/KX/229597258/e-commerce-website-design.png",
      title: "Mohepiya - Premium Textiles",
      subtitle: "Weaving Quality, Style, and Comfort for You.",
      btn: "Learn More",
      link: "/",
    },
    {
      img: "https://cdn2.hubspot.net/hubfs/2347101/Imported_Blog_Media/projmgt-e1473358613687.jpg",
      title: "Construction",
      subtitle: "Building Strong Foundations for Your Dreams.",
      btn: "Learn More",
      link: "/construction",
    },
    {
      img: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTE3NTlmNTEwLWQ0MjMtMTFlZi1hYjUxLWYzNTVhNmM0NTNjMi5qcGc=",
      title: "INSD (Education & Skill Development)",
      subtitle: "Designing Careers, Building Futures.",
      btn: "Learn More",
      link: "https://www.insdbhubaneswar.com/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Content */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 text-white space-y-4"
            data-aos="fade-up"
          >
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              {slide.title}
            </h1>

            <h2 className="text-lg md:text-3xl font-medium leading-snug">
              {slide.subtitle}
            </h2>

            <Link to={slide.link}>
              <button className="bg-red-600 px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 text-sm md:text-base">
                {slide.btn}
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Prev Button */}
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

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
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
