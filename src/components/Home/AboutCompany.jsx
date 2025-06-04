import React from "react";
import { FaAward, FaCog, FaArrowRight } from "react-icons/fa";
import Welcome from "../../Assets/welcome_pg.jpg";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 md:space-y-8">
          {/* Heading */}
          <div className="space-y-2 md:space-y-3">
            <span className="text-purple-700 font-bold uppercase text-xs sm:text-sm tracking-wide">
              // About Company
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-snug">
              Your Partner for Software Development and ICT Consultancy Services
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            KSL is a leading-edge software development company in East Africa.
            Our teams create apps for iOS, OS X Android and Windows platforms
            for our clients, who have grown to millions using KSL's technology.
            We have offices in Kigali, Nairobi and Addis Ababa.
          </p>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2">
            {/* Feature Box 1 (Experience) */}
            <div className="group flex-1 space-y-3 p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaAward className="text-purple-700 text-2xl md:text-3xl" />
              <h5 className="text-lg md:text-xl font-semibold">Experience</h5>

              {/* Animated Divider */}
              <div className="w-full overflow-hidden">
                <div className="h-1 bg-gray-200 w-full scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100 group-hover:bg-purple-700" />
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our great team of more than 1400 software experts.
              </p>
            </div>

            {/* Feature Box 2 (Quick Support) */}
            <div className="group flex-1 space-y-3 p-4 md:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaCog className="text-purple-700 text-2xl md:text-3xl" />
              <h5 className="text-lg md:text-xl font-semibold">
                Quick Support
              </h5>

              {/* Animated Divider */}
              <div className="w-full overflow-hidden">
                <div className="h-1 bg-gray-200 w-full scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100 group-hover:bg-purple-700" />
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We'll help you test bold new ideas while sharing your vision.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image & Link */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="relative aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3 rounded-lg overflow-hidden shadow-lg">
            <img
              src={Welcome}
              alt="About Company"
              className="w-full h-full object-cover"
            />
            {/* Link positioned absolutely within the image container */}
            <div className="absolute bottom-4 left-4">
              <Link
                to="/about-us"
                className="inline-flex items-center  px-4 py-2 rounded-md shadow-sm text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-all duration-200 group"
              >
                <FaArrowRight className="mr-2 text-xs sm:text-sm transition-transform duration-200 group-hover:translate-x-1" />
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
