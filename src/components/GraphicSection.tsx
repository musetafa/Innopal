import { motion } from "motion/react";

export default function GraphicSection() {
  const stats = [
    { label: "Workshops d’Idéation Gamifiés", value: "200+" },
    { label: "Entreprises accompagnées", value: "50+" },
    { label: "Programmes Open Innovation", value: "15+" },
    { label: "Projets Politique d’Innovation", value: "10+" },
    { label: "Programmes d’incubation et d’accélération", value: "5+" },
    { label: "Startups accompagnées", value: "100+" },
  ];

  return (
    <section id="studio-plus" className="py-32 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 font-medium mb-4">
            Notre proposition de valeur
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            EY Studio+ <span className="text-[var(--color-accent)]">Tunisie</span>
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-8">
            "Nous ne conseillons pas l’écosystème, nous en faisons partie."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-white/60 text-lg leading-relaxed"
          >
            <p>
              <strong className="text-white">EY Studio+</strong> est l’entité de EY dédiée à la conception de services, à l’innovation et à l’expérience client.
            </p>
            <p>
              Elle combine design, technologie et stratégie pour aider les organisations à imaginer, tester et déployer des solutions innovantes centrées sur l’utilisateur.
            </p>
            <p>
              EY Studio+ accompagne les entreprises dans la création de nouveaux produits, services et parcours digitaux, en utilisant des approches telles que le Design Thinking, le prototypage rapide et l’expérimentation.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/80 italic font-medium">
                "Nous ne sommes pas au-dessus, ni en dehors. Nous sommes au cœur du mouvement."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[var(--color-accent)]/30 transition-colors"
              >
                {/* Visual placeholder for the stat number, since exact numbers aren't in the slide but it's a KPI block */}
                <div className="text-3xl font-display font-bold text-[var(--color-accent)] mb-2">
                  ✓
                </div>
                <div className="text-sm text-white/80 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
