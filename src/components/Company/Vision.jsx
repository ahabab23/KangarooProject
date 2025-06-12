import React, { useState, useEffect } from "react";
import axios from "axios";

const VisionMissionSection = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://kangaroobackend.onrender.com/api/mission-vision"
        );
        setSections(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mission/vision data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <span className="text-purple-600 font-medium">// ABOUT US</span>
          <h2 className="text-3xl font-bold mt-2">Our Vision and Mission</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center">Loading vision and mission...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <span className="text-purple-600 font-medium">// ABOUT US</span>
        <h2 className="text-3xl font-bold mt-2">Our Vision and Mission</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="group relative p-6 text-center border border-transparent hover:border-gray-200 hover:shadow-md overflow-hidden transition-[background,border,border-radius,box-shadow,transform] duration-5000"
          >
            {/* Hover background image */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{
                backgroundImage: `url(${section.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Hover-only corner element */}
            <span className="absolute top-[-15px] right-[-15px] w-[30px] h-[30px] bg-[#43baff] rotate-45 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

            {/* Content */}
            <div className="relative z-10 transition-colors duration-500 text-gray-800 group-hover:text-white">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="h-16 w-16 object-contain "
                />
              </div>
              <h5 className="text-xl font-semibold mb-3">{section.title}</h5>
              <p className="whitespace-pre-line">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionSection;
