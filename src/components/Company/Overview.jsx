import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../Assets/image-box1.jpg";
import Image2 from "../../Assets/image-box2.jpg";
import Image3 from "../../Assets/image-box3.jpg";

const Overview = () => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-blue-600 text-sm font-medium tracking-wide uppercase">
              // WHAT WE OFFER
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Partner for
              <br />
              Software Innovation
            </h1>

            <div className="space-y-4 text-gray-600 text-l leading-relaxed">
              <p>
                KSL is a leading-edge software development company in East
                Africa. Our teams create apps for iOS, OS X Android and Windows
                platforms for our clients, who have grown to millions using
                KSL's technology. We have offices in Kigali, Nairobi and Addis
                Ababa.
              </p>

              <p className="italic text-gray-800 font-medium">
                We create world-class digital experiences implementing various
                cutting-edge technologies like enterprise mobility,cloud and
                mobile solutions that exceed our clients' and customer's
                expectations, and establish them as leaders in their relevant
                fields.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative w-full h-[500px] sm:inline-block hidden">
            {/* Our Mission - Top Left Square */}
            <Link
              to="/mission-vision"
              className="absolute top-0 left-0 overflow-hidden group h-60 w-60"
            >
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-[#42baff]  z-10"></div>
              <img
                src={Image1}
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150 hue-rotate-180 group-hover:brightness-100 group-hover:saturate-100 group-hover:hue-rotate-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-800/40 to-blue-800/60 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative h-full flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">
                  Our Mission
                </h3>
              </div>
            </Link>

            {/* Our Vision - Top Right Square */}
            <Link
              to="/mission-vision"
              className="absolute h-60 w-60 left-72 top-14 overflow-hidden group"
            >
              {/* Smaller tag triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-[#42baff] z-10"></div>

              <img
                src={Image2}
                alt="Our Vision"
                className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150 hue-rotate-180 group-hover:brightness-100 group-hover:saturate-100 group-hover:hue-rotate-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-800/40 to-blue-800/60 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative h-full flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">
                  Our Vision
                </h3>
              </div>
            </Link>

            {/* Why Choose Us - Bottom Left Square */}
            <Link
              to="/why-choose-us"
              className="absolute  h-60 w-60 top-72 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-[#42baff]  z-10"></div>
              <img
                src={Image3}
                alt="Why Choose Us"
                className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150 hue-rotate-180 group-hover:brightness-100 group-hover:saturate-100 group-hover:hue-rotate-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-800/40 to-blue-800/60 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative h-full flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center drop-shadow-lg">
                  Why Choose Us
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
