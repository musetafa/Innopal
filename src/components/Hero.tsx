import type { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef } from "react";
import SplineScene from "./SplineScene";
import ScrollMorphHero from "./ui/scroll-morph-hero";


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tryAttach = () => {
      canvasRef.current = splineWrapRef.current?.querySelector("canvas") ?? null;
      if (canvasRef.current) {
        const canvasParent = canvasRef.current.parentElement;
        if (canvasParent) {
          canvasParent.style.overflow = "visible";
          canvasParent.style.position = "absolute";
          canvasParent.style.bottom = "0";
          canvasParent.style.left = "0";
          canvasParent.style.width = "100%";
          canvasParent.style.height = "115%";
          canvasParent.style.marginLeft = "0";
          canvasParent.style.marginTop = "0";
        }

        let el = canvasRef.current.parentElement;
        while (el && el !== splineWrapRef.current) {
          el.style.overflow = "visible";
          el = el.parentElement;
        }
      }
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

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      onMouseMove={forwardPointerMove}
      onMouseMoveCapture={forwardPointerMove}
    >
      <div className="relative z-10 h-full box-border pt-[300px]">
        <div
          ref={splineWrapRef}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-screen h-[60vh] overflow-visible"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="absolute bottom-0 left-0 w-full h-[115%] !overflow-visible [filter:grayscale(1)_saturate(0)_contrast(1.05)_brightness(0.92)]"
          />

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-30 pointer-events-none" />

      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-t from-[var(--color-bg)] to-transparent z-20 pointer-events-none"
        style={{
          ["--tw-gradient-from" as any]: "#e8e8e824",
          ["--tw-gradient-to" as any]: "#ffffff29",
          mixBlendMode: "hard-light",
        }}
      />

      {/* Scroll Morph Hero overlay */}
      <div className="absolute inset-0 z-40">
        <ScrollMorphHero />
      </div>
    </section>
  );
}
