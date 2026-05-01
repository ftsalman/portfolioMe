"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative z-20 w-full bg-background py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 p-6 md:p-12 lg:p-16 relative z-10">
            
            {/* Left side: Portrait Image */}
            {/* Replace the src with your actual portrait image path, e.g., /portrait.jpg */}
            <div className="w-full lg:w-[45%] aspect-[4/5] relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/imgs/me.png"
                alt="Salman Faris"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 md:mb-8">
                About Me
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.05]">
                Full-stack <br className="hidden md:block" />
                engineering from <br className="hidden md:block" />
                Palakkad.
              </h2>
              
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 md:mb-14 max-w-2xl">
                I am Salman Faris, a MERN stack developer based in Palakkad. I focus on building fast, secure, and maintainable web applications with clear architecture, reusable components, and clean code.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "MongoDB + Mongoose",
                  "Express REST APIs",
                  "React Frontend",
                  "Node.js Backend"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 text-zinc-300 font-medium text-sm transition-colors hover:bg-white/[0.05]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
