import { useState, useEffect } from "react";
export const useOffline = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const checkOnline = () => setState(false);
    const checkOffline = () => setState(true);

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("offline", checkOffline);
    };
  }, []);

  return state;
};
