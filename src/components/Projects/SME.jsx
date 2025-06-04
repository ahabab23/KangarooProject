import React from 'react';
import { List, useServicesData } from './List';

const SME = () => {
  const { servicesData, loading } = useServicesData();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto px-4 sm:px-0">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="animate-pulse h-[300px] bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <List items={servicesData.SMES || []} />
    </div>
  );
};

export default SME;