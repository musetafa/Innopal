import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconoirClock,
  IconoirBrightStar,
  IconoirFlash,
  IconoirCheckCircle,
  IconoirCoffeeCup,
  IconoirOrganicFood,
} from "@ey-xd/motif-icon";
import MotifIcon from "./MotifIcon";
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
  return "text-primary";
}

function getPhaseNodeClasses(phase: string) {
  if (phase.toLowerCase().includes("ouverture")) {
    return {
      ping: "bg-amber-400/45",
    };
  }
  if (phase.toLowerCase().includes("opportunités")) {
    return {
      ping: "bg-emerald-400/45",
    };
  }
  if (phase.toLowerCase().includes("orientations")) {
    return {
      ping: "bg-fuchsia-400/45",
    };
  }
  if (phase.toLowerCase().includes("implémentation")) {
    return {
      ping: "bg-indigo-400/45",
    };
  }
  return {
    ping: "bg-white/45",
  };
}

export default function AgendaTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string, hasDetails: boolean) => {
    if (!hasDetails) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="agendatimeline" className="pt-32 pb-0 md:pb-32 relative bg-[#0a0a0a] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Agenda <span className="text-primary">Détaillé</span>
          </h2>
          <p className="text-primary-60 text-lg">
            Un programme intensif sur 2 jours
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/35 to-transparent -translate-x-1/2" />

          {agendaData.map((day, dayIndex) => (
            <div key={day.id} className="mb-24 relative">
              {/* Day Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="sticky top-24 z-20 flex flex-col items-center mb-16"
              >
                <div className="bg-[var(--color-bg)] px-6 py-3 rounded-full border border-white/30 text-primary font-bold tracking-widest uppercase text-[15px] shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3">
                  <span>{day.title}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span className="text-primary-70 font-mono font-normal tracking-normal lowercase">{day.date}</span>
                </div>
              </motion.div>

              {/* Activities */}
              <div className="space-y-12">
                {day.activities.map((activity, actIndex) => {
                  const isExpanded = expandedId === activity.id;
                  const isEven = actIndex % 2 === 0;
                  const isPause = activity.name.toLowerCase().includes("pause");
                  const phaseNodeClasses = getPhaseNodeClasses(activity.phase);
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
                      <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 mt-6 z-10">
                        <div className={`absolute inset-0 w-4 h-4 rounded-full animate-ping ${phaseNodeClasses.ping}`} />
                        <div className="relative w-4 h-4 rounded-full border border-black/25 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
                      </div>

                      {/* Content Card */}
                      <div
                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}
                      >
                        <div
                          onClick={() => toggleExpand(activity.id, hasDetails)}
                          onMouseEnter={() => hasDetails && setHoveredId(activity.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          className={`rounded-2xl p-[1px] transition-all duration-500 bg-[length:200%_100%] bg-[position:0%_0%] ${
                            hasDetails ? "cursor-pointer" : ""
                          } ${
                            isExpanded
                              ? "bg-gradient-to-r from-[#FFE600] via-[#FF32FF] to-[#32FFFF]"
                              : "bg-black/10 hover:bg-gradient-to-r hover:from-[#FFE600] hover:via-[#FF32FF] hover:to-[#32FFFF] hover:bg-[position:100%_0%]"
                          }`}
                        >
                          <div className="glass-panel !bg-white rounded-2xl p-6 transition-all duration-300">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              {!activity.name.toLowerCase().includes("pause") && (
                                <div className={`text-[15px] uppercase tracking-widest mb-2 font-mono ${getPhaseColor(activity.phase)}`}>
                                  {activity.phase}
                                </div>
                              )}
                              <div className="flex items-center">
                                {activity.name.toLowerCase() === "pause" && (
                                  <MotifIcon icon={IconoirCoffeeCup} size="20" fill="#656579" className="mr-3" />
                                )}
                                {activity.name.toLowerCase().includes("déjeuner") && (
                                  <MotifIcon icon={IconoirOrganicFood} size="20" fill="#656579" className="mr-3" />
                                )}
                                <h4 className="text-lg md:text-xl font-bold text-primary break-words">
                                  {activity.name}
                                </h4>
                              </div>
                              {activity.duration && (
                                <div className="flex items-center text-primary-50 text-[15px] font-mono mt-1">
                                  <MotifIcon icon={IconoirClock} size="14" className="mr-2" />
                                  {activity.duration}
                                </div>
                              )}
                            </div>
                            {hasDetails && (
                              <motion.div
                                className="relative"
                                animate={{ rotate: hoveredId === activity.id ? 360 : 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                              >
                                <svg width="0" height="0" className="absolute">
                                  <defs>
                                    <linearGradient id="chevron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#FFE600" />
                                      <stop offset="50%" stopColor="#FF32FF" />
                                      <stop offset="100%" stopColor="#32FFFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                {isExpanded ? (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 15L12 9L18 15" stroke="url(#chevron-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="url(#chevron-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </motion.div>
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
                                  <p className="text-primary-70 leading-relaxed text-[15px]">
                                    {activity.description}
                                  </p>

                                  <div className="grid grid-cols-1 gap-6">
                                    {activity.keyActivities.length > 0 && (
                                    <div>
                                      <h5 className="flex items-center text-[15px] font-bold text-primary mb-3 uppercase tracking-wider">
                                        <MotifIcon icon={IconoirFlash} size="16" fill="#ffe600" className="mr-2" />
                                        Activités clés
                                      </h5>
                                      <ul className="space-y-2">
                                        {activity.keyActivities.map(
                                          (item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-[15px] text-primary-60"
                                            >
                                              <span className="mr-2 text-primary mt-[3px]">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                    )}

                                    {(activity.results.length > 0 || activity.impacts.length > 0) && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                      {activity.results.length > 0 && (
                                      <div>
                                        <h5 className="flex items-center text-[15px] font-bold text-primary mb-3 uppercase tracking-wider">
                                          <MotifIcon icon={IconoirCheckCircle} size="16" fill="#4ade80" className="mr-2" />
                                          Résultats
                                        </h5>
                                        <ul className="space-y-2">
                                          {activity.results.map((item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-[15px] text-primary-60"
                                            >
                                              <span className="mr-2 text-green-400 mt-[3px]">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}

                                      {activity.impacts.length > 0 && (
                                      <div>
                                        <h5 className="flex items-center text-[15px] font-bold text-primary mb-3 uppercase tracking-wider">
                                          <MotifIcon icon={IconoirBrightStar} size="16" fill="#c084fc" className="mr-2" />
                                          Impacts
                                        </h5>
                                        <ul className="space-y-2">
                                          {activity.impacts.map((item, i) => (
                                            <li
                                              key={i}
                                              className="flex items-start text-[15px] text-primary-60"
                                            >
                                              <span className="mr-2 text-purple-400 mt-[3px]">
                                                •
                                              </span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      )}
                                    </div>
                                    )}
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
                                            src={`/Assets/Agenda/${imgSrc}`}
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
