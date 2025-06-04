import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getNumericId, findStringId } from '../../utils/projectIds';

const ProjectNavigator = ({ currentProjectId }) => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects from /api/posts...');
        const response = await fetch('http://127.0.0.1:5000/api/posts');
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received projects data:', data);
        
        setProjectsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  const numericId = getNumericId(currentProjectId);
  console.log('Current project ID:', currentProjectId, 'Numeric ID:', numericId);
  
  const currentIndex = projectsData.findIndex(p => p.id === numericId);
  console.log('Current index:', currentIndex, 'Total projects:', projectsData.length);
  
  const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  console.log('Previous project:', previousProject);
  console.log('Next project:', nextProject);

  const handleNavigation = (projectId) => {
    console.log('Navigating to project ID:', projectId);
    navigate(`/${findStringId(projectId)}`);
  };

  const formatTitle = (title) => {
    return title.split(' ').map((word, i, arr) => (
      <React.Fragment key={i}>
        {word}
        {i !== arr.length - 1 && ' '}
        {word.length > 8 && i !== arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (loading) {
    console.log('Loading projects...');
    return null;
  }

  if (error) {
    console.error('Error state:', error);
    return (
      <div className="text-center py-4 text-red-500">
        Error loading navigation: {error}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center py-8 border-t border-b border-gray-200">
      <div className="flex-1">
        {previousProject && (
          <button
            onClick={() => handleNavigation(previousProject.id)}
            className="cursor-pointer group flex items-center gap-3 text-left hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 transition-transform bg-blue-500 text-white" />
            <div>
              <div className="hover:translate-x-2 duration-500 font-semibold max-w-xs break-words whitespace-normal">
                {formatTitle(previousProject.title)}
              </div>
            </div>
          </button>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {nextProject && (
          <button
            onClick={() => handleNavigation(nextProject.id)}
            className="cursor-pointer group flex items-center gap-3 text-right ml-auto hover:text-blue-600 transition-colors"
          >
            <div>
              <div className="font-semibold hover:translate-x-2 duration-500 max-w-xs break-words whitespace-normal">
                {formatTitle(nextProject.title)}
              </div>
            </div>
            <ChevronRight className="w-6 h-6 bg-blue-500 text-white transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigator;