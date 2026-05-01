"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative z-20 w-full bg-[#050505] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            MERN Projects
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Selected full-stack builds focused on practical architecture, performance, and real business workflows.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:auto-rows-[300px]">
          
          {/* 1. Large Left Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 lg:row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/10 flex flex-col justify-between p-8 md:p-12 min-h-[450px] lg:min-h-0 bg-[#111]"
          >
            {/* Background Gradient & Hover Image */}
            <div className="absolute inset-0  opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/8c/15/41/8c15410fe603ff75b1ebe40fe8c59748.jpg')] bg-center bg-no-repeat bg-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-3">Full Stack</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">MERN Commerce Platform</h3>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
                {/* Shopping Cart Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 mt-auto transform transition-transform duration-500 group-hover:translate-y-[-8px]">
              <p className="text-white/90 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
                Scalable e-commerce platform with JWT authentication, admin dashboard, and secure checkout flow.
              </p>
              <div className="flex flex-wrap gap-3">
                {["MongoDB", "Express", "React", "Node.js"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. Top Right Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] p-8 md:p-10 min-h-[300px] lg:min-h-0"
          >
             {/* Background Image & Overlay */}
             <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/b3/51/18/b3511822393bd5805cfe799b655cf4d1.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 transition-colors duration-500" />
             
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#ff512f] text-xs font-bold tracking-[0.2em] uppercase mb-3">Socket App</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Realtime Team Chat</h3>
                  </div>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
                    {/* Chat Icon */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {["React", "Node.js", "Socket.io"].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* 3. Bottom Right 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 lg:row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-8 md:p-8 hover:bg-[#111] transition-colors duration-500 min-h-[250px] lg:min-h-0"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#dd2476] text-xs font-bold tracking-[0.2em] uppercase mb-3">Backend Engineering</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">TaskFlow API</h3>
                  </div>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                    {/* Code Icon */}
                    <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {["Express", "MongoDB", "JWT"].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* 4. Bottom Right 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 lg:row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-8 md:p-8 hover:bg-[#111] transition-colors duration-500 min-h-[250px] lg:min-h-0"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#ff512f] text-xs font-bold tracking-[0.2em] uppercase mb-3">Content Platform</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Portfolio CMS</h3>
                  </div>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                    {/* Bookmark Icon */}
                    <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {["MERN", "Cloudinary", "Redux"].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
