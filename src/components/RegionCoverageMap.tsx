import { motion } from "motion/react";

type Region = {
  key: "europe-ouest" | "moyen-orient" | "afrique-subsaharienne";
  label: string;
  colorClass: string;
};

const regions: Region[] = [
  {
    key: "europe-ouest",
    label: "Europe de l’Ouest",
    colorClass: "bg-amber-400/15 text-amber-700 ring-amber-400/25",
  },
  {
    key: "afrique-subsaharienne",
    label: "Afrique subsaharienne francophone",
    colorClass: "bg-fuchsia-400/15 text-fuchsia-700 ring-fuchsia-400/25",
  },
  {
    key: "moyen-orient",
    label: "Moyen-Orient",
    colorClass: "bg-cyan-400/15 text-cyan-700 ring-cyan-400/25",
  },
];

export default function RegionCoverageMap() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,230,0,0.08)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,50,255,0.07)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_80%,rgba(50,255,255,0.06)_0%,transparent_55%)]" />

      <div className="relative">
        <svg
          viewBox="0 0 520 520"
          className="w-full h-auto"
          role="img"
          aria-label="Couverture régionale : Europe de l’Ouest, Afrique subsaharienne francophone, Moyen-Orient"
        >
          <defs>
            <linearGradient id="rcm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE600" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FF32FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#32FFFF" stopOpacity="0.85" />
            </linearGradient>
            <filter id="rcm-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base grid */}
          <g opacity="0.35">
            {Array.from({ length: 11 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="40"
                y1={60 + i * 40}
                x2="480"
                y2={60 + i * 40}
                stroke="rgba(46,46,56,0.12)"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={40 + i * 40}
                y1="60"
                x2={40 + i * 40}
                y2="460"
                stroke="rgba(46,46,56,0.12)"
              />
            ))}
          </g>

          {/* Stylized regions (abstract blocks) */}
          <motion.g
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Europe de l’Ouest */}
            <rect
              x="120"
              y="120"
              width="140"
              height="110"
              rx="18"
              fill="rgba(255,230,0,0.12)"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              filter="url(#rcm-glow)"
            />

            {/* Moyen-Orient */}
            <rect
              x="285"
              y="170"
              width="130"
              height="95"
              rx="18"
              fill="rgba(50,255,255,0.10)"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              filter="url(#rcm-glow)"
            />

            {/* Afrique subsaharienne */}
            <rect
              x="190"
              y="290"
              width="170"
              height="130"
              rx="22"
              fill="rgba(255,50,255,0.10)"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              filter="url(#rcm-glow)"
            />

            {/* Hub (Tunisie) */}
            <circle
              cx="255"
              cy="250"
              r="8"
              fill="#2E2E38"
              stroke="url(#rcm-grad)"
              strokeWidth="3"
            />
            <circle cx="255" cy="250" r="22" fill="none" stroke="url(#rcm-grad)" strokeWidth="2" opacity="0.35" />
            <circle cx="255" cy="250" r="40" fill="none" stroke="url(#rcm-grad)" strokeWidth="2" opacity="0.22" />

            {/* Connection lines */}
            <path
              d="M255 250 C220 220, 190 200, 160 175"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M255 250 C290 230, 320 215, 350 205"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M255 250 C265 295, 275 330, 290 365"
              stroke="url(#rcm-grad)"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
          </motion.g>

          {/* Labels */}
          <g fontFamily="Inter, system-ui" fontSize="14" fill="#2E2E38">
            <text x="140" y="154" opacity="0.9">Europe de l’Ouest</text>
            <text x="305" y="204" opacity="0.9">Moyen-Orient</text>
            <text x="208" y="330" opacity="0.9">Afrique subsaharienne</text>
            <text x="208" y="350" opacity="0.9">francophone</text>
          </g>
        </svg>

        <div className="mt-6 flex flex-wrap gap-2">
          {regions.map((r) => (
            <span
              key={r.key}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${r.colorClass}`}
            >
              {r.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
