import { motion } from "motion/react";

const phases = [
  {
    num: "01",
    title: "Acculturation",
    desc: "Aligner les connaissances, démystifier l'IA et créer un vocabulaire commun au sein de vos équipes.",
  },
  {
    num: "02",
    title: "Expérimentation",
    desc: "Passer de la théorie à la pratique par des ateliers hands-on et du prototypage rapide.",
  },
  {
    num: "03",
    title: "Projection",
    desc: "Définir la gouvernance, anticiper les risques et construire la feuille de route stratégique.",
  },
];

export default function AgendaIntro() {
  return (
    <section id="agenda-intro" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Notre Approche en <br />
            <span className="text-gradient-accent font-serif italic">
              3 Phases
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <div className="text-6xl font-display font-bold text-white/10 mb-6 group-hover:text-[var(--color-accent)]/20 transition-colors">
                {phase.num}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-accent)] transition-colors">
                {phase.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{phase.desc}</p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
