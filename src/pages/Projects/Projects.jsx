import React from "react";
import PageTitle from "../../components/PageTitle";

import AllList from "../../components/Projects/AllList";

function Projects() {
  return (
    <>
      <PageTitle />

      <div className="w-full py-16 px-4 bg-gray-50">
        <div className=" mx-auto">
          {/* Header */}
          <div className="text-center mb-0">
            <p className="text-purple-600 font-medium text-sm tracking-wider uppercase mb-4">
              // LATEST CASE STUDIES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Project Portfolio
            </h2>
            <p className="text-gray-500 font-semilight text-m tracking-wider  mb-0">
              We have delivered successfully several projects across Africa and
              the listed below are some of them
            </p>
          </div>
        </div>
      </div>
      <AllList />
    </>
  );
}

export default Projects;
