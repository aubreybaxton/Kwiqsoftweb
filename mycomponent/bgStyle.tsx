"use client";

import { ReactNode, useEffect, useRef } from "react";
import './bgStyle.css'

interface Props {
  children: ReactNode;
}

export default function FloatingSquaresBackground({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const squares = Array.from(container.querySelectorAll<HTMLSpanElement>(".sq"));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      squares.forEach((sq, i) => {
        const speed = (i + 1) * 0.03; // different speed for each square
        const moveX = (x - rect.width / 2) * speed;
        const moveY = (y - rect.height / 2) * speed;

        sq.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="floating-bg">
      <span className="sq sq1"></span>
      <span className="sq sq2"></span>
      <span className="sq sq3"></span>
      <span className="sq sq4"></span>
      <span className="sq sq5"></span>
      <div className="content-wrapper">{children}</div>
    </div>
  );
}
