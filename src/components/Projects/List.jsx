import React, { useState, useEffect } from "react";
import Detainee from "../../Assets/detainee2.jpg";
import Fibre from "../../Assets/fibre.jpg";
import Dci from "../../Assets/data_center-1.jpg";
import Vehicle from "../../Assets/vehicle_reg.jpg";
import Bio from "../../Assets/hr_biometrics.jpg";
import Cam from "../../Assets/safe.jpg";
import Nai from "../../Assets/nairobi_county.jpg";
import Revenue from "../../Assets/revenue_collections.jpg";
import Account from "../../Assets/myaccount.jpg";
import Micro from "../../Assets/micro-finance3.jpg";
import Loan from "../../Assets/digital_lending.png";

// Image mapping for backend projects
const imageMap = {
  "Detainee Case Management Information System (DeMIS Baarista)": Detainee,
  "IT Fiber Infrastructure Project": Fibre,
  "Data Center IT Infrastructure (DCI) Project": Dci,
  "Central Database for Registration (CDR) and Vehicle Registration System":
    Vehicle,
  "HRM Biometric System": Bio,
  "Safe City Management Project": Cam,
  "Human Resource Management System": Nai,
  "Revenue Collection System": Revenue,
  "Micro-Finance Management Systems": Micro,
  "Digital Loans Mobile Apps": Loan,
  "MyAccountant App": Account,
};

// Slug mapping for project routes
const slugMap = {
  "Detainee Case Management Information System (DeMIS Baarista)":
    "detainee-case-management",
  "IT Fiber Infrastructure Project": "it-fiber-infrastructure",
  "Data Center IT Infrastructure (DCI) Project": "data-center-infrastructure",
  "Central Database for Registration (CDR) and Vehicle Registration System":
    "central-database-registration",
  "HRM Biometric System": "hrm-biometric-system",
  "Safe City Management Project": "safe-city-management",
  "Human Resource Management System": "county-hrm-system",
  "Revenue Collection System": "county-revenue-collection",
  "Micro-Finance Management Systems": "microfinance-management",
  "Digital Loans Mobile Apps": "digital-loans-mobile",
  "MyAccountant App": "my-accountant-app",
};

const categorizeProjects = (projects) => {
  if (!projects) return {};

  // First, log the projects to see their actual structure
  console.log("Raw projects data:", projects);

  return {
    ALL: projects,
    FEDERAL_GOVERNMENT: projects.filter(
      (p) =>
        p.client === "Federal Government Of Somalia" ||
        p.category === "Federal Government" ||
        p.title.includes("Somalia")
    ),
    COUNTY_GOVERNMENTS: projects.filter(
      (p) =>
        p.client === "County Governments Of Kenya" ||
        p.category === "County Government" ||
        p.title.includes("Revenue") ||
        p.title.includes("Human")
    ),
    SMES: projects.filter(
      (p) =>
        p.client === "SMEs" ||
        p.category === "SME" ||
        p.title.includes("SME") ||
        p.title.includes("Micro-Finance") ||
        p.title.includes("Digital Loans")
    ),
    SAAS: projects.filter(
      (p) =>
        p.client === "Software as a service (SaaS)" ||
        p.category === "SaaS" ||
        p.title.includes("SaaS") ||
        p.title.includes("Accountant")
    ),
  };
};

export const List = ({ items }) => {
  // Log the items being rendered
  console.log("Rendering items:", items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto px-4 sm:px-0">
      {items?.map((item) => (
        <a
          key={item.id}
          href={`/${slugMap[item.title] || item.id}`}
          className="group relative shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[250px] sm:min-h-[300px] flex flex-col justify-between"
        >
          {/* Background Image */}
          {imageMap[item.title] && (
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 lg:scale-105 lg:group-hover:scale-125 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${imageMap[item.title]})` }}
            ></div>
          )}
          {!imageMap[item.title] && (
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
        </a>
      ))}
    </div>
  );
};

export const useServicesData = () => {
  const [servicesData, setServicesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://kangaroobackend.onrender.com/api/posts"
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Log the raw data
        const categorized = categorizeProjects(data);
        console.log("Categorized data:", categorized); // Log the categorized data
        setServicesData(categorized);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { servicesData, loading };
};
