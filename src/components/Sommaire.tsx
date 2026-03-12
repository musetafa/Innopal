import { motion } from "motion/react";
import { IconoirArrowRight } from "@ey-xd/motif-icon";
import MotifIcon from "./MotifIcon";

const sections = [
  {
    id: "comprehension",
    title: "01. Notre Compréhension",
    desc: "Analyse de vos besoins",
  },
  {
    id: "eytunisie",
    title: "02. Notre proposition de valeur",
    desc: "Comment EY crée une valeur unique?",
  },
  { id: "studio-plus", title: "03. EY Studio+ Tunisie", desc: "Nous sommes au cœur du mouvement." },
  { id: "clientssection", title: "04. Ils nous font confiance", desc: "Acteur engagé de l’innovation en Tunisie." },
  {
    id: "agenda",
    title: "05. Approche & Phases",
    desc: "Méthodologie en 3 temps",
  },
  {
    id: "agendatimeline",
    title: "06. Agenda Détaillé",
    desc: "Programme de l'immersion",
  },
  { id: "cvs", title: "07. Les experts qui vous accompagnent", desc: "Profils et expertises" },
];

export default function Sommaire() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sommaire" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sommaire</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFE600] via-[#FF32FF] to-[#32FFFF]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollTo(section.id)}
                className="w-full text-left group relative p-8 rounded-2xl glass-panel hover:bg-white/[0.02] transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl font-display font-semibold mb-2 text-primary group-hover:text-[var(--color-accent)] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-primary-50 text-sm">{section.desc}</p>
                </div>

                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <MotifIcon icon={IconoirArrowRight} size="12" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
