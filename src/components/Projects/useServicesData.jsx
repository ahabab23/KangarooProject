// src/hooks/useServicesData.js
import { useEffect, useState } from "react";

const useServicesData = () => {
  const [servicesData, setServicesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://kangaroobackend.onrender.com/api/posts"
        );
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { servicesData, loading };
};

export default useServicesData;
