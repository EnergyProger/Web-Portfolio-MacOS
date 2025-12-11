import { useEffect, useState } from "react";

/**
 * Custom hook to measure and track component render time.
 * @returns The render time in milliseconds.
 */
const useRenderTime = (): number => {
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
    };
  }, []);

  return renderTime;
};

export default useRenderTime;
