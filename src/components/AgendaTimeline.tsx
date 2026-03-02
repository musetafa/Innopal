import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Target,
  Zap,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import { agendaData, Activity } from "../data/agenda";

export default function AgendaTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="agenda" className="py-32 relative bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Agenda <span className="text-gradient-accent">Détaillé</span>
          </h2>
          <p className="text-white/60 text-lg">
            Un programme intensif sur 2 jours
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {agendaData.map((day, dayIndex) => (
            <div key={day.id} className="mb-24 relative">
              {/* Day Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="sticky top-24 z-20 flex flex-col items-center mb-16"
              >
                <div className="bg-[var(--color-bg)] px-6 py-3 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                  {day.title}
                </div>
                <div className="text-white/40 text-sm mt-2 font-mono">
                  {day.date}
                </div>
              </motion.div>

              {/* Activities */}
              <div className="space-y-12">
                {day.activities.map((activity, actIndex) => {
                  const isExpanded = expandedId === activity.id;
                  const isEven = actIndex % 2 === 0;

                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: actIndex * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] -translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

                      {/* Content Card */}
                      <div
                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}
                      >
                        <div
                          onClick={() => toggleExpand(activity.id)}
                          className={`glass-panel rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-[var(--color-accent)]/50 ${
                            isExpanded
                              ? "border-[var(--color-accent)] bg-white/[0.05]"
                              : "border-white/10"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-2 font-mono">
                                {activity.phase}
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                {activity.name}
                              </h4>
                              <div className="flex items-center text-white/50 text-sm font-mono">
                                <Clock size={14} className="mr-2" />
                                {activity.duration}
                              </div>
                            </div>
                            <div className="text-white/30">
                              {isExpanded ? (
                                <ChevronUp size={20} />
                              ) : (
                                <ChevronDown size={20} />
                              )}
                            </div>
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pt-6 border-t border-white/10 mt-4 space-y-6">
                                  <p className="text-white/70 leading-relaxed text-sm">
                                    {activity.description}
                                  </p>

                                  <div className="grid grid-cols-1 gap-6">
                                    <div>
                                      <h5 className="flex items-center text-sm font-bold text-white mb-3 uppercase tracking-wider">
                                        <Zap
                                          size={16}
                                          className="mr-2 text-[var(--color-accent)]"
                                        />
                                        Activités clés
                                      </h5>
                                      <ul className="space-y-2">
                                        {activity.keyActivities.map(
                                          (item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-sm text-white/60"
                                            >
                                              <span className="mr-2 text-[var(--color-accent)] mt-1">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                      <div>
                                        <h5 className="flex items-center text-sm font-bold text-white mb-3 uppercase tracking-wider">
                                          <CheckCircle2
                                            size={16}
                                            className="mr-2 text-green-400"
                                          />
                                          Résultats
                                        </h5>
                                        <ul className="space-y-2">
                                          {activity.results.map((item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-sm text-white/60"
                                            >
                                              <span className="mr-2 text-green-400 mt-1">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 className="flex items-center text-sm font-bold text-white mb-3 uppercase tracking-wider">
                                          <Target
                                            size={16}
                                            className="mr-2 text-purple-400"
                                          />
                                          Impacts
                                        </h5>
                                        <ul className="space-y-2">
                                          {activity.impacts.map((item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-sm text-white/60"
                                            >
                                              <span className="mr-2 text-purple-400 mt-1">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Image Placeholder */}
                                  <div className="w-full h-32 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mt-6 group overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col items-center text-white/20 group-hover:text-white/40 transition-colors">
                                      <ImageIcon size={24} className="mb-2" />
                                      <span className="text-xs font-mono uppercase tracking-widest">
                                        [ Image Placeholder ]
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
