import React, { useState } from 'react';
import ProjectDetails from "../../components/Projects/ProjectDetails";
import ProjectNavigator from "../../components/Projects/ProjectNavigator";
import RelatedProjects from "../../components/Projects/RelatedProjects";
import PageTitle from "../../components/PageTitle";

const DataCenterInfrastructure = () => {
  const [currentProjectId, setCurrentProjectId] = useState('data-center-infrastructure');

  return (
    <>
    <PageTitle />
    
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <ProjectDetails projectId={currentProjectId} />
        <ProjectNavigator 
          currentProjectId={currentProjectId} 
          onNavigate={setCurrentProjectId}
        />
        <RelatedProjects currentProjectId={currentProjectId} />
      </div>
    </div>
    </>
  );
};

export default DataCenterInfrastructure;