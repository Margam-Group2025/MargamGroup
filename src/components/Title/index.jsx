// Title.jsx
import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="text-center max-w-2xl mx-auto gap-3">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green-600">{title}</h1>
      <br />
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base ">
        {desc}
      </p>
    </div>
  );
};

export default Title;
