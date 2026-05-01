"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#050505] pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-[#0a0a0a]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Identity */}
            <div className="lg:col-span-2">
              <span className="text-[#ff512f] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Salman Faris
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                MERN Stack Developer
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
                Building full-stack applications with React, Node.js, Express, and MongoDB from Palakkad.
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <span className="text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Quick Links
              </span>
              <ul className="flex flex-col gap-4">
                {["Home", "About", "Skills", "Projects", "Services"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <span className="text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Contact
              </span>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-[200px]">
                Mythri Nagar Kalapaka, Pattambi, Kerala 679306
              </p>
              <a 
                href="mailto:ftsalmanfarisotp@gmail.com"
                className="inline-block px-5 py-3 rounded-full bg-[#1f100a] text-[#ff512f] border border-white/5 hover:border-[#ff512f]/30 hover:bg-[#2a160d] transition-all duration-300 text-sm font-medium"
              >
                ftsalmanfarisotp@gmail.com
              </a>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.15em] uppercase font-bold">
              Copyright 2026 Salman Faris
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
