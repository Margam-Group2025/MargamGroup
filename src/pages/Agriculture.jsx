import React from 'react';

const AgriculturePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section
        className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ backgroundImage: "url('/public/agro.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-down">
            Cultivating Growth, Harvesting Future
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Margam Group is committed to revolutionizing agriculture through sustainable practices, innovation, and community empowerment.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-in">
            Explore Our Initiatives
          </button>
        </div>
      </section>

      {/* 2. About Agriculture Mission */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">Our Agricultural Vision</h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-16">
            Our vision is to lead the way in sustainable agriculture, ensuring food security, promoting ecological balance, and enhancing the livelihoods of farming communities globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-5xl text-green-600 mb-6">🌱</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                Implementing eco-friendly farming methods to preserve natural resources and biodiversity.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-5xl text-green-600 mb-6">💡</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Agro-Tech Innovation</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge technology to optimize yields and improve agricultural efficiency.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-5xl text-green-600 mb-6">🧑‍🌾</div> {/* Icon placeholder */}
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Farmer Empowerment</h3>
              <p className="text-gray-600">
                Supporting farmers with training, resources, and fair market access to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sustainable Practices / Technologies Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">Our Practices & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Practice Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">💧</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Precision Irrigation</h3>
                <p className="text-gray-600 mb-4">
                  Utilizing smart irrigation systems to conserve water and optimize crop growth.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
            {/* Practice Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">☀️</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Renewable Energy Farms</h3>
                <p className="text-gray-600 mb-4">
                  Integrating solar and wind power to reduce carbon footprint in farming operations.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
            {/* Practice Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">🧬</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Bio-organic Fertilizers</h3>
                <p className="text-gray-600 mb-4">
                  Promoting soil health and crop vitality through natural and organic nutrient solutions.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
            {/* Practice Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">🛰️</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Drone Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Using drones for aerial surveillance to monitor crop health and pest detection efficiently.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
            {/* Practice Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Automated Farming</h3>
                <p className="text-gray-600 mb-4">
                  Implementing robotics and AI for tasks like planting, harvesting, and sorting.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
            {/* Practice Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">🌾</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Crop Diversification</h3>
                <p className="text-gray-600 mb-4">
                  Promoting a variety of crops to enhance soil fertility and reduce risks.
                </p>
                <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                  Read More &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Farmer Support & Training */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">Farmer Support & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-lime-50 to-lime-100">
              <div className="text-4xl text-lime-600 mb-4">🧑‍🏫</div>
              <h3 className="text-xl font-semibold text-lime-800">Modern Farming Techniques</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-lime-50 to-lime-100">
              <div className="text-4xl text-lime-600 mb-4">💰</div>
              <h3 className="text-xl font-semibold text-lime-800">Financial Literacy</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-lime-50 to-lime-100">
              <div className="text-4xl text-lime-600 mb-4">📊</div>
              <h3 className="text-xl font-semibold text-lime-800">Market Access Training</h3>
            </div>
            <div className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-lime-50 to-lime-100">
              <div className="text-4xl text-lime-600 mb-4">🌾</div>
              <h3 className="text-xl font-semibold text-lime-800">Crop Management</h3>
            </div>
          </div>
        </div>
      </section>
  
      {/* 6. Gallery Section */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">Farm & Field Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f9397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 1" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1542475737-b4d216f40660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 2" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1579547621706-e3505085489b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 3" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1517594042845-a4ec6d6281b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 4" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1506729226500-6c90e0316410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 5" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1587502537750-f8f9e6d302a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm Gallery 6" className="rounded-lg shadow-md w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section> */}

      {/* 7. CSR / Community Agricultural Initiatives Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-12">Community Agricultural Initiatives</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Margam Group's commitment extends to rural development through agricultural training, resource distribution, and sustainable farming education for local communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 rounded-xl shadow-lg bg-white flex flex-col items-center">
              <div className="text-6xl text-blue-500 mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Partnerships for Rural Growth</h3>
              <p className="text-gray-600">
                Collaborating with local farmers and agricultural organizations to implement best practices.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg bg-white flex flex-col items-center">
              <div className="text-6xl text-red-500 mb-6">🍎</div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Food Security Programs</h3>
              <p className="text-gray-600">
                Initiatives focused on ensuring access to nutritious food for vulnerable populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials - Slider Placeholder */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-green-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Farmer Stories</h2>
          {/* A simple carousel/slider could be implemented here using a library or custom component */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-green-800 p-10 rounded-xl shadow-xl italic text-xl mb-8">
              "Thanks to Margam Group's support and training, my farm's yield has significantly increased, and my family's livelihood has improved."
              <p className="mt-6 font-semibold text-yellow-400">- Rajesh Kumar, Farmer</p>
            </div>
            {/* Navigation dots/arrows would go here for a real slider */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturePage;
