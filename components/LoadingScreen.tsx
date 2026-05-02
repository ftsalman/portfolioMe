"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  progress: number; // 0–100
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animate the counter number smoothly
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(Math.round(progress));
    }, 50);
    return () => clearTimeout(timer);
  }, [progress]);

  // Once fully loaded, wait a beat then hide
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Radial ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[80px]" />
          </div>

          {/* Animated grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-6 w-full max-w-sm">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-3">
                Portfolio
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Salmaan Faris
              </h1>
              <p className="text-xs text-zinc-600 mt-2 tracking-widest uppercase">
                MERN Stack Developer
              </p>
            </motion.div>

            {/* Progress bar container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full flex flex-col gap-3"
            >
              {/* Bar track */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, #a855f7, #f97316, #ef4444)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ left: ["-5rem", "110%"] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.2,
                  }}
                />
              </div>

              {/* Percentage + label */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-600">
                  Loading experience
                </span>
                <span className="text-sm font-semibold tabular-nums text-white/80">
                  {displayProgress}%
                </span>
              </div>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-white/30"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/10" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/10" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
