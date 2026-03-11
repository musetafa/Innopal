import { motion } from "motion/react";
import { WorldMap } from "./ui/world-map";

export default function KPIs() {
  const kpis = [
    { value: "11", label: "Secteurs d’activité" },
    { value: "20", label: "Associés" },
    { value: "750+", label: "Professionnels" },
  ];

  return (
    <section
      id="eytunisie"
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
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary-40 font-medium">
                Notre proposition de valeur
              </p>
              <p className="mt-2 text-lg md:text-md font-semibold text-primary-60">
                EY Tunisie
              </p>
              <p className="mt-3 text-sm text-primary-50 font-mono uppercase tracking-wider">
                Europe de l’Ouest • Afrique subsaharienne francophone • Moyen-Orient
              </p>
              <h2 className="mt-3 text-4xl md:text-4xl font-bold leading-tight text-primary">
                Un acteur de référence au cœur des transformations économiques et
                entrepreneuriales.
              </h2>
            </div>
            <div className="text-primary-60 text-md mb-12 leading-relaxed space-y-6">
              <p>
                Présente localement depuis 1987, AMC EY Tunisie est l’une des
                premières sociétés de services professionnels en Tunisie,
                s’appuyant sur plus de 750 professionnels basés à Tunis.
              </p>
              <p>
                EY Tunisie soutient les éditeurs de logiciels et les acteurs des
                services financiers dans le développement, l’évolution et la
                gouvernance de leurs plateformes technologiques, en Tunisie et
                au-delà, sur l’Afrique subsaharienne francophone et le Moyen-Orient.
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
                  <div className="text-4xl font-display font-bold text-primary mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-primary-50 uppercase tracking-wider">
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
            className="relative h-full min-h-[500px] rounded-3xl glass-panel flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.1)_0%,transparent_70%)] opacity-50" />

            {/* World map with animated connections */}
            <div className="relative z-10 w-full h-full flex items-center">
              <WorldMap
                hub={{ lat: 36.8065, lng: 10.1815 }}
                lineColor="#FFE600"
                dots={[
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 32.8872, lng: 13.1913 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 14.7167, lng: -17.4677 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 4.3947, lng: 18.5582 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 9.6412, lng: -13.5784 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 18.0735, lng: -15.9582 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 6.5244, lng: 3.3792 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: -18.8792, lng: 47.5079 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 24.7136, lng: 46.6753 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 25.2854, lng: 51.5310 },
                  },
                  {
                    start: { lat: 36.8065, lng: 10.1815 },
                    end: { lat: 25.2048, lng: 55.2708 },
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
