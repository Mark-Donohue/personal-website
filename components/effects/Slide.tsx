"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function Slide({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-cubicBezierSlide");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [offset, ref]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
