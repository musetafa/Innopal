import { motion } from "motion/react";

export default function GraphicSection() {
  return (
    <section id="graphic" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vision <span className="text-gradient-accent">Architecturale</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Une représentation visuelle de l'écosystème IA que nous allons
            construire ensemble. Des fondations de données jusqu'aux interfaces
            utilisateurs intelligentes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
        >
          {/* 3D Graphic Placeholder */}
          <div className="absolute inset-0 opacity-20">
            {/* Grid background */}
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                transform:
                  "perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 mb-8 relative">
              <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-lg transform rotate-45 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border-2 border-white/50 rounded-lg transform -rotate-12 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-4 bg-[var(--color-accent)]/20 backdrop-blur-sm rounded-lg" />
            </div>
            <div className="font-mono text-sm text-white/40 tracking-[0.3em] uppercase">
              [ 3D Animated Graphic ]
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/10 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
