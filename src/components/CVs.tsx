import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Download, ChevronRight, ChevronLeft, X } from "lucide-react";

import pic1 from "../../Assets/Profile pic-cv-01.png";
import pic2 from "../../Assets/Profile pic-cv-02.png";
import pic3 from "../../Assets/Profile pic-cv-03.png";
import pic4 from "../../Assets/Profile pic-cv-04.png";
import pic5 from "../../Assets/Profile pic-cv-05.png";

const cvs = [
  {
    id: 5,
    name: "Mohamed-Skander Naija",
    role: "Associé EY | Expert en transformation des services financiers",
    exp: "25+ ans",
    img: pic1,
    pages: ["skander1.png", "skander2.png"],
    pdf: "CV_Skander.pdf"
  },
  {
    id: 4,
    name: "Imene Maouene",
    role: "Directrice EY Studio+ | Experte en Innovation & Experience Design",
    exp: "17+ ans",
    img: pic2,
    pages: ["imen1.png", "imen2.png"],
    pdf: "CV_Imen.pdf"
  },
  {
    id: 3,
    name: "Senda Boukef",
    role: "Directrice EY - Services de Stratégie et de Transformation Technologique",
    exp: "20+ ans",
    img: pic3,
    pages: ["senda1.png", "senda2.png"],
    pdf: "CV_Senda.pdf"
  },
  {
    id: 2,
    name: "Ilyes Karoui",
    role: "Senior Manager EY | Expert en IA et Technologies Émergentes",
    exp: "17+ ans",
    img: pic4,
    pages: ["ilyes1.png", "ilyes2.png"],
    pdf: "CV_Ilyes.pdf"
  },
  {
    id: 1,
    name: "Mustapha Ayari",
    role: "Assistant Manager EY Studio+ | Expert en Product Design et Design System",
    exp: "7+ ans",
    img: pic5,
    pages: ["mustapha1.png", "mustapha2.png"],
    pdf: "CV_Mustapha.pdf"
  }
];

export default function CVs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCV, setSelectedCV] = useState<typeof cvs[0] | null>(null);
  const [currentModalPage, setCurrentModalPage] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCV) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCV]);

  const openModal = (cv: typeof cvs[0]) => {
    setSelectedCV(cv);
    setCurrentModalPage(0);
  };

  const closeModal = () => {
    setSelectedCV(null);
  };

  const nextModalPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCV && currentModalPage < selectedCV.pages.length - 1) {
      setCurrentModalPage(prev => prev + 1);
    }
  };

  const prevModalPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCV && currentModalPage > 0) {
      setCurrentModalPage(prev => prev - 1);
    }
  };

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
            Les experts qui vous accompagnent 
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
      <div className="w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden px-6 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Spacer to align first item with container */}
          <div className="hidden md:block min-w-[calc(50vw-40rem+1.5rem)] shrink-0" />
          
          {cvs.map((cv, index) => (
            <motion.div
              key={cv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] snap-center group relative"
            >
              <div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 cursor-pointer"
                onClick={() => openModal(cv)}
              >
                <img
                  src={cv.img}
                  alt={cv.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--color-accent)]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Voir CV
                  </span>
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
          
          {/* Spacer to allow last item to scroll fully into view */}
          <div className="hidden md:block min-w-[calc(50vw-40rem)] shrink-0" />
        </div>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {selectedCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={closeModal}
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10 z-50"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#111] border border-white/10 flex items-center justify-center flex-col">
                <img
                  src={`../../Assets/resumes/${selectedCV.pages[currentModalPage]}`}
                  alt={`CV ${selectedCV.name} page ${currentModalPage + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Download Button */}
                {selectedCV.pdf && (
                  <a
                    href={`../../Assets/resumes/${selectedCV.pdf}`}
                    download
                    className="absolute top-6 left-6 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full font-medium flex items-center gap-2 border border-white/20 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download size={18} />
                    <span className="hidden sm:inline">Télécharger (PDF)</span>
                  </a>
                )}

                {/* Navigation Controls */}
                {selectedCV.pages.length > 1 && (
                  <>
                    <button
                      onClick={prevModalPage}
                      disabled={currentModalPage === 0}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/10 transition-all ${
                        currentModalPage === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10 hover:border-white/30 text-white"
                      }`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button
                      onClick={nextModalPage}
                      disabled={currentModalPage === selectedCV.pages.length - 1}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/10 transition-all ${
                        currentModalPage === selectedCV.pages.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/10 hover:border-white/30 text-white"
                      }`}
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Page Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                      {selectedCV.pages.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentModalPage ? "bg-[var(--color-accent)] w-6" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
