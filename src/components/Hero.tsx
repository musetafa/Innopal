import { motion, useScroll, useTransform } from "motion/react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef } from "react";
import SplineScene from "./SplineScene";
import Spotlight from "./Spotlight";
import PulseBeams from "./ui/PulseBeams";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tryAttach = () => {
      canvasRef.current = splineWrapRef.current?.querySelector("canvas") ?? null;
      return Boolean(canvasRef.current);
    };

    if (tryAttach()) return;

    const id = window.setInterval(() => {
      if (tryAttach()) window.clearInterval(id);
    }, 250);

    return () => window.clearInterval(id);
  }, []);

  const forwardPointerMove = (e: ReactMouseEvent<HTMLElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const evtInit = {
        bubbles: true,
        cancelable: false,
        clientX: e.clientX,
        clientY: e.clientY,
      };

      canvas.dispatchEvent(new PointerEvent("pointermove", evtInit));
      canvas.dispatchEvent(new window.MouseEvent("mousemove", evtInit));
    });
  };
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
      className="relative md:min-h-screen overflow-x-hidden"
      onMouseMove={forwardPointerMove}
      onMouseMoveCapture={forwardPointerMove}
    >
      {/* Spotlight Effect - non-interactive so it doesn't block Spline */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-[200px] pb-0 md:pb-20 md:min-h-screen grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-0 md:gap-10 overflow-visible">
        {/* Left: Text */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-left pointer-events-none mt-6 md:mt-0"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-primary pointer-events-auto">
            Maîtrisez la révolution{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFE600] via-[#FF32FF] to-[#32FFFF]">IA</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-90 max-w-xl font-light leading-relaxed pointer-events-auto">
            Une expérience immersive de 2 jours pour définir vos orientations
            stratégiques 2026-2028.
          </p>

          <PulseBeams />
        </motion.div>

        {/* Right: Robot */}
        <motion.div
          ref={splineWrapRef}
          style={{ y, scale, transformOrigin: "100% 50%" }}
          className="relative -mt-24 sm:-mt-16 md:mt-0 h-[500px] md:h-[82vh] w-full overflow-visible"
        >
          <div className="absolute inset-0 -right-16 md:-right-24 overflow-visible">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-[115%] h-[115%] [filter:grayscale(1)_saturate(0)_contrast(1.05)_brightness(0.92)]"
            />
          </div>

          {/* Overlay only on top of the robot */}
          <div
            className="absolute inset-0 -right-16 md:-right-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-20 pointer-events-none"
            style={{
              height: "min(881px, 70vh)",
              ["--tw-gradient-from" as any]: "#e8e8e824",
              ["--tw-gradient-to" as any]: "#ffffff29",
              mixBlendMode: "hard-light",
            }}
          />

          <div className="absolute bottom-0 inset-x-0 -right-16 md:-right-24 h-24 md:h-56 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-30 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary-40">
          Défiler pour explorer
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-white/20 flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#2E2E38] rounded-full" />
        </motion.div>
      </motion.div>

      
    </section>
  );
}
