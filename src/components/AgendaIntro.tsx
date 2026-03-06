import { motion } from "motion/react";
import { Coffee, Utensils } from "lucide-react";
import { agendaData } from "../data/agenda";

const approachPhases = [
  {
    num: "01",
    title: "Ouverture & Mise en Énergie Collective",
    desc: "Installer un état d’esprit d’exploration et d’ouverture : alignement sur les enjeux, perceptions IA et langage commun.",
  },
  {
    num: "02",
    title: "Comprendre, analyser et structurer les opportunités IA",
    desc: "Approfondir les besoins utilisateurs et transformer les idées en cas d’usage IA concrets : pain points, XAI, opportunités tangibles.",
  },
  {
    num: "03",
    title: "Prioriser et définir les orientations IA 2026–2028",
    desc: "Prioriser les cas d’usage, cadrer via Blueprint et co-construire une vision “North Star IA” pour la trajectoire 2026–2028.",
  },
];

function dayPillClasses(dayId: string) {
  switch (dayId) {
    case "day-1":
      return "bg-white/10 text-white ring-white/20";
    case "day-2":
      return "bg-white/10 text-white ring-white/20";
    default:
      return "bg-white/10 text-white/80 ring-white/15";
  }
}

function phasePillClasses(phase: string) {
  if (phase.toLowerCase().includes("ouverture")) {
    return "bg-amber-500/15 text-amber-200 ring-amber-400/20";
  }
  if (phase.toLowerCase().includes("opportunités")) {
    return "bg-emerald-500/15 text-emerald-200 ring-emerald-400/20";
  }
  if (phase.toLowerCase().includes("orientations")) {
    return "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/20";
  }
  if (phase.toLowerCase().includes("implémentation")) {
    return "bg-indigo-500/15 text-indigo-200 ring-indigo-400/20";
  }
  return "bg-white/10 text-white/80 ring-white/15";
}

function phaseAccentClasses(phase: string) {
  if (phase.toLowerCase().includes("ouverture")) {
    return "bg-amber-400/30";
  }
  if (phase.toLowerCase().includes("opportunités")) {
    return "bg-emerald-400/30";
  }
  if (phase.toLowerCase().includes("orientations")) {
    return "bg-fuchsia-400/30";
  }
  if (phase.toLowerCase().includes("implémentation")) {
    return "bg-indigo-400/30";
  }
  return "bg-white/10";
}

function phaseTextColor(phase: string) {
  if (phase.toLowerCase().includes("ouverture")) {
    return "text-amber-400";
  }
  if (phase.toLowerCase().includes("opportunités")) {
    return "text-emerald-400";
  }
  if (phase.toLowerCase().includes("orientations")) {
    return "text-fuchsia-400";
  }
  if (phase.toLowerCase().includes("implémentation")) {
    return "text-indigo-400";
  }
  return "text-white/20";
}

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Agenda — Synthèse</h2>
          <p className="text-white/60 max-w-3xl leading-relaxed">
            Une vue d’ensemble des temps forts sur 2 jours (phases, activités et
            durées).
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Notre approche en 3 phases
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachPhases.map((phase, index) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <div className={`text-5xl font-display font-bold mb-4 ${phaseTextColor(phase.title)}`}>
                  {phase.num}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-white/60 leading-relaxed text-sm">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {agendaData.map((day) => {
            const phases = Array.from(
              day.activities.reduce(
                (set, a) => set.add(a.phase),
                new Set<string>(),
              ),
            );

            return (
              <div
                key={day.id}
                className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-5 bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${dayPillClasses(
                        day.id,
                      )}`}
                    >
                      {day.title}
                    </span>
                    <span className="text-sm text-white/60">{day.date}</span>
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {phases.map((phase) => {
                    const activities = day.activities.filter((a) => a.phase === phase);
                    return (
                      <div key={phase} className="relative">
                        <div className="flex items-center gap-3 px-6 py-4">
                          <div
                            className={`h-8 w-1 rounded-full ${phaseAccentClasses(phase)}`}
                          />
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${phasePillClasses(
                              phase,
                            )}`}
                          >
                            {phase}
                          </span>
                        </div>

                        <div className="overflow-x-auto pb-2">
                          <table className="w-full min-w-[720px] text-left">
                            <thead className="sr-only">
                              <tr>
                                <th>Séquence</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                              {activities.map((activity) => (
                                <tr key={activity.id} className="text-base">
                                  <td className="px-6 py-4 align-middle text-white/90">
                                    <div className="flex items-center">
                                      {activity.name.toLowerCase() === "pause" && (
                                        <Coffee size={16} className="mr-3 text-white/40" />
                                      )}
                                      {activity.name.toLowerCase().includes("déjeuner") && (
                                        <Utensils size={16} className="mr-3 text-white/40" />
                                      )}
                                      <span className="font-medium">{activity.name}</span>
                                      {activity.duration && (
                                        <span className="ml-6 whitespace-nowrap text-white/50">
                                          {activity.duration}
                                        </span>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
