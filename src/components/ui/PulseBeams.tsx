import { motion } from "motion/react";

const grad1 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad3 = {
  initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};

const grad4 = {
  initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
  animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
};

const grad5 = {
  initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

const GradientColors = () => (
  <>
    <stop stopColor="#FFE600" stopOpacity="0" />
    <stop stopColor="#FFE600" />
    <stop offset="0.325" stopColor="#FF32FF" />
    <stop offset="1" stopColor="#32FFFF" stopOpacity="0" />
  </>
);

const SVGs = () => (
  <svg
    width="858"
    height="434"
    viewBox="0 0 858 434"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex shrink-0"
  >
    <path
      d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
      stroke="rgba(46,46,56,0.1)"
    />
    <path
      d="M380 168V17C380 11.4772 384.477 7 390 7H414"
      stroke="rgba(46,46,56,0.1)"
    />

    <path
      d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
      stroke="url(#grad1)"
    />
    <path
      d="M429 217H841C846.523 217 851 212.523 851 207V40"
      stroke="url(#grad2)"
    />
    <path
      d="M429 217V333C429 338.523 424.523 343 419 343H152C146.477 343 142 347.477 142 353V426.5"
      stroke="url(#grad3)"
    />
    <path
      d="M429 217V333.226C429 338.749 433.477 343.226 439 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
      stroke="url(#grad4)"
    />
    <path
      d="M380 168V17C380 11.4772 384.477 7 390 7H414"
      stroke="url(#grad5)"
    />

    <defs>
      <motion.linearGradient
        variants={grad5}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: 0.5,
        }}
        id="grad5"
      >
        <GradientColors />
      </motion.linearGradient>
      <motion.linearGradient
        variants={grad1}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: 1.2,
        }}
        id="grad1"
      >
        <GradientColors />
      </motion.linearGradient>
      <motion.linearGradient
        variants={grad2}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: 0.8,
        }}
        id="grad2"
      >
        <GradientColors />
      </motion.linearGradient>
      <motion.linearGradient
        variants={grad3}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: 1.5,
        }}
        id="grad3"
      >
        <GradientColors />
      </motion.linearGradient>
      <motion.linearGradient
        variants={grad4}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
          delay: 0.3,
        }}
        id="grad4"
      >
        <GradientColors />
      </motion.linearGradient>
    </defs>

    <circle
      cx="851"
      cy="34"
      r="6.5"
      fill="rgba(46,46,56,0.08)"
      stroke="rgba(46,46,56,0.15)"
    />

    <circle
      cx="142"
      cy="427"
      r="6.5"
      fill="rgba(46,46,56,0.08)"
      stroke="rgba(46,46,56,0.15)"
    />
    <circle
      cx="6.5"
      cy="398.5"
      r="6"
      fill="rgba(46,46,56,0.08)"
      stroke="rgba(46,46,56,0.15)"
    />
    <circle
      cx="420.5"
      cy="6.5"
      r="6"
      fill="rgba(46,46,56,0.08)"
      stroke="rgba(46,46,56,0.15)"
    />
  </svg>
);

export default function PulseBeams() {
  return (
    <div className="relative w-full max-w-2xl h-[10rem] sm:h-[14rem] md:h-[22rem] overflow-hidden pointer-events-auto">
      <div className="relative inline-flex items-center justify-center mt-[24px]">
        <button
          onClick={() => document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" })}
          className="relative z-40 no-underline group cursor-pointer rounded-[4px] p-px text-xs font-semibold leading-6 inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-[4px]">
            <span className="absolute inset-0 rounded-[4px] bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,230,0,0.5)_0%,rgba(255,50,255,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex justify-center items-center text-center w-auto h-[55px] rounded-[4px] bg-[#2E2E38] ring-1 ring-white/10 px-6">
            <span className="text-[16px] text-white">
              Découvrir l'agenda
            </span>
          </div>
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <SVGs />
        </div>
      </div>
    </div>
  );
}
