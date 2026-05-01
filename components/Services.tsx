"use client";

import { motion } from "framer-motion";

const services = [
  {
    category: "UI ENGINEERING",
    title: "Frontend Development",
    description: "Responsive and modern interfaces with clean architecture and premium motion.",
    features: ["React components", "Next.js pages", "Tailwind CSS styling"],
    featured: false,
  },
  {
    category: "END-TO-END BUILD",
    title: "Full-Stack MERN Apps",
    description: "Production-ready MERN applications from database schema to deployment.",
    features: ["Node + Express API", "MongoDB integration", "Authentication flow", "Admin dashboard"],
    featured: true,
  },
  {
    category: "LONG-TERM SUPPORT",
    title: "Maintenance & Scaling",
    description: "Optimization, bug fixing, and feature scaling for growing products.",
    features: ["Performance tuning", "Refactoring", "Deployment + support"],
    featured: false,
  }
];

export default function Services() {
  return (
    <section className="relative z-20 w-full bg-background py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl"
          >
            Service-focused collaboration for startups, businesses, and product teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                service.featured 
                  ? "bg-[#111111] border-[#ff512f]/30 shadow-[0_0_40px_rgba(255,81,47,0.08)]" 
                  : "bg-[#0c0c0c] border-white/5 hover:bg-[#111]"
              }`}
            >
              {/* Subtle top glow for the featured card */}
              {service.featured && (
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#ff512f]/5 to-transparent rounded-t-[2rem] pointer-events-none" />
              )}
              
              <div className="relative z-10 flex-grow">
                <span className="text-zinc-500 text-[11px] font-bold tracking-[0.25em] uppercase mb-5 block">
                  {service.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10">
                  {service.description}
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  {service.features.map(feature => (
                    <div 
                      key={feature} 
                      className="px-5 py-3.5 rounded-xl bg-white/[0.02] text-zinc-300 text-sm font-medium border border-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className={`relative z-10 w-full py-4 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  service.featured
                    ? "bg-[#2a1410] hover:bg-[#3d1d16] text-[#ff8f66] border border-[#ff512f]/20"
                    : "bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/5"
                }`}
              >
                Get Service
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
