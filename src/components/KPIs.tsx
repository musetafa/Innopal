import { motion } from "motion/react";
import TunisiaMap from "./TunisiaMap";

export default function KPIs() {
  const kpis = [
    { value: "11", label: "Secteurs d’activité" },
    { value: "20", label: "Associés" },
    { value: "750+", label: "Professionnels" },
  ];

  return (
    <section
      id="kpis"
      className="py-32 relative bg-white/[0.02] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text & KPIs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 font-medium">
                Notre proposition de valeur
              </p>
              <p className="mt-2 text-lg md:text-xl font-semibold text-white/60">
                EY Tunisie
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-white">
                Un acteur de référence au cœur des transformations économiques et
                entrepreneuriales.
              </h2>
            </div>
            <div className="text-white/60 text-lg mb-12 leading-relaxed space-y-6">
              <p>
                Présente localement depuis 1987, AMC EY Tunisie est l’une des
                premières sociétés de services professionnels en Tunisie,
                s’appuyant sur plus de 750 professionnels basés à Tunis.
              </p>
              <p>
                EY Tunisie soutient les éditeurs de logiciels et les acteurs des
                services financiers dans le développement, l’évolution et la
                gouvernance de leurs plateformes technologiques, en Tunisie et
                en Afrique subsaharienne francophone.
              </p>
              <p>
                Nous disposons d’une connaissance approfondie et opérationnelle
                dans l’édition de solutions destinées au secteur financier,
                portée par des experts dédiés et appuyée par des références
                solides issues de projets de transformation d’envergure menés
                avec les principaux acteurs du secteur.
              </p>
              <p>
                Plus de 500 missions sont réalisées chaque année, auprès de plus
                de 200 clients locaux, couvrant les acteurs clés du marché.
              </p>
              <p>
                Nos références couvrent les principaux enjeux de l’édition
                logicielle financière : performance, digitalisation, UX, data,
                conformité et technologies.
              </p>
              <p>
                Ces références ont permis de construire une expertise reconnue,
                nourrie par une compréhension fine des réalités terrain propres
                à l’édition de solutions pour le secteur financier, et orientée
                vers la résolution de problématiques business concrètes et à
                fort impact.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-4"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFE600] via-[#FF32FF] to-[#32FFFF]" />
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">
                    {kpi.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-full min-h-[500px] rounded-3xl glass-panel flex items-center justify-center overflow-hidden p-8 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.1)_0%,transparent_70%)] opacity-50" />

            {/* Dotted Tunisia Map Component */}
            <div className="relative z-10 w-full max-h-full">
              <TunisiaMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
