"use client";

import React, { useState, useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleEffectProps {
  color?: string;
  duration?: number;
}

export default function RippleEffect({ color = "currentColor", duration = 600 }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    // Ensure the parent has relative positioning so absolute ripples are positioned correctly
    if (window.getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }

    const handleMouseDown = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple = {
        x,
        y,
        size,
        id: Date.now() + Math.random(),
      };

      setRipples((prev) => [...prev, newRipple]);
    };

    parent.addEventListener("mousedown", handleMouseDown);
    return () => {
      parent.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (ripples.length > 0) {
      const lastRipple = ripples[ripples.length - 1];
      const timer = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== lastRipple.id));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [ripples, duration]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden rounded-[inherit] pointer-events-none"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            backgroundColor: color,
            transform: "scale(0)",
            animation: `ripple ${duration}ms cubic-bezier(0.1, 0.8, 0.3, 1) forwards`,
          }}
        />
      ))}
    </div>
  );
}
