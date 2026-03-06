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
  Coffee,
  Utensils,
} from "lucide-react";
import { agendaData, Activity } from "../data/agenda";

function getPhaseColor(phase: string) {
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
  return "text-white";
}

export default function AgendaTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, hasDetails: boolean) => {
    if (!hasDetails) return;
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
            Agenda <span className="text-white">Détaillé</span>
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
                <div className="bg-[var(--color-bg)] px-6 py-3 rounded-full border border-white/30 text-white font-bold tracking-widest uppercase text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3">
                  <span>{day.title}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span className="text-white/70 font-mono font-normal tracking-normal lowercase">{day.date}</span>
                </div>
              </motion.div>

              {/* Activities */}
              <div className="space-y-12">
                {day.activities.map((activity, actIndex) => {
                  const isExpanded = expandedId === activity.id;
                  const isEven = actIndex % 2 === 0;
                  const isPause = activity.name.toLowerCase().includes("pause");
                  const hasDetails = !isPause && Boolean(
                    activity.description ||
                    activity.keyActivities.length > 0 ||
                    activity.results.length > 0 ||
                    activity.impacts.length > 0
                  );

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
                      <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-white -translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                      {/* Content Card */}
                      <div
                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}
                      >
                        <div
                          onClick={() => toggleExpand(activity.id, hasDetails)}
                          className={`glass-panel rounded-2xl p-6 transition-all duration-300 ${
                            hasDetails ? "cursor-pointer hover:border-white/50" : ""
                          } ${
                            isExpanded
                              ? "border-white bg-white/[0.05]"
                              : "border-white/10"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              {!activity.name.toLowerCase().includes("pause") && (
                                <div className={`text-[13px] uppercase tracking-widest mb-2 font-mono ${getPhaseColor(activity.phase)}`}>
                                  {activity.phase}
                                </div>
                              )}
                              <div className="flex items-center">
                                {activity.name.toLowerCase() === "pause" && (
                                  <Coffee size={20} className="mr-3 text-white/40" />
                                )}
                                {activity.name.toLowerCase().includes("déjeuner") && (
                                  <Utensils size={20} className="mr-3 text-white/40" />
                                )}
                                <h4 className="text-xl font-bold text-white">
                                  {activity.name}
                                </h4>
                              </div>
                              {activity.duration && (
                                <div className="flex items-center text-white/50 text-sm font-mono mt-1">
                                  <Clock size={14} className="mr-2" />
                                  {activity.duration}
                                </div>
                              )}
                            </div>
                            {hasDetails && (
                              <div className="text-white/30">
                                {isExpanded ? (
                                  <ChevronUp size={20} />
                                ) : (
                                  <ChevronDown size={20} />
                                )}
                              </div>
                            )}
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
                                          className="mr-2 text-white"
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
                                              <span className="mr-2 text-white mt-1">
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

                                  {/* Actual Images (if any) */}
                                  {activity.images && activity.images.length > 0 && (
                                    <div className="flex flex-col items-center gap-6 mt-8 w-full justify-center">
                                      {activity.images.map((imgSrc, i) => (
                                        <div
                                          key={imgSrc}
                                          className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl transition-transform duration-500 hover:scale-[1.02] w-full"
                                        >
                                          <img
                                            src={`../../Assets/Agenda/${imgSrc}`}
                                            alt={`${activity.name} preview ${i + 1}`}
                                            className="w-full h-auto object-contain rounded-xl"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}
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
