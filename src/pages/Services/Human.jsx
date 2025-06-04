import React from "react";
import HR from "../../Assets/HCM_picture.jpeg";
import PageTitle from "../../components/PageTitle";
import Image from "../../Assets/bg1-service1.jpg";
import { ArrowRight } from "lucide-react";

function Human() {
  return (
    <>
      <PageTitle />
      <div className="py-16 relative overflow-hidden w-full bg-white">
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          {/* Main Content Layout */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content on the right */}
            <div className="w-full md:w-3/5 pl-0 md:pl-16">
              {/* Header */}
              <div className="mb-8">
                <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
                  // What we offer
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Your Human Capital Development
                </h2>
              </div>

              {/* Main paragraph */}
              <div className="mb-6">
                <p className="text-gray-600 text-base md:text-lg leading-7">
                  Our Human Capital Management (HCM) strategy transforms the
                  traditional administrative functions of human resources (HR)
                  departments—recruiting, training, payroll, compensation, and
                  performance management—into opportunities to drive engagement,
                  productivity, and business value.
                </p>
              </div>

              {/* Highlighted paragraph */}
              <div className="border-l-4 border-purple-600 pl-4">
                <p className="text-gray-600 font-bold text-lg italic">
                  We can help to maintain and modernize your human capital
                  management.
                </p>
              </div>
            </div>

            {/* Phone image on the left */}
            <div className="w-full md:w-2/5 mb-10 md:mb-0">
              <img src={Image} alt="HR" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#211E3B] flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12 leading-tight text-center lg:text-left">
              Build a Strong Employer Brand
            </h1>

            {/* Content */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8 lg:mb-12 min-h-[120px] md:min-h-[100px] lg:h-28 text-center lg:text-left">
              Attract top talent by showcasing your company culture, values, and
              employee benefits. Utilize social media and online platforms to
              cultivate a positive employer image…
            </p>

            {/* Learn More Button */}
            <div className="group cursor-pointer inline-flex items-center justify-center lg:justify-start w-full lg:w-auto">
              <ArrowRight className="w-5 h-5 text-blue-400 mr-3 transition-transform duration-500" />
              <span className="text-blue-400 font-semibold text-sm md:text-base tracking-wide transition-transform duration-500 group-hover:-translate-x-3">
                LEARN MORE
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative overflow-hidden h-64 md:h-80 lg:h-auto sm:inline hidden">
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-transparent to-slate-900/20 lg:from-transparent lg:to-slate-900/20"></div>
          <img
            src={HR}
            alt="Person working on laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Human;