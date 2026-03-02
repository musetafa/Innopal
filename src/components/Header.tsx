import { motion } from "motion/react";
import { Download, Menu } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-panel border-b-0"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-xl">
            A
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-xl">
            B
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("sommaire")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
          >
            Sommaire
          </button>
          <button
            onClick={() => scrollTo("cvs")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest"
          >
            CVs
          </button>
        </nav>

        {/* CTA */}
        <button className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
          <Download size={16} />
          <span>Download Presentation</span>
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}
