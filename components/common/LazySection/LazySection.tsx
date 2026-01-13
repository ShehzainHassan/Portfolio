"use client";
import { useEffect, useRef, useState } from "react";
import { LazySectionProps } from "./LazySection.types";

export default function LazySection({
  children,
  id,
  rootMargin = "200px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div id={id} ref={ref}>
      {isVisible ? children : null}
    </div>
  );
}
