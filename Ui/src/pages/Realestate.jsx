import React from "react";

export default function Realestate() {
  const HERO_IMG =
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop";
  const CARD_IMG1 =
    "https://sp.yimg.com/ib/th/id/OIP.irtO6mXd8P5czZXS3D0ANwHaFH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1";
    const CARD_IMG2  =
    "https://sp.yimg.com/ib/th/id/OIP.C1ph2U_CJLoadn0KiI-jzgHaEK?pid=Api&w=148&h=148&c=7&dpr=2&rs=1";
    const CARD_IMG3 =
      "https://tse4.mm.bing.net/th/id/OIP.VxgEEDKUdZePoVJbhkuT2QHaEK?pid=Api&P=0&h=180";
    const CARD_IMG4 =
         "https://www.bricknbar.com/static/media/displayhouse2.4f5101f422b9c3e685bd.webp"
    
  const companies = [
    {
      title: "Margam Nirman Pvt. Ltd.",
      role: "The flagship real estate arm focused on modern, peaceful & luxurious living.",
      bullets: [
        "Premium & affordable residential projects",
        "Modern duplex housing & apartments",
        "Township and gated community development",
        "Smart infrastructure & eco-conscious design",
      ],
      img: CARD_IMG1,
    },
    {
      title: "Nirmalya Metropolis Pvt. Ltd.",
      role: "Nirmalya Sai Annex is a vision-driven real estate company focusing on urban development and sustainable living.",
      bullets: [
        "High-rise & mixed-use developments",
        "Commercial & retail real estate",
        "Urban infrastructure projects",
      ],
      img: CARD_IMG2,
    },
    {
      title: "Margam Properties",
      role: "Land development, plotting & investment-ready lands.",
      bullets: [
        "Land acquisition & development",
        "Residential & farm plotting",
        "Investment advisory in real estate",
      ],
      img: CARD_IMG3,
    },
    {
      title: "BricknBar",
      role: "Construction materials e-commerce platform by Margam Group.",
      bullets: [
        "TMT bars, cement, bricks, tiles & fittings",
        "B2B & B2C supply solutions",
        "Verified vendors & on-time delivery",
      ],
      img: CARD_IMG4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative">
        <img
          src={HERO_IMG}
          alt="office"
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 flex items-end">
          <div className="container mx-auto px-6 pb-10 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Realestate Portfolio
            </h2>
            <p className="mt-2 max-w-xl text-lg">
              Margam Group — delivering modern, peaceful and future-ready living
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMPANIES ================= */}
      <section className="container mx-auto px-6 py-12" id="companies">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Real Estate Ventures
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {companies.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full md:w-56 h-full object-cover"
              />

              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.role}</p>

                <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700">
                  {c.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a href="#" className="text-sky-600 hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POWERING GROWTH ================= */}
      <section className="bg-white py-14 mt-10">
        <h2 className="text-3xl font-bold text-center">
          Powering Growth Beyond Boundaries
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our expanding ecosystem in Agriculture and Education that is
          transforming rural and urban development.
        </p>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mt-10 px-6">
          
          {/* AGRICULTURE CARD */}
          <div className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Agriculture</h3>
            <p className="text-gray-600 mb-6">
              Empowering farmers with modern solutions, organic farming
              practices, and sustainable rural development.
            </p>
            <a
              href="/agriculture"
              className="px-5 py-2 bg-green-600 text-white rounded-lg"
            >
              Explore Agriculture →
            </a>
          </div>

          {/* EDUCATION CARD */}
          <div className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-gray-600 mb-6">
              Delivering quality education, skill-based learning and empowering
              young minds for a brighter future.
            </p>
            <a
              href="/education"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Explore Education →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
