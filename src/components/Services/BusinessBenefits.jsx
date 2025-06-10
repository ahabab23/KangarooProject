import React from "react";
import bgPattern from "../../Assets/bg-art-1.png";
import Watch from "../../Assets/app-watch-1.jpg";

// Custom Flaticon Icon Component
const FlaticonIcon = ({ iconCode, className = "" }) => (
  <i
    className={`flaticon-icon ${className}`}
    style={{
      fontStyle: "normal",
      fontWeight: "normal",
      fontVariant: "normal",
      textTransform: "none",
      lineHeight: 1,
      WebkitFontSmoothing: "antialiased",
    }}
  >
    {String.fromCodePoint(parseInt(iconCode.substring(1), 16))}
  </i>
);

function BusinessBenefits() {
  return (
    <div className="py-16 relative overflow-hidden w-full">
      <div className="max-w-full mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
            // BUSINESS BENEFITS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Mobile Apps Benefits
          </h2>
        </div>

        {/* Background decorative dots pattern - left side */}
        <div className="sm:inline hidden absolute left-0 w-[450px] h-auto">
          <img
            src={bgPattern}
            alt="Decorative pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Layout */}
        <div className="relative z-10">
          {/* Center Device */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={Watch}
                alt="Apple Watch"
                className="w-60 md:w-80 h-auto"
              />
            </div>
          </div>

          {/* Benefits positioned around the device - Desktop */}
          <div className="relative max-w-6xl mx-auto hidden lg:block">
            {/* Software as a Service - Top Left */}
            <div className="absolute left-8 -top-120 max-w-sm text-right">
              <div className="flex items-start space-x-4 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 ml-14">
                  Software as a Service
                </h3>
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f135"
                    className="text-purple-600 text-xl"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-m mr-14 leading-8">
                51% of smartphone users have
                <br />
                discovered a new company or product.
              </p>
            </div>

            {/* Internet of Things - Middle Left */}
            <div className="absolute left-4 -top-80 max-w-sm text-right">
              <div className="flex items-start space-x-4 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 ml-14">
                  Internet of Things
                </h3>
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f136"
                    className="text-purple-600 text-xl"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-m mr-14 leading-8">
                Move your SaaS products to mobile.
                <br />
                Companies with a professional mobile
              </p>
            </div>

            {/* Android and IOS Apps - Bottom Left */}
            <div className="absolute left-8 -top-40 max-w-sm text-right">
              <div className="flex items-start space-x-4 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 ml-14">
                  Android and IOS Apps
                </h3>
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f137"
                    className="text-purple-600 text-xl"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-m mr-14 leading-8">
                Develop a custom mobile app to thrive in
                <br />a mobile market worth over $100.
              </p>
            </div>

            {/* Social Media - Top Right */}
            <div className="absolute right-28 -top-120 max-w-xs text-left">
              <div className="flex items-start space-x-4 mb-2 justify-end mr-28">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f138"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Social Media
                </h3>
              </div>
              <p className="text-gray-600 text-m ml-20 leading-8">
                80% of time users spend in social
                <br />
                media from their mobile devices.
              </p>
            </div>

            {/* Business Management - Middle Right */}
            <div className="absolute right-12 -top-80 max-w-sm text-right">
              <div className="flex items-start space-x-4 mb-2 justify-end mr-10">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f139"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Business Management
                </h3>
              </div>
              <p className="text-gray-600 text-m mr-2 leading-8">
                65% of sales representatives have
                <br />
                achieved their quotas by adopting.
              </p>
            </div>

            {/* Accounting Apps - Bottom Right */}
            <div className="absolute right-28 -top-40 max-w-xs text-left">
              <div className="flex items-start space-x-4 mb-2 justify-end mr-20">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f140"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Accounting Apps
                </h3>
              </div>
              <p className="text-gray-600 text-m ml-20 leading-8">
                We provide top-tier mobile app
                <br />
                development services for brokers.
              </p>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Stacked vertically */}
          <div className="lg:hidden px-4 space-y-8 mt-8">
            {/* Software as a Service */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f135"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Software as a Service
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                51% of smartphone users have discovered a new company or
                product.
              </p>
            </div>

            {/* Internet of Things */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f136"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Internet of Things
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                Move your SaaS products to mobile. Companies with a professional
                mobile
              </p>
            </div>

            {/* Android and IOS Apps */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f137"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Android and IOS Apps
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                Develop a custom mobile app to thrive in a mobile market worth
                over $100.
              </p>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f138"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Social Media
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                80% of time users spend in social media from their mobile
                devices.
              </p>
            </div>

            {/* Business Management */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f139"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Business Management
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                65% of sales representatives have achieved their quotas by
                adopting.
              </p>
            </div>

            {/* Accounting Apps */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FlaticonIcon
                    iconCode="\f140"
                    className="text-purple-600 text-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Accounting Apps
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-6">
                We provide top-tier mobile app development services for brokers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessBenefits;
