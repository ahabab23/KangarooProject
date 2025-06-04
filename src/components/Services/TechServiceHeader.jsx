import React from 'react';
import { Check } from 'lucide-react';

const TechServicesHeader = () => {
  return (
    <div className=" py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Machine Learning */}
          <div className="bg-white  p-8 shadow-sm relative">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Machine Learning
                </h3>
                <p className="text-gray-600">
                  Support and Evolution
                </p>
              </div>
            </div>
            <div className="text-6xl font-bold text-gray-100 absolute bottom-4 right-4">
              01
            </div>
          </div>

          {/* Artificial Intelligence */}
          <div className="bg-white  p-8 shadow-sm relative">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-gray-600">
                  Support and Evolution
                </p>
              </div>
            </div>
            <div className="text-6xl font-bold text-gray-100 absolute bottom-4 right-4">
              02
            </div>
          </div>

          {/* Augmented Reality */}
          <div className="bg-white p-8 shadow-sm relative">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-gray-800 rounded-full p-2 flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Augmented Reality
                </h3>
                <p className="text-gray-600">
                  Support and Evolution
                </p>
              </div>
            </div>
            <div className="text-6xl font-bold text-gray-100 absolute bottom-4 right-4">
              03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechServicesHeader;