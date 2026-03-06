import { type MouseEvent, useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

interface SpotlightProps {
  className?: string;
  fill?: string;
  size?: number;
}

export default function Spotlight({
  className = "",
  fill = "white",
  size = 400,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [mouseX, mouseY]
  );

  const spotlightBackground = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${fill}15, transparent 80%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`absolute inset-0 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: spotlightBackground,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}
