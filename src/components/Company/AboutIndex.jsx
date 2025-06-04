import React, { useEffect, useState } from 'react';
import Image from "../../Assets/big-logo-home2.png";

const TechnologyIndex = () => {
  const technologies = [
    { name: 'FRONT-END AND BACK-END DEVELOPMENT', percentage: 70 },
    { name: 'MOBILE APP DEVELOPMENT', percentage: 90 },
    { name: 'ICT CONSULTANCY', percentage: 60 }
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // delay helps smooth animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-blue-600 text-sm font-medium tracking-wide uppercase">
              // TECHNOLOGY INDEX
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Improve and Innovate with the Tech Trends
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We hire and build your own remote dedicated development teams tailored to 
              your specific needs.
            </p>

            {/* Technology Bars */}
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium text-sm uppercase tracking-wide">
                      {tech.name}
                    </span>
                    <span className="text-gray-800 font-bold">
                      {tech.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${tech.percentage}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-8 h-8 bg-cyan-500 rounded-full opacity-60"></div>
            <div className="absolute top-20 right-16 w-6 h-6 bg-blue-600 rounded-full opacity-40"></div>
            <div className="absolute bottom-20 left-16 w-10 h-10 bg-blue-500 rounded-full opacity-50"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
              .com
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={Image}
                alt="Tech Visual"
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyIndex;
