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
            Notre compréhension de votre besoin<br />
            
          </h2>
        </motion.div>

        <div className="space-y-12 text-lg md:text-xl leading-relaxed text-white/70 font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nous percevons votre organisation à un moment clé de transformation,
            où la maturité du marché, l’évolution rapide des attentes, la
            pression concurrentielle et l’essor des technologies d’intelligence
            artificielle créent un contexte d’accélération.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Les équipes IT font face à une multiplication des initiatives IA,
            parfois dispersées ou insuffisamment cadrées, tandis que les
            attentes des métiers et des clients, en matière d’efficacité, de
            transparence et de performance, deviennent plus fortes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 relative overflow-hidden mt-16"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)]" />
            <div className="text-white font-medium">
              <p className="italic mb-4">Ce contexte exige :</p>
              <ul className="list-disc pl-6 space-y-2 text-white/90 font-light">
                <li>
                  Un alignement des équipes métiers et techniques sur une
                  vision commune de l&apos;IA.
                </li>
                <li>
                  Une accélération de l&apos;identification et de la qualification
                  de cas d&apos;usage à forte valeur.
                </li>
                <li>
                  Une acculturation globale pour passer d&apos;une logique
                  &quot;outil&quot; à une logique de &quot;création de valeur&quot;.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
