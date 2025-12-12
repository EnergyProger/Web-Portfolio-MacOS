import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Custom hook to measure and track component render time.
 * Measures the time from component initialization to after the DOM has painted.
 * The timer resets each time isOpen changes from false to true (e.g., when a window is reopened).
 * @param isOpen - Whether the window/component is currently open
 * @returns The render time in milliseconds.
 */
export const useRenderTime = (isOpen: boolean): number => {
  const startTimeRef = useRef<number | null>(null);
  const wasOpenRef = useRef<boolean>(false);
  const [renderTime, setRenderTime] = useState<number>(0);

  // useLayoutEffect runs synchronously before the browser paints
  // This captures the start time when the window opens
  useLayoutEffect(() => {
    // Detect transition from closed to open
    if (isOpen && !wasOpenRef.current) {
      startTimeRef.current = performance.now();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // useEffect runs after the DOM has been painted
  // This captures the end time and calculates the render duration
  useEffect(() => {
    if (isOpen && startTimeRef.current !== null) {
      const endTime = performance.now();
      const elapsed = endTime - startTimeRef.current;
      setRenderTime(elapsed);
    }
  }, [isOpen]);

  return renderTime;
};
