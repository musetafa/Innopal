import { motion } from "motion/react";
import { LogoCloud } from "./ui/logo-cloud-2";

import logo1 from "../../Assets/logo cloud/logo1.png";
import logo2 from "../../Assets/logo cloud/logo2.png";
import logo3 from "../../Assets/logo cloud/logo3.png";
import logo4 from "../../Assets/logo cloud/logo4.png";
import logo5 from "../../Assets/logo cloud/logo5.png";
import logo6 from "../../Assets/logo cloud/logo6.png";
import logo7 from "../../Assets/logo cloud/logo7.png";
import logo8 from "../../Assets/logo cloud/logo8.png";

const logos = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
  { src: logo7, alt: "Logo 7" },
  { src: logo8, alt: "Logo 8" },
];

export default function ClientsSection() {
  return (
    <section id="clientssection" className="pt-32 pb-0 relative overflow-hidden bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            EY Studio+ Tunisie au cœur de l’écosystème d’innovation
          </h2>
          <p className="text-primary-60 text-lg max-w-2xl mx-auto">
            Découvrez les clients et les programmes que nous avons accompagnés avec succès.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative w-full overflow-hidden mt-12 mb-24"
        >
          <LogoCloud logos={logos} />
        </motion.div>

        {/* KPIs Section */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { value: "4", label: "Programmes Open Innovation" },
            { value: "10", label: "Workshops d'Idéation Gamifiés" },
            { value: "+100", label: "Startups accompagnées" },
            { value: "+15", label: "Programmes d'incubation et d'accélération" },
            { value: "3", label: "Projets Politique d'Innovation" },
            { value: "+20", label: "Entreprises accompagnées" },
          ].map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-[2px] border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="text-4xl md:text-5xl font-display font-light mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFE600] via-[#FF32FF] to-[#32FFFF]">
                  {kpi.value}
                </span>
              </div>
              <div className="text-xs md:text-sm text-primary-70 font-medium  leading-relaxed">
                {kpi.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
