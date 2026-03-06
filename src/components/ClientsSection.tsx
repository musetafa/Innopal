import { motion } from "motion/react";
import { IconCloud } from "./ui/interactive-icon-cloud";

import logo1 from "../../Assets/logo cloud/logo1.png";
import logo2 from "../../Assets/logo cloud/logo2.png";
import logo3 from "../../Assets/logo cloud/logo3.png";
import logo4 from "../../Assets/logo cloud/logo4.png";
import logo5 from "../../Assets/logo cloud/logo5.png";
import logo6 from "../../Assets/logo cloud/logo6.png";
import logo7 from "../../Assets/logo cloud/logo7.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-32 relative overflow-hidden bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils nous font <span className="text-[var(--color-accent)]">confiance</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Découvrez les clients et les programmes que nous avons accompagnés avec succès.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video md:aspect-auto md:h-[600px] rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.05)_0%,transparent_60%)]" />
          <IconCloud imageUrls={logos} />
        </motion.div>
      </div>
    </section>
  );
}
