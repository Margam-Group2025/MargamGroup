import React from 'react'; 


const ValueCard = ({ title, description }) => (
     <div className="bg-blue-900 border-2 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
         <h3 className="text-2xl font-bold text-yellow-400 mb-4">{title}</h3>
          <p className="text-white text-lg leading-relaxed mb-6 italic"> {description} </p>
           <p className="text-yellow-400 text-5xl font-serif">”</p>
     </div> ); 


const ValuesSection = () => { 
  const values = [ { 
     title: "TO CUSTOMER", 
      description: "We believe in teamwork, growth, and respect. Every employee is a key part of our journey, and we encourage creativity, learning, and leadership at all levels.",
    }, 
    { 
      title: "TO EMPLOYEE",
      description: "Our customers are at the heart of everything we do. We are committed to providing quality, transparency, and long-term trust in every product and service.",
     }, 
     { 
      title: "TO VENDOR",
       description: "We value ethical relationships and mutual success. Our partnerships are built on transparency, reliability, and shared growth.",
    }, 
     { 
      title: "TO COMMUNITY", 
      description: "We aim to contribute to a better tomorrow — through skill development, education, and community empowerment.",
    }, 
    { 
      title: "TO ENVIRONMENT",
    description: "We are committed to eco-conscious development. From green building practices to sustainable agriculture, protecting our planet for future generations.", 
   }, ];
   
   
    return ( 
    <section 
      className="py-20 px-4 md:px-8 lg:px-16 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> 
            {values.map((value, index) => ( 
                <ValueCard
                 key={index} 
                 title={value.title} 
                 description={value.description} 
                 
             /> ))} 
             </div> 
    </section> ); 
  };
export default ValuesSection;