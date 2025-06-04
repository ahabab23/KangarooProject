// src/utils/projectIds.js
export const projectIdMapping = {
    // Federal Government services
    'detainee-case-management': 1,
    'it-fiber-infrastructure': 2,
    'data-center-infrastructure': 3,
    'central-database-registration': 4,
    'hrm-biometric-system': 5,
    'safe-city-management': 6,
    
    // County Government services
    'county-hrm-system': 10,
    'county-revenue-collection': 11,
    
    // SME services
    'microfinance-management': 7,
    'digital-loans-mobile': 8,
    
    // SaaS services
    'my-accountant-app': 9
  };
  
  export const getNumericId = (id) => {
    return typeof id === 'string' ? projectIdMapping[id] : id;
  };
  
  export const findStringId = (numericId) => {
    return Object.entries(projectIdMapping).find(([, id]) => id === numericId)?.[0] || numericId;
  };