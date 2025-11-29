import React from 'react';
import { Link } from 'react-router-dom';

const RealEstateItem = ({ image, title, description, focusAreas, link, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center p-4 gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {image && (
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      )}
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-700">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {focusAreas && focusAreas.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 mx-auto md:mx-0 max-w-md">
            {focusAreas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Next
          </a>
        )}
      </div>
    </div>
  );
};

export default RealEstateItem;
