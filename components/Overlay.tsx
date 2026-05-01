"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map the scroll progress over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /* 
   * Section 1: Center (0% -> 25%)
   * Fades out as the user starts scrolling
   */
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -120]);

  /* 
   * Section 2: Left (30% -> 55%)
   * Fades in around 30% scroll, peaks, then fades out
   */
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.55], [80, 0, -120]);

  /* 
   * Section 3: Right (60% -> 85%)
   * Fades in around 60% scroll, peaks, then fades out before the Projects section
   */
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.85], [80, 0, -120]);

  return (
    // The container spans exactly the same height as ScrollyCanvas (500vh) to sync the scroll progress
    <div ref={containerRef} className="h-[500vh] w-full pointer-events-none relative z-10">
      {/* Sticky container locks the typography in the viewport while we scrub the 500vh */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1: Center (0% scroll) */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute flex flex-col items-center text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-4 drop-shadow-2xl">
            Salmaan
          </h1>
          <p className="text-lg md:text-2xl text-subtle font-medium tracking-[0.2em] z-10 uppercase">
            MERN Stack Developer
          </p>

          <small>Palakkad,Kerala,India</small>
        </motion.div>

        {/* Section 2: Left (30% scroll) */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 md:left-16 lg:left-32 max-w-lg md:max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] drop-shadow-2xl">
            I build digital <br/>
            <span className="text-muted">experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3: Right (60% scroll) */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-6 md:right-16 lg:right-32 max-w-lg md:max-w-2xl text-right px-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] drop-shadow-2xl">
            Bridging design <br/>
            <span className="text-muted">and engineering.</span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
