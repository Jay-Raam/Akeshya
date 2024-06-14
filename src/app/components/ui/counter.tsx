"use client"

import { useState, useEffect, useRef } from "react";

interface Props {
  initialValue?: number;
  targetValue: number;
  duration?: number;
  threshold?: number;
  className?: string | undefined;
}

const CounterComponent: React.FC<Props> = ({
  initialValue = 0, 
  targetValue,
  duration = 5000, 
  threshold = 0.5,
  className,
}) => {
  const [count, setCount] = useState(initialValue);
  const counterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              const increment = Math.ceil(
                (targetValue - count) / (duration / 50)
              );
              if (count < targetValue) {
                setCount((prevCount) =>
                  Math.min(prevCount + increment, targetValue)
                );
              } else {
                clearInterval(interval);
              }
            }, 50); 

            return () => clearInterval(interval);
          }
        });
      },
      { threshold }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration, threshold]);

  return (
    <span ref={counterRef} className={className}>
      {count}
    </span>
  );
};

export { CounterComponent };
