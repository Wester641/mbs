import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (command: string, configId: string, config?: object) => void;
  }
}

const usePageViewTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-01052WZEW6", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageViewTracking;
