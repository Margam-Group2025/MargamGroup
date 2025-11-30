import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  "/brands/brand1.avif",
  "/brands/brand2.avif",
  "/brands/brand3.jpg",
  "/brands/brand4.avif",
  "/brands/brand5.avif",
  "/brands/brand6.avif",
];

export default function BrandSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center tracking-widest mb-12">
        OUR BRANDS
      </h2>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {brands.map((brand, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={brand}
              alt="brand"
              className="h-40 w-auto opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
