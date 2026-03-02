import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Download, ChevronRight, ChevronLeft } from "lucide-react";

const cvs = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Lead AI Researcher",
    exp: "10+ years",
    img: "https://picsum.photos/seed/sarah/400/500",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Chief Data Scientist",
    exp: "15+ years",
    img: "https://picsum.photos/seed/marcus/400/500",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "AI Ethics Director",
    exp: "8+ years",
    img: "https://picsum.photos/seed/elena/400/500",
  },
  {
    id: 4,
    name: "David Kim",
    role: "ML Engineering Lead",
    exp: "12+ years",
    img: "https://picsum.photos/seed/david/400/500",
  },
  {
    id: 5,
    name: "Amira Hassan",
    role: "Transformation Strategist",
    exp: "14+ years",
    img: "https://picsum.photos/seed/amira/400/500",
  },
];

export default function CVs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="cvs" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Notre <span className="text-gradient-accent">Équipe</span>
          </h2>
          <p className="text-white/60 text-lg">
            Des experts reconnus pour vous accompagner
          </p>
        </motion.div>

        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cvs.map((cv, index) => (
            <motion.div
              key={cv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] snap-center group relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={cv.img}
                  alt={cv.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Download Overlay */}
                <div className="absolute inset-0 bg-[var(--color-accent)]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Download size={18} />
                    Télécharger CV
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {cv.name}
                </h3>
                <div className="text-[var(--color-accent)] font-mono text-sm uppercase tracking-wider mb-2">
                  {cv.role}
                </div>
                <div className="text-white/40 text-sm">
                  {cv.exp} d'expérience
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
