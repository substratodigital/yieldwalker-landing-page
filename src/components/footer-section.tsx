"use client";

import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowUpRight } from "lucide-react";

export function FooterSection() {
    return (
        <section id="contact" className="relative w-full min-h-[100vh] bg-[#E5E5E5] flex flex-col items-center justify-between overflow-hidden">

            {/* BACKGROUND IMAGE - ROBOT */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center top-0">
                <img
                    src="/assets/robo_cima.webp"
                    alt="YieldWalker Robot Above View"
                    className="w-full h-auto object-cover md:object-contain object-top md:object-center opacity-90 scale-110"
                />
            </div>


            {/* LINEAR GRADIENT OVERLAY (Lightening to bottom) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#E5E5E5] via-[#E5E5E5]/50 to-transparent pointer-events-none" />

            {/* DOT PATTERN OVERLAY */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center mix-blend-overlay opacity-60">
                <DotPattern
                    width={24}
                    height={24}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="fill-[#0F232E] [mask-image:linear-gradient(to_bottom,transparent,#0F232E_80%)]"
                />
            </div>

            {/* INTERACTIVE CONTENT (CTA & INFO) */}
            <div className="relative z-30 w-full max-w-[1240px] px-6 md:px-12 flex flex-col items-center text-center mt-32 md:mt-48 mb-20">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-8 w-full max-w-4xl"
                >
                    <h2
                        className="font-black text-[#0F232E] text-4xl md:text-6xl max-w-2xl leading-[1.05] drop-shadow-sm"
                        style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", letterSpacing: "-0.02em" }}
                    >
                        Seeking Strategic Partners & Deep-Tech Investors
                    </h2>

                    <p className="font-mono text-[#0F232E]/80 text-lg md:text-xl leading-relaxed max-w-xl text-center">
                        Collaborating with A*STAR, NUS, and NTU to solve national and global agricultural challenges.
                    </p>

                    {/* CTA Box */}
                    <a
                        href="mailto:miguel@yieldwalker.com"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FF5532] text-white rounded-full font-mono font-bold text-lg hover:bg-white hover:text-[#0F232E] transition-all duration-300 shadow-[0_10px_40px_rgba(255,85,50,0.4)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.3)] mt-2"
                    >
                        <span>Partner with YieldWalker</span>
                        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                    </a>

                    {/* ECOSYSTEM LOGOS */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-8 pt-8 border-t border-[#0F232E]/10 w-full opacity-60">
                        <span className="font-sans font-black text-[#0F232E] text-2xl tracking-tighter">A*STAR</span>
                        <span className="font-serif font-bold text-[#0F232E] text-2xl tracking-widest italic">NUS</span>
                        <span className="font-sans font-bold text-[#0F232E] text-2xl tracking-normal border-2 border-[#0F232E] px-2 py-0">NTU</span>
                    </div>
                </motion.div>

                {/* MINIMALIST CONTACT (ABOVE LOGO) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full flex justify-center mt-16 md:mt-24"
                >
                    <a
                        href="mailto:miguel@yieldwalker.com"
                        className="font-mono text-sm md:text-base text-[#0F232E]/60 hover:text-[#FF5532] transition-colors"
                    >
                        miguel@yieldwalker.com
                    </a>
                </motion.div>

            </div>

            {/* HUGE YIELDWALKER LOGO (TEXT) AT VERY BOTTOM */}
            <div className="relative w-full flex justify-center items-end pointer-events-none z-30 mt-auto pb-4">
                <motion.h1
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="font-black text-[#FF5532] tracking-tighter w-full text-center select-none overflow-visible"
                    style={{
                        fontFamily: "'Google Sans Flex', system-ui, sans-serif",
                        fontSize: "clamp(4rem, 18vw, 25rem)",
                        lineHeight: 0.8,
                    }}
                >
                    YIELDWALKER
                </motion.h1>
            </div>

        </section>
    );
}
