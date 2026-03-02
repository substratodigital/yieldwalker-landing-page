"use client";

import React from "react";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Scissors, Target } from "lucide-react";

// Dados simulados para o Gráfico de Comparação
const chartData = [
    {
        name: "Op. Hours / Day",
        Manual: 8,
        YieldWalker: 24,
    },
    {
        name: "Slope Mastery (%)",
        Manual: 5,
        YieldWalker: 20,
    },
    {
        name: "Precision Consistency",
        Manual: 60,
        YieldWalker: 100,
    },
];

const GlowingCard = ({ title, text, icon: Icon, delay }: { title: string; text: string; icon: React.ElementType; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group p-[1px] rounded-3xl overflow-hidden shadow-2xl"
        >
            {/* Glow Effect / Borda animada transparente invisível até o hover */}
            <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5532]/0 via-[#FF5532]/20 to-[#FF5532]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            <div className="relative h-full bg-[#161616]/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-4 border border-white/10 z-10">
                <div className="w-12 h-12 rounded-full bg-[#FF5532]/10 flex items-center justify-center border border-[#FF5532]/30 mb-2 group-hover:bg-[#FF5532] group-hover:border-white/50 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[#FF5532] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-bold text-white text-2xl" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                    {title}
                </h3>
                <p className="font-mono text-[#D8D8D5] text-[15px] opacity-80 leading-relaxed">
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

export function ROISection() {
    return (
        <section id="roi" className="relative w-full bg-[#0F232E] py-32 px-6 md:px-12 flex flex-col items-center overflow-hidden">

            {/* DOTS BACKGROUND WITH FADE MASK */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className="fill-white/10 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
                />
            </div>

            <div className="relative z-10 w-full max-w-[1240px] flex flex-col gap-16">

                {/* HEADING DA SEÇÃO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <span className="font-mono text-sm text-[#FF5532] tracking-widest uppercase mb-2">
                        Operational ROI: Turning Hours into Yield
                    </span>
                    <h2
                        className="font-black text-white text-5xl md:text-6xl max-w-[20ch] drop-shadow-lg"
                        style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif", lineHeight: 1.05 }}
                    >
                        From 8-Hour Shifts to Always-On Precision
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mt-12">

                    {/* COLUNA ESQUERDA: CONTADORES DE IMPACTO E CARDS */}
                    <div className="lg:col-span-6 flex flex-col gap-10">

                        {/* TICKERS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                className="flex flex-col gap-1 border-l-2 border-[#FF5532] pl-6"
                            >
                                <div className="flex items-baseline text-white font-black text-6xl" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                    <NumberTicker value={24} className="text-white" /><span className="text-[#FF5532]">/7</span>
                                </div>
                                <p className="font-mono text-[#D8D8D5] text-sm md:text-[15px] opacity-80 mt-2">
                                    Continuous Field Operation
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col gap-1 border-l-2 border-[#FF5532] pl-6"
                            >
                                <div className="flex items-baseline text-white font-black text-6xl" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                    <NumberTicker value={20} className="text-white" /><span className="text-[#FF5532]">%</span>
                                </div>
                                <p className="font-mono text-[#D8D8D5] text-sm md:text-[15px] opacity-80 mt-2">
                                    Slope Mastery (Steep Terrains)
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col gap-1 md:col-span-2 border-l-2 border-[#FF5532] pl-6"
                            >
                                <div className="flex items-baseline text-white font-black text-6xl" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                    <NumberTicker value={100} className="text-white" /><span className="text-[#FF5532]">%</span>
                                </div>
                                <p className="font-mono text-[#D8D8D5] text-sm md:text-[15px] opacity-80 mt-2">
                                    Consistency in Selective Picking
                                </p>
                            </motion.div>
                        </div>

                        {/* GLOWING CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <GlowingCard
                                title="Weed Control"
                                text="Zero chemical overkill + absolute nutrient optimization in real-time."
                                icon={Scissors}
                                delay={0.6}
                            />
                            <GlowingCard
                                title="Harvest Quality"
                                text="Peak-ripeness window capture for premium pricing and waste reduction."
                                icon={Target}
                                delay={0.8}
                            />
                        </div>

                    </div>

                    {/* COLUNA DIREITA: RECHARTS BENCHMARK */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-6 bg-[#0B1820]/80 border border-white/5 backdrop-blur-2xl rounded-[32px] p-6 lg:p-10 flex flex-col justify-center shadow-2xl relative"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <span className="font-mono text-[#FF5532] font-black">VS</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>Human vs Autonomous Benchmark</h3>
                                <p className="text-white/50 text-xs font-mono">Real-world agricultural capacity projection</p>
                            </div>
                        </div>

                        <div className="w-full h-[360px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
                                    className="font-mono text-xs"
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                    <XAxis dataKey="name" stroke="#ffffff50" tick={{ fill: "#ffffff80" }} axisLine={false} tickLine={false} dy={10} />
                                    <YAxis stroke="#ffffff50" tick={{ fill: "#ffffff80" }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: "#ffffff05" }}
                                        contentStyle={{ backgroundColor: "#161616", border: "1px solid #333", borderRadius: "8px", fontFamily: "monospace" }}
                                        itemStyle={{ color: "#fff" }}
                                    />

                                    {/* Barras de Comparação com Animação Nativa do Recharts e Cores Customizadas */}
                                    <Bar dataKey="Manual" fill="#ffffff30" radius={[6, 6, 0, 0]} animationDuration={1500} name="Traditional Labor" />
                                    <Bar dataKey="YieldWalker" fill="#FF5532" radius={[6, 6, 0, 0]} animationDuration={1800} name="YieldWalker (24/7)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Legenda Manual para fixar estética */}
                        <div className="mt-8 flex gap-6 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/30" />
                                <span className="font-mono text-[#D8D8D5] text-xs">Traditional Labor</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5532]" />
                                <span className="font-mono text-white font-bold text-xs">YieldWalker</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
