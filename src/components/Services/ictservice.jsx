import React from "react";
import {
  Code,
  Smartphone,
  Server,
  TestTube,
  TrendingUp,
  Users,
} from "lucide-react";

export default function ICTServicesSection() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-purple-600 font-medium text-sm mb-2 tracking-wider">
              // OUR SERVICES
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              We Offer a Wide Variety of ICT Consultancy Services
            </h2>
          </div>
          <button className="sm:inline hidden bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 font-semibold tracking-wider transition-colors">
            FREE QUOTE
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Front and Backend Development */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-purple-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Front and Backend Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We carry more than just good coding skills. Our experience
                  makes us stand out from other web development.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Apps Development */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mobile Apps Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create complex enterprise software, ensure reliable software
                  integration, modernise your legacy system.
                </p>
              </div>
            </div>
          </div>

          {/* IT Infrastructure (Servers) */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-gray-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  IT Infrastructure (Servers)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build the product you need on time with an experienced team
                  that uses a clear and effective design process.
                </p>
              </div>
            </div>
          </div>

          {/* QA & Testing */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TestTube className="w-6 h-6 text-purple-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  QA & Testing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Turn to our experts to perform comprehensive, multi-stage
                  testing and auditing of your software.
                </p>
              </div>
            </div>
          </div>

          {/* ICT Counsultancy */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ICT Counsultancy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech, and consolidate app portfolios.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated Team */}
          <div className=" p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-purple-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dedicated Team
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Over the past decade, our customers succeeded by leveraging
                  Intellectsoft's process of building, motivating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
