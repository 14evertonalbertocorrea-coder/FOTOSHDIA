import { useState, useEffect } from 'react';

/**
 * Custom hook to simulate a real-time active users counter.
 * Easily fluctuates around a stable, high-traffic range.
 */
export function useOnlineCounter(min = 112, max = 158) {
  const [count, setCount] = useState(() => {
    // Generate a reasonable starting number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        // Random variation between -2 and +2 to mimic natural session drift
        const change = Math.floor(Math.random() * 5) - 2;
        const nextValue = prev + change;
        
        // Bound checks to keep it inside the desired threshold
        if (nextValue < min) return min + Math.round(Math.random() * 3);
        if (nextValue > max) return max - Math.round(Math.random() * 3);
        return nextValue;
      });
    }, 4500); // Updates smoothly every 4.5 seconds

    return () => clearInterval(interval);
  }, [min, max]);

  return count;
}
