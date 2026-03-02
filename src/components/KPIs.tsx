import { motion } from "motion/react";

export default function KPIs() {
  const kpis = [
    { value: "50+", label: "Experts IA Mobilisés" },
    { value: "12", label: "Cas d'usage identifiés" },
    { value: "3", label: "Prototypes livrés" },
    { value: "100%", label: "Engagement garanti" },
  ];

  return (
    <section
      id="kpis"
      className="py-32 relative bg-white/[0.02] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text & KPIs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact & <br />
              <span className="text-gradient-accent">Couverture</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Notre approche est conçue pour maximiser l'impact sur l'ensemble
              de votre territoire d'opération. De la conception à l'exécution,
              nous mesurons chaque étape pour garantir un retour sur
              investissement tangible.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-[var(--color-accent)] pl-4"
                >
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">
                    {kpi.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl glass-panel flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)] opacity-50" />

            {/* Abstract Map Representation */}
            <svg
              viewBox="0 0 200 400"
              className="w-full h-full max-w-[250px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"
            >
              <path
                d="M100,20 L150,50 L180,120 L160,200 L170,280 L130,350 L80,380 L40,320 L20,220 L30,140 L60,60 Z"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-[dash_20s_linear_infinite]"
              />
              <circle cx="100" cy="80" r="4" fill="var(--color-accent)" />
              <circle cx="140" cy="160" r="3" fill="var(--color-accent)" />
              <circle cx="60" cy="240" r="5" fill="var(--color-accent)" />
              <circle cx="120" cy="300" r="3" fill="var(--color-accent)" />

              {/* Connecting lines */}
              <path
                d="M100,80 L140,160 L120,300 L60,240 Z"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
            </svg>

            <div className="absolute bottom-6 right-6 font-mono text-xs text-white/30 uppercase tracking-widest">
              [ Tunisia Map Data ]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
