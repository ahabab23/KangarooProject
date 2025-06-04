import React from "react";
import { useLocation, Link } from "react-router-dom";
import bgHeader from "../Assets/bg-pheader.jpg";
import { BiSolidRightArrow } from "react-icons/bi";

function PageTitle() {
  const location = useLocation();

  // Custom title formatting for specific pages
  const formatTitle = (title) => {
    if (!title) return title;

    // Special cases with custom formatting
    if (title === 'STRATEGY DEVELOPMENT & EXECUTION') {
      return (
        <div className="flex flex-col space-y-1 leading-tight">
          <span>STRATEGY</span>
          <span>DEVELOPMENT &</span>
          <span>EXECUTION</span>
        </div>
      );
    }
    if (title === 'HUMAN CAPITAL MANAGEMENT') {
      return (
        <div className="flex flex-col space-y-1 leading-tight">
          <span>HUMAN CAPITAL</span>
          <span>MANAGEMENT</span>
        </div>
      );
    }

    // Default behavior for other titles
    return title;
  };

  // Extract current page name from path
  const getPageName = () => {
    const path = location.pathname.split("/").filter(Boolean).pop();
    // Custom mapping for specific routes
    const pageNameMap = {
      'strategy': 'STRATEGY DEVELOPMENT & EXECUTION',
      'human': 'HUMAN CAPITAL MANAGEMENT',
      'ict' : 'ICT Consultancy Services',
      'development': 'Front and Backend Development',
      'mission-vision' : 'OUR MISSION AND VISION',
      // Add other mappings as needed
    };

    return pageNameMap[path] || (path ? path.replace(/-/g, ' ').toUpperCase() : 'HOME');
  };

  // Generate breadcrumb path
  const getBreadcrumb = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    let breadcrumb = [];

    paths.forEach((path, index) => {
      const name = path.replace(/-/g, " ").toUpperCase();
      const route = `/${paths.slice(0, index + 1).join("/")}`;

      breadcrumb.push(
        <React.Fragment key={route}>
          {index > 0 && <span className="mx-2">/</span>}
          <Link to={route} className="hover:text-blue-300 transition-colors">
            {name}
          </Link>
        </React.Fragment>
      );
    });

    return breadcrumb.length ? breadcrumb : "HOME";
  };

  return (
    <div 
      className="w-full sm:top-28 top-20 mb-20  bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-80 p-10"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex justify-between items-center">
        {/* Page title on left */}
        <h1 className="sm:text-4xl text-2xl font-bold text-white sm:ml-8 -ml-2">
          {formatTitle(getPageName())}
        </h1>

        {/* Breadcrumb on right */}
        <div className="sm:flex items-center text-white relative sm:right-40 hidden ">
          <Link to="/" className="hover:text-blue-300 transition-colors">
            HOME
          </Link>
          {location.pathname !== "/" && (
            <span className="flex items-center">
              <span className="mx-2">
                <BiSolidRightArrow className="text-blue-500"size={14} />
                </span>
              {getBreadcrumb()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageTitle;