import { useState, useEffect } from "react";
export const useOdd = () => {
  const [odd, setOddState] = useState(false);
  useEffect(() => {}, []);

  setOdd = () => {
    setOddState(true);
  };

  return [odd, setOdd];
};
