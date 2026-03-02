"use client";

import React from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";

export function SolutionSection() {
    return (
        <section id="solution" className="relative w-full bg-[#FF5532] py-[160px] px-6 md:px-12 flex flex-col items-center overflow-hidden">

            {/* DOT PATTERN OVERLAY FOR SOLUTION */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-40">
                <DotPattern
                    width={24}
                    height={24}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="fill-white [mask-image:linear-gradient(to_bottom,transparent,white_80%)]"
                />
            </div>

            {/* Texto de Introdução da Seção */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[1240px] flex flex-col gap-4 mb-20 text-center md:text-left"
            >
                <div className="flex items-center gap-2 justify-center md:justify-start">
                    <span className="w-8 h-[2px] bg-white block" />
                    <span className="font-mono text-xs text-white tracking-widest uppercase">
                        The Solution
                    </span>
                </div>
                <h2
                    className="font-black text-white text-5xl md:text-6xl max-w-[18ch]"
                    style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", lineHeight: 1.05 }}
                >
                    Modular Autonomy for Precision Operations
                </h2>
                <p className="font-mono text-white/80 text-lg md:text-xl max-w-[60ch] mt-4 leading-relaxed">
                    We don&apos;t just build robots; we add the &quot;brain&quot; and the &quot;tools&quot; to existing quadruped hardware to capture value from previously invisible operational costs.
                </p>
            </motion.div>

            {/* Grid com os Cards Direcionais */}
            <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* CARD A - Precision Selective Harvesting */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    <DirectionAwareHover
                        imageUrl="/assets/SOLUTION_Precision Selective Harvesting.png"
                        className="w-full h-[500px]"
                        imageClassName="object-cover"
                    >
                        <div className="p-4 flex flex-col gap-3">
                            <h3
                                className="text-white text-3xl font-black drop-shadow-md"
                                style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}
                            >
                                Precision Selective Harvesting
                            </h3>
                            <p
                                className="text-[#D8D8D5] text-base md:text-lg font-bold drop-shadow-lg max-w-[40ch]"
                                style={{ fontFamily: "'M PLUS 1 Code', monospace" }}
                            >
                                Perception AI coupled with controlled robotic manipulation to identify optimal ripeness and replicate expert manual picking at scale.
                            </p>
                        </div>
                    </DirectionAwareHover>
                </motion.div>

                {/* CARD B - Sharp Row/Column Weed Cut */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    <DirectionAwareHover
                        imageUrl="/assets/Sharp RowColumn Weed Cut.png"
                        className="w-full h-[500px]"
                        imageClassName="object-cover"
                    >
                        <div className="p-4 flex flex-col gap-3">
                            <h3
                                className="text-white text-3xl font-black drop-shadow-md"
                                style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}
                            >
                                Sharp Row/Column Weed Cut
                            </h3>
                            <p
                                className="text-[#D8D8D5] text-base md:text-lg font-bold drop-shadow-lg max-w-[40ch]"
                                style={{ fontFamily: "'M PLUS 1 Code', monospace" }}
                            >
                                Vision-guided slicing tools that eliminate weed competition and improve field uniformity without the need for chemical overkill.
                            </p>
                        </div>
                    </DirectionAwareHover>
                </motion.div>

            </div>
        </section>
    );
}
