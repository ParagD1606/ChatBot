import React, { useEffect, useState } from 'react';

const IncreasingNo = () => {
  const [count, setCount] = useState(4000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 5000) {
          clearInterval(interval); 
          return prev;
        }
        return prev + 1;
      });
    }, 1); 

    return () => clearInterval(interval); 
  }, []);

  return(
    <div>{count}</div>
  ) 
};

export default IncreasingNo;
