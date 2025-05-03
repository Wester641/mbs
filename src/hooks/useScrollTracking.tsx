import { useEffect } from "react";
import { sendGAEvent } from "../utils/ga";

const useScrollTracking = (label: string) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrollTop / docHeight) * 100);

      if (percent >= 50 && !window._scrollSent) {
        sendGAEvent({
          action: "scroll",
          category: "User",
          label: label,
          value: 50,
        });
        window._scrollSent = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [label]);
};

export default useScrollTracking;
