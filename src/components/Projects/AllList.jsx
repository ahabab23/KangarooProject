import React from "react";
import { List } from "./List";
import useServicesData from "../Projects/useServicesData";

const AllList = () => {
  const { servicesData, loading, error } = useServicesData();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[20vh] py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-red-50 border border-red-200 rounded-full p-4 mb-4">
          <span className="text-red-500 text-2xl">⚠️</span>
        </div>
        <h3 className="text-xl font-semibold text-red-700 mb-2">
          Loading Error
        </h3>
        <p className="text-gray-600 max-w-md mb-4">
          We couldn't load the projects.{" "}
          {error.message || "Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-gray-100 border border-gray-200 rounded-full p-4 mb-4">
          <span className="text-gray-500 text-2xl">📭</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No Projects Found
        </h3>
        <p className="text-gray-600 max-w-md">
          There are currently no projects available. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">All Projects</h2>
        <span className="bg-blue-100 text-blue-800 text-xl font-bold px-3 py-1 rounded-full">
          {servicesData.length} project{servicesData.length !== 1 ? "s" : ""}
        </span>
      </div>

      <List items={servicesData} />
    </div>
  );
};

export default AllList;
