import React, { useState } from 'react';
import AllList from './AllList';
import Somalia from './Somalia';
import Kenya from './Kenya';
import Saas from './Saas';
import SME from './SME';

export default function InteractiveHeader() {
  const [activeTab, setActiveTab] = useState("ALL");

  const menuItems = [
    { id: "ALL", label: "ALL" },
    { id: "FEDERAL_GOVERNMENT", label: "1. Federal Government Of Somalia" },
    { id: "COUNTY_GOVERNMENTS", label: "2. County Governments Of Kenya" },
    { id: "SMES", label: "3. SME's" },
    { id: "SAAS", label: "4. Software as a service (SaaS)" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "ALL":
        return <AllList />;
      case "FEDERAL_GOVERNMENT":
        return <Somalia />;
      case "COUNTY_GOVERNMENTS":
        return <Kenya />;
      case "SMES":
        return <SME />;
      case "SAAS":
        return <Saas />;
      default:
        return <AllList />;
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto">
      <div className="">
        <div className="px-6 py-4">
          <nav className="flex flex-wrap justify-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative pb-2 cursor-pointer hover:cursor-pointer text-xl p-2 font-medium transition-colors duration-500 hover:text-purple-600 ${
                  activeTab === item.id ? "text-purple-500" : "text-gray-600"
                } group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform transition-transform duration-500 ${
                    activeTab === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}