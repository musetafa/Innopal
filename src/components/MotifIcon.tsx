import { useRef, useEffect } from "react";

type IconFactory = (opts?: {
  size?: string;
  fill?: string;
  strokeWidth?: string;
  title?: string;
  stroke?: string;
}) => SVGElement;

type MotifIconProps = {
  icon: IconFactory;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  className?: string;
  title?: string;
};

export default function MotifIcon({
  icon,
  size = "20",
  fill = "currentColor",
  stroke = "none",
  strokeWidth = "1",
  className,
  title,
}: MotifIconProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const svg = icon({ size, fill, strokeWidth, title, stroke });
    ref.current.appendChild(svg);
  }, [icon, size, fill, stroke, strokeWidth, title]);

  return <span ref={ref} className={className} style={{ display: "inline-flex", lineHeight: 0 }} />;
}
