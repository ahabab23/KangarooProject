import React from "react";
import backgroundCounter from "../../Assets/bg-counter-1.jpg";
import happyClient from "../../Assets/happy_clients2.jpg";

const StatsSection = () => {
  return (
    <section className="relative mb-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-3 sm:px-4 -mt-30 z-50">
        {/* First Card */}
        <div
          className="relative h-48 sm:h-56 md:h-64 bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundCounter})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
          <div className="relative z-10 text-white text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              15 <span className="text-2xl sm:text-3xl">+</span>
            </h2>
            <h5 className="text-base sm:text-lg font-semibold mt-2">
              Countries All-over Africa
            </h5>
            <p className="text-xs sm:text-sm mt-2 leading-relaxed">
              To succeed, every software solution must be deeply integrated into
              the existing tech environment..
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="relative h-48 sm:h-56 md:h-64 bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${happyClient})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
          <div className="relative z-10 text-white text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              10 <span className="text-2xl sm:text-3xl">k</span>
            </h2>
            <h5 className="text-base sm:text-lg font-semibold mt-2">
              Happy Corporate Clients
            </h5>
            <p className="text-xs sm:text-sm mt-2 leading-relaxed">
              To succeed, every software solution must be deeply integrated into
              the existing tech environment..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;