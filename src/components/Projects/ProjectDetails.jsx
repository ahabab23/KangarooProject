import React, { useState, useEffect } from "react";
import { Calendar, User, Tag } from "lucide-react";
import { getNumericId } from "../../utils/projectIds";

const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const numericId = getNumericId(projectId);
        console.log(`Fetching project with ID: ${numericId}`); // Debug log

        const response = await fetch(
          `https://kangaroobackend.onrender.com/api/posts/${numericId}`
        );
        console.log("Response status:", response.status); // Debug log

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received project data:", data); // Debug log

        // Transform the data to match expected format
        const transformedProject = {
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published ? new Date(data.published) : null,
          category: data.category,
          client: data.client,
          image_url: data.image_url,
        };

        setProject(transformedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Error Loading Project
        </h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600">
          The requested project could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-8xl overflow-hidden p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-8xl">
        {/* Left Side: Title and Description */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* Right Side: Metadata */}
        <div className="flex flex-col gap-6 text-sm text-gray-700">
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">
              Published:
            </h3>
            <p className="text-base font-medium">
              {project.published
                ? project.published.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Not specified"}
            </p>
          </div>
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">
              Category:
            </h3>
            <p className="text-base font-medium">
              {project.category || "Not specified"}
            </p>
          </div>
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">
              Client:
            </h3>
            <p className="text-base font-medium">
              {project.client || "Not specified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
