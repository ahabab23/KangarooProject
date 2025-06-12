import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import PageTitleByName from "./PageTitleByName";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://kangaroobackend.onrender.com/api/posts/${id}`)
      .then((res) => {
        setProject(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load project details");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const getStatusBadge = (status) => {
    const statusStyles = {
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
      Ongoing: "bg-blue-100 text-blue-800 border-blue-300",
      Completed: "bg-green-100 text-green-800 border-green-300",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
          statusStyles[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-10 text-center min-h-screen flex flex-col justify-center">
        <PageTitleByName />
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-red-800 mb-2">
            Error Loading Project
          </h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-10 text-center min-h-screen flex flex-col justify-center">
        <PageTitleByName />
        <div className="max-w-2xl mx-auto">
          <div className="text-gray-400 text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Project Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The requested project could not be found
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageTitleByName />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.status && getStatusBadge(project.status)}
              {project.published && (
                <span className="text-sm text-gray-600">
                  {format(new Date(project.published), "MMMM dd, yyyy")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          {project.image_url && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-gray-50 flex items-center justify-center h-[500px]">
              <img
                src={project.image_url}
                alt={project.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
          )}

          {/* Project Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-1/4 w-24 h-24 bg-cyan-100 rounded-full opacity-20"></div>

            <div className="relative z-10">
              {/* Project Description */}
              {project.description && (
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Project Description
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 bg-blue-50 p-5 rounded-xl border border-blue-100">
                    {project.description}
                  </p>
                </div>
              )}

              {/* Project Meta */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Project Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Published Date</p>
                      <p className="font-medium">
                        {project.published
                          ? format(new Date(project.published), "MMMM dd, yyyy")
                          : "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium">
                        {project.status ? project.status : "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">
                        {project.category || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-5 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-50 border border-gray-200 shadow-sm transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
