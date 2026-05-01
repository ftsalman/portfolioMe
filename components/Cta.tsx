"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative z-20 w-full bg-[#050505] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0d0714] border border-white/5 p-12 md:p-20 flex flex-col items-center text-center"
        >
          {/* Subtle premium gradient matching the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#261014] to-[#3a160a] opacity-90 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-zinc-500 text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-10 tracking-tight max-w-4xl mx-auto">
              Need a MERN developer for your next product?
            </h2>
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1f100a] text-[#ff512f] border border-[#ff512f]/20 hover:border-[#ff512f]/40 hover:bg-[#2a160d] transition-all duration-300 font-medium hover:scale-105 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
