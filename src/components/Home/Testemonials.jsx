import React, { useState } from "react";
import bgMap from "../../Assets/bg-maps-dots.jpg";
import client1 from "../../Assets/testi1.png";
import client2 from "../../Assets/testi2.png";

const testimonialsData = [
  {
    id: 1,
    logo: client1,
    title: "County Governments in Kenya,",
    subtitle: "Real-Time Report Submission Application",
    text: `Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
  {
    id: 2,
    logo: client2,
    title: "Federal Government Of Somalia",
    subtitle: "ICT Consultancy Services",
    text: `Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
  {
    id: 3,
    logo: client1,
    title: "Department Of Defence (Kenya)",
    subtitle: "Client of Company",
    text: `Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const getVisibleCards = () => {
    const secondIndex = (currentIndex + 1) % testimonialsData.length;
    return [testimonialsData[currentIndex], testimonialsData[secondIndex]];
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      className="relative bg-cover bg-center py-8 sm:py-12 md:py-16"
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
        <span className="text-xs sm:text-sm text-purple-600 font-semibold">
          // OUR CLIENTS
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          We are Trusted <br />
          15+ Countries Across Africa
        </h2>

        <div className="relative mt-8 sm:mt-10 md:mt-12 flex items-center justify-center">
          {/* Navigation buttons - hidden on mobile, visible on larger screens */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-8 lg:-left-30 top-1/2 transform -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 text-lg sm:text-2xl font-bold text-gray-700 bg-white/90 rounded-full shadow hover:bg-white z-20 hidden sm:flex items-center justify-center"
          >
            ←
          </button>

          {/* Cards Container */}
          <div className="w-full max-w-7xl overflow-hidden">
            {/* Mobile: Single card view */}
            <div className="flex sm:hidden justify-center">
              <div
                className="bg-white rounded-lg shadow mx-2"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  minHeight: "200px",
                  padding: "16px",
                  boxShadow: "3px 3px 13px 0px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center mb-3">
                  <img
                    decoding="async"
                    src={testimonialsData[currentIndex].logo}
                    alt={testimonialsData[currentIndex].title}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain mr-3"
                  />
                  <div className="tinfo">
                    <h6 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
                      {testimonialsData[currentIndex].title}
                    </h6>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonialsData[currentIndex].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  "{testimonialsData[currentIndex].text}"
                </p>
              </div>
            </div>

            {/* Tablet: Single card view (larger) */}
            <div className="hidden sm:flex md:hidden justify-center">
              <div
                className="bg-white rounded-lg shadow"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  minHeight: "220px",
                  padding: "18px",
                  boxShadow: "3px 3px 13px 0px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    decoding="async"
                    src={testimonialsData[currentIndex].logo}
                    alt={testimonialsData[currentIndex].title}
                    className="h-12 w-12 rounded-full object-contain mr-4"
                  />
                  <div className="tinfo">
                    <h6 className="text-base font-semibold text-gray-900">
                      {testimonialsData[currentIndex].title}
                    </h6>
                    <p className="text-sm text-gray-500">
                      {testimonialsData[currentIndex].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "{testimonialsData[currentIndex].text}"
                </p>
              </div>
            </div>

            {/* Large screens: Two cards view (original layout) */}
            <div className="hidden md:flex gap-6 justify-center">
              {visibleCards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow"
                  style={{
                    width: "600px",
                    minHeight: "250px",
                    padding: "20px",
                    boxShadow: "3px 3px 13px 0px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                  }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      decoding="async"
                      src={item.logo}
                      alt={item.title}
                      className="h-14 w-14 rounded-full object-contain mr-4"
                    />
                    <div className="tinfo">
                      <h6 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h6>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-8 lg:-right-30 top-1/2 transform -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 text-lg sm:text-2xl font-bold text-gray-700 bg-white/90 rounded-full shadow hover:bg-white z-20 hidden sm:flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex sm:hidden justify-center mt-6 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                index === currentIndex ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile swipe buttons */}
        <div className="flex sm:hidden justify-center mt-4 space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 rounded-full shadow hover:bg-white transition-colors duration-500"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 rounded-full shadow hover:bg-white transition-colors duration-500"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
