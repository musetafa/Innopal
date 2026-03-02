import { motion } from "motion/react";

export default function Comprehension() {
  return (
    <section id="comprehension" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Notre compréhension <br />
            <span className="text-white/40 italic font-serif">
              de votre besoin
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12 text-lg md:text-xl leading-relaxed text-white/70 font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dans un contexte de transformation numérique accélérée,
            l'intégration de l'Intelligence Artificielle n'est plus une option
            mais une nécessité stratégique. Votre organisation cherche à
            démystifier l'IA pour ses équipes dirigeantes et opérationnelles,
            afin d'identifier des cas d'usage concrets et générateurs de valeur.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cette immersion doit aller au-delà de la simple théorie. Elle
            nécessite une approche pragmatique, interactive et inspirante.
            L'objectif est de créer un véritable déclic culturel, permettant à
            vos collaborateurs de passer d'une posture d'observateurs à celle
            d'acteurs de l'innovation au sein de votre écosystème.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 relative overflow-hidden mt-16"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)]" />
            <p className="text-white font-medium italic">
              "Notre mission est de concevoir une expérience sur-mesure qui
              transformera votre vision de l'IA en une feuille de route
              actionnable et mesurable."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
