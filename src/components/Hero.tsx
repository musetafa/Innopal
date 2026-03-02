import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Asset Placeholder Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40"
      >
        <div className="w-[800px] h-[800px] rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[var(--color-accent)]/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 border-dashed animate-[spin_20s_linear_infinite]" />

        {/* Placeholder text for 3D asset */}
        <div className="absolute font-mono text-white/20 text-sm tracking-widest uppercase">
          [ 3D Asset Placeholder ]
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-[var(--color-accent)]">
            Project Proposal
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            AI Immersion <br />
            <span className="text-gradient-accent">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            A transformative journey into the future of artificial intelligence.
            Discover how we plan to elevate your organization through immersive
            learning and strategic implementation.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-white/20 flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[var(--color-accent)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-0" />
    </section>
  );
}
