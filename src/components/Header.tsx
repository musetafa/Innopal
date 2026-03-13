import { motion } from "motion/react";
import eyLogo from "../../Assets/Logos/ey-logo-dark.svg";

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
      <div className="max-w-7xl mx-auto flex items-end">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <img src={eyLogo} alt="EY" style={{ height: "calc(var(--spacing) * 13)" }} />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8 ml-auto">
          <button
            onClick={() => scrollTo("agenda")}
            className="text-[15px] font-medium text-primary-70 hover:text-primary transition-colors"
          >
            Agenda
          </button>
          <button
            onClick={() => scrollTo("cvs")}
            className="text-[15px] font-medium text-primary-70 hover:text-primary transition-colors"
          >
            Nos Experts
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
