import { useRef, useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    color?: string;
  }>;
  lineColor?: string;
  hub?: { lat: number; lng: number };
}

// dotted-map with height:100 produces a viewBox of 0 0 198 100
const MAP_W = 198;
const MAP_H = 100;

export function WorldMap({ dots = [], lineColor = "#FFE600", hub }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const mapPoints = useMemo(() => {
    const svgRaw = map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });

    const circles: { cx: number; cy: number; r: number; fill: string }[] = [];
    const regex = /<circle cx="([^"]+)" cy="([^"]+)" r="([^"]+)" fill="([^"]+)"/g;
    let m;
    while ((m = regex.exec(svgRaw)) !== null) {
      circles.push({
        cx: parseFloat(m[1]),
        cy: parseFloat(m[2]),
        r: parseFloat(m[3]),
        fill: m[4],
      });
    }
    return circles;
  }, [map]);

  // Crop to Europe + Africa + Middle East region
  // Left: lng -20 → x ≈ 88, Right: lng 65 → x ≈ 135
  // Top: lat 62 → y ≈ 15.5, Bottom: lat -38 → y ≈ 71
  const minX = 86;
  const maxX = 137;
  const minY = 14;
  // Extend further down so Africa is fully visible
  const maxY = 92;
  const visiblePoints = mapPoints.filter(
    (p) => p.cx >= minX && p.cx <= maxX && p.cy >= minY && p.cy <= maxY
  );

  const vbX = minX - 1;
  const vbY = minY - 1;
  const vbW = maxX - minX + 2;
  const vbH = maxY - minY + 2;

  const projectPoint = (lat: number, lng: number) => {
    const pin = map.getPin({ lat, lng });
    return { x: pin.x, y: pin.y };
  };

  const hubPoint = hub
    ? projectPoint(hub.lat, hub.lng)
    : dots[0]
      ? projectPoint(dots[0].start.lat, dots[0].start.lng)
      : projectPoint(36.8065, 10.1815);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 12;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-white rounded-lg">
      <svg
        ref={svgRef}
        viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        {visiblePoints.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.fill} />
        ))}

        {dots.map((dot, i) => {
          const beamColor = dot.color ?? lineColor;
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(hubPoint, endPoint)}
                fill="none"
                stroke={beamColor}
                strokeWidth="0.3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        <defs>
          <radialGradient id="hub-gradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Hub marker */}
        <g>
          <circle cx={hubPoint.x} cy={hubPoint.y} r="0.9" fill="url(#hub-gradient)" />
          <circle cx={hubPoint.x} cy={hubPoint.y} r="0.9" fill="url(#hub-gradient)" opacity="0.35">
            <animate attributeName="r" from="0.9" to="3.5" dur="1.6s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.35" to="0" dur="1.6s" begin="0s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Endpoint dots */}
        {dots.map((dot, i) => {
          const p = projectPoint(dot.end.lat, dot.end.lng);
          const beamColor = dot.color ?? lineColor;
          return (
            <g key={`end-${i}`}>
              <circle cx={p.x} cy={p.y} r="0.5" fill={beamColor} />
              <circle cx={p.x} cy={p.y} r="0.5" fill={beamColor} opacity="0.5">
                <animate attributeName="r" from="0.5" to="2" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
