"use client";

import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WorldMap } from "@/components/ui/world-map";

const mapData = [
    {
        start: { lat: -23.5, lng: -46.6 }, // São Paulo, Brazil (Beachhead)
        end: { lat: 14.0, lng: 108.2 }, // Vietnam (Coffee focus)
    },
    {
        start: { lat: -23.5, lng: -46.6 },
        end: { lat: 0.7, lng: 113.9 }, // Southeast Asia (Berries expansion)
    },
    {
        start: { lat: -23.5, lng: -46.6 },
        end: { lat: -25.2, lng: -70.5 }, // LATAM / Chile (Grapes, Citrus)
    },
];

export function MarketSection() {
    return (
        <section id="market" className="relative w-full bg-white py-32 px-6 md:px-12 flex justify-center overflow-hidden">

            {/* BACKGROUND DOTS (Timberwolf color with subtle mask) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <DotPattern
                    width={24}
                    height={24}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="fill-[#161616]/10 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"
                />
            </div>

            <div className="relative z-10 w-full max-w-[1240px] flex flex-col items-center gap-16">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-4 max-w-3xl"
                >
                    <span className="font-mono text-sm text-[#FF5532] tracking-widest uppercase mb-2">
                        Global Scale
                    </span>
                    <h2
                        className="font-black text-[#0F232E] text-4xl md:text-6xl drop-shadow-sm"
                        style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", lineHeight: 1.05 }}
                    >
                        Market Opportunity: <br className="md:hidden" />
                        <span className="text-[#FF5532]">A S$30B Frontier</span>
                    </h2>
                </motion.div>

                {/* MAP & CARDS CONTAINER */}
                <div className="relative w-full flex flex-col items-center mt-8">

                    {/* WORLD MAP (Aceternity style) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full relative z-10"
                    >
                        {/* The map has its own animated connections inside */}
                        <WorldMap dots={mapData} lineColor="#FF5532" />
                    </motion.div>

                    {/* FLOATING GLASSMORPHISM COPY CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:absolute lg:top-1/4 lg:right-0 mt-8 lg:mt-0 z-20 w-full lg:w-[400px]"
                    >
                        <div className="bg-white/70 backdrop-blur-xl border border-[#0F232E]/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl p-8 flex flex-col gap-6">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#FF5532]/10 flex items-center justify-center border border-[#FF5532]/20">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5532] animate-pulse" />
                                </div>
                                <span className="font-bold text-[#0F232E] text-lg font-mono">
                                    Expansion Roadmap
                                </span>
                            </div>

                            <p className="font-mono text-[#0F232E]/80 text-base md:text-lg leading-relaxed">
                                Our beachhead is the <strong className="text-[#FF5532] font-bold">Brazilian coffee sector</strong> (responsible for 35% of the world&apos;s supply).
                            </p>
                            <div className="h-[1px] w-full bg-[#0F232E]/10" />
                            <p className="font-mono text-[#0F232E]/80 text-[15px] leading-relaxed">
                                Pioneering modular autonomy here unlocks rapid deployment to Grapes, Citrus, and Berries across LATAM, Vietnam, and Southeast Asia.
                            </p>

                            <div className="flex gap-2 flex-wrap mt-2">
                                {["LATAM", "Vietnam", "SE Asia"].map((region, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#0F232E]/5 rounded-full text-[#0F232E] font-bold text-xs uppercase tracking-wider font-mono">
                                        {region}
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
