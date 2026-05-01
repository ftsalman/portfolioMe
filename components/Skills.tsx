"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Node.js", level: 85 },
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "GSAP", level: 75 },
  { name: "Next.js", level: 88 },
  { name: "MongoDB", level: 85 },
];

export default function Skills() {
  return (
    <section className="relative z-20 w-full bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Skills
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Core technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300"
            >
              <h3 className="text-white font-semibold text-lg md:text-xl mb-6 tracking-wide">
                {skill.name}
              </h3>
              
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.3 + (i * 0.1), 
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#8a2be2] shadow-[0_0_15px_rgba(221,36,118,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
