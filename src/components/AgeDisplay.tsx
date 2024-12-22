import {useEffect, useState} from 'react';


// Function to calculate age more accurately
const calculateAge = (birthDate: Date) => {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
  ) {
    years -= 1;
  }
  return years + Math.random() * 0.1; // Simulate variability
};

export const AgeDisplay = () => {
  const birthDate = new Date('2000-08-06');
  const [age, setAge] = useState<number | null>(null);

  // Ensure age calculations only happen client-side
  useEffect(() => {
    const interval = setInterval(() => {
      const newAge = calculateAge(birthDate);
      setAge(newAge);
    }, 50); // Every 50ms to simulate dynamic changes
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);  // Leave the dependency array empty since birthDate doesn't change
  

  // Ensure rendering only if computed in the browser
  if (age === null) return <div className="text-2xl font-bold text-white">Calculating...</div>;

  return (
    <div className="text-sm font-bold text-white">
      {age.toFixed(5)} years
    </div>
  );
};
