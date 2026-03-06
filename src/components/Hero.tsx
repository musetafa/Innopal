import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplineScene from "./SplineScene";
import Spotlight from "./Spotlight";

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
      {/* Spotlight Effect - non-interactive so it doesn't block Spline */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      {/* Text content layer - pointer-events-none on container so Spline gets mouse events, 
           pointer-events-auto on text elements so they remain selectable */}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center text-center pt-[264px] px-6 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-[var(--color-accent)] pointer-events-auto">
            Session d'immersion IA
          
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-white pointer-events-auto">
            Immersion IA <br />
            <span className="text-[var(--color-accent)]">Expérience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed pointer-events-auto">
            Un voyage transformateur vers l'avenir de l'intelligence artificielle.
            Découvrez comment nous prévoyons de propulser votre organisation grâce à un apprentissage immersif et une mise en œuvre stratégique.
          </p>
        </motion.div>
      </motion.div>

      {/* Spline scene - topmost interactive layer covering entire hero */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Défiler pour explorer
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
