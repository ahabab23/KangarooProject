import React from 'react';
import Programming from "../../Assets/prgramming.jpg"

const ProgrammingServicesSection = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img 
              src={Programming}
              alt="Programming code on computer screen" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-8">
              <p className="text-purple-600 font-medium text-sm uppercase tracking-wider mb-4">
                // ABOUT SERVICE
              </p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                We provide best front and back-end development using the following programming languages
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Java */}
              <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">01.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Java</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Java solutions.
                </p>
              </div>

              {/* PHP */}
              <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">02.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">PHP</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality PHP solutions.
                </p>
              </div>

              {/* Python */}
              <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">03.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Python</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Python solutions.
                </p>
              </div>

              {/* Kotlin */}
              <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">04.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Kotlin</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Kotlin solutions.
                </p>
              </div>
                {/* Swift */}
                <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">05.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Swift</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Swift solutions.
                </p>
              </div>
                {/* Scala */}
                <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">06.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Scala</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Scala solutions.
                </p>
              </div>
                {/* Go */}
                <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">07.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Go</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Go solutions.
                </p>
              </div>
                {/* Ruby */}
                <div>
                <div className="mb-3">
                  <span className="text-purple-600 font-semibold text-sm">08.</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">Ruby</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to building sustainable and high-quality Ruby solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingServicesSection;