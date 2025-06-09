import React from "react";
import { Link } from "react-router-dom";
export const List = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto px-4 sm:px-0">
      {items?.map((item) => (
        <Link
          key={item.id}
          to={`/projects/${item.id}`}
          className="group relative shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[250px] sm:min-h-[300px] flex flex-col justify-between"
        >
          {/* Background Image */}
          {item.image_url ? (
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 group-hover:grayscale transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${item.image_url})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/20 lg:bg-black/0 lg:group-hover:bg-black/40 transition-all duration-500 ease-in-out"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8">
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-bold text-left text-white mb-3 sm:mb-4 lg:mb-6 
                         opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                         transform translate-y-0 sm:translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0
                         transition-all duration-500"
            >
              {item.title}
            </h3>

            <p
              className="text-sm sm:text-base text-gray-200 text-left leading-relaxed
                        opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                        transform translate-y-0 sm:translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0
                        transition-all duration-500 delay-75"
            >
              {item.client || item.category}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
