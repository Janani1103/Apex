"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ end, suffix = "", duration = 1800 }: StatCounterProps) {
  const [count, setCount] = useState(end); // Default to end so SSR / instant view never shows 0
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          let animationFrameId: number;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          // Reset to 0 just before triggering the smooth count-up
          setCount(0);
          animationFrameId = window.requestAnimationFrame(step);

          return () => {
            if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
          };
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
