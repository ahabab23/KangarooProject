import React from "react";
import { FaAward, FaCog, FaArrowRight } from "react-icons/fa";
import Choice from "../../Assets/why_choose_us.jpg"

const ChooseUs = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image & Link */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1 relative">
            <div className="relative">
              <img
                src={Choice}
                alt="Why-us"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              
           
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full relative top-16 lg:w-1/2 order-2 lg:order-2 space-y-6">
            {/* Heading */}
            <div>
              <span className="text-purple-700 font-bold uppercase text-sm tracking-wide">
                // WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-2xl xl:text-4xl font-bold mt-2 leading-tight text-gray-900">
                Your Partner for Software Innovation
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              KSL is a leading-edge software development company in East Africa. Our
              teams create apps for iOS, OS X Android and Windows platforms for our
              clients, who have grown to millions using KSL's technology. We have
              offices in Kigali, Nairobi and Addis Ababa.
            </p>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Feature Box 1 (Experience) */}
              <div className="group p-6 ">
                <FaAward className="text-purple-700 text-3xl mb-4" />
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Experience</h5>

                {/* Animated Divider */}
                <div className="w-full overflow-hidden mb-3">
                  <div className="h-1 bg-gray-300 w-full scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100 group-hover:bg-purple-700" />
                </div>

                {/* Paragraph */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our great team of more than 1400 software experts.
                </p>
              </div>

              {/* Feature Box 2 (Quick Support) */}
              <div className="group p-6">
                <FaCog className="text-purple-700 text-3xl mb-4" />
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Quick Support</h5>

                {/* Animated Divider */}
                <div className="w-full overflow-hidden mb-3">
                  <div className="h-1 bg-gray-300 w-full scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100 group-hover:bg-purple-700" />
                </div>

                {/* Paragraph */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  We'll help you test bold new ideas while sharing your vision.
                </p>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      
    </section>
  );
};

export default ChooseUs;