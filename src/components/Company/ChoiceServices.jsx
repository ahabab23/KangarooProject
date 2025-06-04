import React from "react";
import { Code, FileText } from "lucide-react";
// Import your images at the top
import VisionBgImage from "../../Assets/bg-icon-box1.jpg";
import MissionBgImage from "../../Assets/bg-icon-box2.jpg";
import AgileImage from "../../Assets/bg-icon-box3.jpg";
import ExpImage from "../../Assets/bg-icon-box4.jpg";

const ChoiceServices = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium text-sm tracking-wider uppercase mb-4">
            // ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision and Mission
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Our Innovations Card */}
          <div className="group relative bg-white p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${VisionBgImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <Code className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Innovations
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
              Every day Kangaroo Solutions remain committed to providing innovative software solutions to our global market of clients.
              </p>
            </div>
          </div>

               {/* Our Expertise Card */}
               <div className="group relative bg-white p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${MissionBgImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <Code className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Expertise
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
              Our team is comprised of the best in their field, who are highly experienced and enthusiastic about delivering the best solutions to our clients.
              </p>
            </div>
          </div>

               {/* Our Experience Card */}
               <div className="group relative bg-white p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${AgileImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <Code className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Experience
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
              We have been working in the industry for 6 years and have created a number of very successful systems. Our specialties include web design and implementation mobile apps dev and customer support services
              </p>
            </div>
          </div>

          {/* Our Agile Card */}
          <div className="group relative bg-white  p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
            {/* Background Image on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${ExpImage})` }}
            ></div>
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                  <FileText className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-white transition-colors duration-500">
                Agile
              </h3>

              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
              Agile methodologies are used to build high quality software in a timely and cost effective manner. When we develop a software, our team follows the agile methodology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceServices;
