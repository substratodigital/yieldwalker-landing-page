"use client";

import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import React, { useState } from "react";

const trackRecords = [
    {
        title: "CAOS Focado",
        description: "A premier deep-tech venture builder with a portfolio valuation exceeding.",
        value: "S$25M",
        valueSub: "",
        logo: "/assets/logo_caos-focado.png",
        link: "https://www.caosfocado.com.br/"
    },
    {
        title: "Nave à Vela",
        description: "Co-founded and bootstrapped this edtech leader from scratch to a",
        value: "S$15M",
        valueSub: "exit",
        logo: "/assets/logo_nave-vela.png",
        link: "https://www.naveavela.com.br/"
    },
    {
        title: "Cromai",
        description: "An agricultural AI flagship for sugarcane and soy, currently valued at over",
        value: "S$20M",
        valueSub: "",
        logo: "/assets/logo_cromai.png",
        link: "https://www.cromai.com/"
    },
    {
        title: "Kinology",
        description: "A health-tech innovator bringing IoT + AI to human movement health. By combining proprietary sensors with advanced analytics,",
        value: "",
        valueSub: "",
        logo: "/assets/logo_kinology.png",
        link: "https://kinology.com.br/"
    }
];

export function FounderSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="founder" className="relative w-full bg-[#E5E5E5] py-32 flex flex-col items-center overflow-hidden">

            {/* BACKGROUND DOTS */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <DotPattern
                    width={24}
                    height={24}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="fill-[#0F232E]/10 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
                />
            </div>

            <div className="relative z-10 w-full max-w-[1240px] px-6 md:px-12 flex flex-col gap-24">

                {/* TOP ROW: FOUNDER INFO */}
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3 max-w-[320px] aspect-[4/5] overflow-hidden rounded-[24px] shadow-2xl relative flex-shrink-0"
                    >
                        <div className="absolute inset-0 bg-[#0F232E]/10 mix-blend-overlay z-10 pointer-events-none" />
                        <img
                            src="/assets/founder-miguel-chaves.png"
                            alt="Miguel Chaves"
                            className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        />
                        {/* LinkedIn Label inside Image aligned at bottom according to mockup */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <a
                                href="https://www.linkedin.com/in/miguelchaves1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-[#0F232E] text-white rounded-lg font-mono text-sm md:text-base font-bold hover:bg-[#FF5532] transition-colors shadow-lg whitespace-nowrap group"
                            >
                                Miguel Chaves
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-2/3 flex flex-col justify-center mt-4 md:mt-16"
                    >
                        <h2
                            className="font-black text-[#0F232E] text-5xl md:text-7xl mb-8"
                            style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", letterSpacing: "-0.02em" }}
                        >
                            Founder-Market Fit
                        </h2>

                        <div className="flex flex-col gap-8 w-full">
                            <p className="font-mono text-[#0F232E]/90 text-sm md:text-base leading-relaxed max-w-xl">
                                Led by <span className="text-[#FF5532] font-bold cursor-help relative group/tooltip underline decoration-dashed underline-offset-4">
                                    Miguel Chaves
                                    {/* Tooltip Bio */}
                                    <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-full mt-4 w-[85vw] md:w-[500px] p-6 bg-white border border-[#D8D8D5] shadow-2xl rounded-2xl text-[13px] md:text-sm font-mono text-[#0F232E]/90 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-[100] text-left">
                                        Miguel Chaves is the founder of YieldWalker. He graduated in Mechatronics Engineering from the Polytechnic School of the University of São Paulo, the top engineering school in Latin America. Selected by the MIT D-Lab and Olin College for the IDDS program, he spent multiple cycles in Boston working on human-centered design for emerging technologies targeting global social challenges and was later invited to join the program&apos;s teaching team. Backed by two MIT recommendation letters, he pursued his master&apos;s at ITA, one of the most prestigious aerospace engineering institutes in Latin America. In parallel, he was funded by MIT to build innovation projects in Brazil and taught innovation at Insper&apos;s School of Engineering.
                                    </span>
                                </span>, a Mechatronics Engineer (USP) and Master of Aerospace Engineering (ITA) with a history of scaling deep-tech ventures.
                            </p>

                            <h3
                                className="font-black text-[#0F232E] text-2xl md:text-3xl max-w-xl leading-snug tracking-tight"
                                style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}
                            >
                                “Forged at the Intersection of MIT Innovation and Real-World Execution.”
                            </h3>
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM ROW: INFINITE MOVING CARDS (MARQUEE) */}
                <div className="relative w-full flex flex-col items-center">

                    {/* Fades nas bordas do carrossel para suavizar a entrada e saída */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#E5E5E5] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#E5E5E5] to-transparent z-20 pointer-events-none" />

                    <div
                        className="w-[100vw] overflow-hidden flex"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            className="flex gap-6 min-w-max px-6 py-8"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                ease: "linear",
                                duration: 45,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            style={{
                                // A magia da redução para 50% de velocidade (ou próxima) via CSS / Framer é simular o abrandamento
                                // Mas preferiremos congelar ligeiramente os ponteiros de eventos com PauseOnHover simulado puro (opcional).
                                animationPlayState: isHovered ? "paused" : "running"
                            }}
                        >
                            {/* Duplicando Array para o efeito infinito (Marquee) */}
                            {[...trackRecords, ...trackRecords].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-[300px] md:w-[320px] h-[380px] flex-shrink-0 bg-white/70 backdrop-blur-xl border border-[#D8D8D5] rounded-3xl p-8 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,85,50,0.2)] transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 origin-center"
                                >
                                    {/* Glow Interativo do Molten Orange no fundo */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF5532]/0 via-[#FF5532]/5 to-[#FF5532]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    {/* Copy description */}
                                    <p className="font-mono text-[#0F232E]/80 text-[15px] leading-relaxed z-10 mt-2">
                                        {item.description}
                                    </p>

                                    {/* Valuation Numbers (If Exists) */}
                                    <div className="flex flex-col z-10 min-h-[60px] justify-center">
                                        {item.value && (
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-black text-[#0F232E] text-[56px] md:text-[68px] leading-none tracking-tight group-hover:text-[#FF5532] transition-colors duration-500" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", letterSpacing: "-0.04em" }}>
                                                    {item.value}
                                                </span>
                                                {item.valueSub && (
                                                    <span className="font-black text-[#0F232E] text-xl leading-none" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                                        {item.valueSub}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Logo Section */}
                                    <div className="w-full flex justify-end items-end z-10 h-16 object-contain">
                                        <img
                                            src={item.logo}
                                            alt={item.title}
                                            className="max-h-full max-w-[120px] object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
