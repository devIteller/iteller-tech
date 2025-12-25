"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export const CountUpStat = ({
  value,
  suffix = "",
  label,
  duration = 1200,
}: CountUpStatProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="text-center opacity-0 translate-y-4 animate-stat">
      <div className="text-3xl md:text-4xl font-heading font-bold text-[#35B1EE] mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
