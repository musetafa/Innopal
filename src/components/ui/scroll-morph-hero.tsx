import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useTransform, useSpring, useMotionValue } from "motion/react";
import { MotifButton } from "@ey-xd/motif-wc-react";

type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  onClick: () => void;
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, total, target, onClick }: FlipCardProps) {
  return (
    <motion.div
      className="absolute group cursor-pointer"
      style={{
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        zIndex: total - index,
        perspective: 800,
      }}
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 1,
      }}
      onClick={onClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div
          className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-md flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-blue-500 text-xs font-medium">View</span>
        </div>
      </div>
    </motion.div>
  );
}

function FullscreenCarousel({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c < images.length - 1 ? c + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const thumb = thumbsRef.current?.children[current] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [current]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/90 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Main image area */}
      <div
        className="flex-1 flex items-center justify-center relative px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`fullscreen-${current}`}
            className="max-h-[70vh] max-w-[85vw] object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div
        className="py-4 px-4 flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={thumbsRef}
          className="flex gap-2 overflow-x-auto max-w-[90vw] pb-2 scrollbar-hide"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-all ${
                i === current ? "border-white scale-110" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

const IMAGES = Array.from({ length: 20 }, (_, i) => `/Assets/hero/immersion${i + 1}.png`);

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current >= MAX_SCROLL && e.deltaY > 0) return;
      if (scrollRef.current <= 0 && e.deltaY < 0) return;
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      if (scrollRef.current >= MAX_SCROLL && deltaY > 0) return;
      if (scrollRef.current <= 0 && deltaY < 0) return;
      e.preventDefault();
      const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsub1 = smoothMorph.on("change", setMorphValue);
    const unsub2 = smoothScrollRotate.on("change", setRotateValue);
    const unsub3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Intro Text */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none"
        animate={{
          opacity: introPhase === "circle" ? 0 : 1,
          y: introPhase === "circle" ? -20 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 max-w-4xl text-primary">
          The future is built on AI.
        </h1>
        <p className="text-primary-50 text-sm uppercase tracking-widest">
          Défiler pour dévouvrir
        </p>
      </motion.div>

      {/* Arc Content */}
      <motion.div
        className="absolute z-10 text-center w-full top-8 mt-[15vh] pointer-events-none px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <h2 className="text-4xl md:text-6xl font-medium mb-4 text-primary">
          Maîtrisez la révolution IA
        </h2>
        <p className="text-primary-70 max-w-2xl mx-auto text-lg leading-relaxed">
          Vivez deux jours d'immersion au cœur de l'intelligence artificielle. Parcourez notre agenda pour découvrir les sessions qui transformeront votre vision stratégique
        </p>
        <div className="flex justify-center gap-4 mt-6 pointer-events-auto">
          <MotifButton
            onClick={() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" })}
          >
            Voir l'agenda
          </MotifButton>
          <MotifButton
            variant="secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Demander plus d'info
          </MotifButton>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
          let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

          if (introPhase === "scatter") {
            target = scatterPositions[i];
          } else if (introPhase === "line") {
            const lineSpacing = 70;
            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
            const lineX = i * lineSpacing - lineTotalWidth / 2;
            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
          } else {
            const isMobile = containerSize.width < 768;
            const minDimension = Math.min(containerSize.width, containerSize.height);

            const circleRadius = Math.min(minDimension * 0.35, 350);
            const circleAngle = (i / TOTAL_IMAGES) * 360;
            const circleRad = (circleAngle * Math.PI) / 180;
            const circlePos = {
              x: Math.cos(circleRad) * circleRadius,
              y: Math.sin(circleRad) * circleRadius,
              rotation: circleAngle + 90,
            };

            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
            const arcCenterY = arcApexY + arcRadius;
            const spreadAngle = isMobile ? 100 : 130;
            const startAngle = -90 - spreadAngle / 2;
            const step = spreadAngle / (TOTAL_IMAGES - 1);

            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
            const maxRotation = spreadAngle * 0.8;
            const boundedRotation = -scrollProgress * maxRotation;

            const currentArcAngle = startAngle + i * step + boundedRotation;
            const arcRad = (currentArcAngle * Math.PI) / 180;

            const arcPos = {
              x: Math.cos(arcRad) * arcRadius + parallaxValue,
              y: Math.sin(arcRad) * arcRadius + arcCenterY,
              rotation: currentArcAngle + 90,
              scale: isMobile ? 1.4 : 1.8,
            };

            target = {
              x: lerp(circlePos.x, arcPos.x, morphValue),
              y: lerp(circlePos.y, arcPos.y, morphValue),
              rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
              scale: lerp(1, arcPos.scale, morphValue),
              opacity: 1,
            };
          }

          return (
            <FlipCard
              key={i}
              src={src}
              index={i}
              total={TOTAL_IMAGES}
              target={target}
              onClick={() => setLightboxIndex(i)}
            />
          );
        })}
      </div>

      {createPortal(
        <AnimatePresence>
          {lightboxIndex !== null && (
            <FullscreenCarousel
              images={IMAGES}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
