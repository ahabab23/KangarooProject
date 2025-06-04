import React from "react";
import {
  FaTabletAlt,
  FaLaptopCode,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const features = [
  {
    number: "01",
    title: "Experience",
    icon: <FaTabletAlt className="text-xl text-white" />,
    text: "We have been working in the industry for 6 years and have created a number of very successful systems. Our specialties include web design and implementation...",
  },
  {
    number: "02",
    title: "Expertise",
    icon: <FaLaptopCode className="text-xl text-white" />,
    text: "Our team is comprised of the best in their field, who are highly experienced and enthusiastic about delivering the best solutions to our clients.",
  },
  {
    number: "03",
    title: "Innovations",
    icon: <FaChartBar className="text-xl text-white" />,
    text: "Every day Kangaroo Solutions remain committed to providing innovative software solutions to our global market of clients.",
  },
  {
    number: "04",
    title: "Agile",
    icon: <FaShieldAlt className="text-xl text-white" />,
    text: "Agile methodologies are used to build high quality software in a timely and cost effective manner. When we develop a software, our team follows the agile..",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#1B1836] py-8 sm:py-12 lg:py-16 text-white min-h-screen lg:h-170">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-50">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map(({ number, title, icon, text }, index) => (
            <div
              key={index}
              className="relative group bg-[#2A2650] py-8 sm:py-10 lg:py-14 px-4 sm:px-5 lg:px-6 overflow-hidden transition duration-500 hover:bg-white hover:text-[#1B1836] flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-auto"
            >
              {/* Faint background number */}
              <span className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 text-[60px] sm:text-[70px] lg:text-[80px] font-extrabold text-[#3C366B] opacity-10">
                {number}
              </span>

              {/* Main content */}
              <div className="relative z-10">
                <h5 className="text-base sm:text-lg lg:text-lg font-semibold mb-2">
                  {title}
                </h5>
                <p className="text-xs sm:text-sm lg:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                  {text}
                </p>
                <a
                  href="https://kangarosolutions.com/why-choose-us/"
                  className="flex items-center text-[#35c1f1] font-medium group-hover:text-[#1B1836] transition text-xs sm:text-sm"
                >
                  <HiArrowRight className="mr-1" /> LEARN MORE
                </a>
              </div>

              {/* Icon in bottom right */}
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 bg-[#443f72] p-2 sm:p-2.5 lg:p-3 rounded transition group-hover:bg-[#1B1836]">
                <div className="text-sm sm:text-base lg:text-xl text-white">
                  {React.cloneElement(icon, { 
                    className: "text-sm sm:text-base lg:text-xl text-white" 
                  })}
                </div>
              </div>

              {/* Decorative half circle */}
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#35c1f1] rounded-tl-full opacity-10 group-hover:opacity-30 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;