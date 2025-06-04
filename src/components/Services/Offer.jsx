import React from "react";
import bgPhone from "../../Assets/apple-w.png";
import Dots from "../../Assets/bg-art-2.png";

function Offer() {
  return (
    <div className="py-16 relative overflow-hidden w-full bg-white">
      {/* Background dots - extreme right */}
      <div className=" sm:inline hidden absolute -right-10 bottom-20 h-full w-1/3 rotate-3">
        <img 
          src={Dots} 
          alt="Decorative dots" 
          className="w-full h-full object-cover " 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Phone image on the left */}
          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <img 
              src={bgPhone} 
              alt="Apple Watch" 
              className="w-full max-w-md h-auto" 
            />
          </div>

          {/* Text content on the right */}
          <div className="w-full md:w-3/5 pl-0 md:pl-16">
            {/* Header */}
            <div className="mb-8">
              <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
                // What we offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Partner for Mobile Apps Development
              </h2>
            </div>

            {/* Main paragraph */}
            <div className="mb-6">
              <p className="text-gray-600 text-base md:text-lg leading-7">
                Kangaroo Solutions Limited is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
              </p>
            </div>

            {/* Highlighted paragraph */}
            <div className="border-l-4 border-purple-600 pl-4">
              <p className="text-gray-600 font-bold text-lg italic">
                We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;