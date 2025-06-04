import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className=" p-8 rounded-lg relative sm:top-10">
      <div className="mb-8">
        <p className="text-sm text-purple-600 font-medium mb-2">// CONTACT DETAILS</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h2>
        <p className="text-gray-600 leading-relaxed">
          Give us a call or drop by anytime, we endeavour to answer all 
          enquiries within 24 hours on business days. We will be happy to 
          answer your questions.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address Card */}
        <div className="group  p-6   hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address:</h3>
              <p className="text-gray-600">
                KS HQ Rose Avenue Kilimani 00100 Nairobi - Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="group  p-6  hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mailbox:</h3>
              <p className="text-gray-600">info@kangarosolutions.com</p>
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group  p-6  hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Phone:</h3>
              <p className="text-gray-600">+254 725 534 153 | +254 700 156 201</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;