export const calculateTotalCarbon = (activities: { carbonValue: number }[]): number => {
    return activities.reduce((total, activity) => total + activity.carbonValue, 0);
  };
  
  export const formatCarbonValue = (value: number): string => {
    return value.toLocaleString();
  };
  
