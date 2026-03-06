import { motion } from "motion/react";
import { Menu } from "lucide-react";
import eyLogo from "../../Assets/Logos/ey-logo-white.svg";

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
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <img src={eyLogo} alt="EY" style={{ height: "calc(var(--spacing) * 12)" }} />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
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

        {/* Mobile Menu */}
        <button className="md:hidden text-white ml-auto">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}
