"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";

// ============================================================
// CONFIGURAÇÃO DOS FRAMES
// ============================================================
const TOTAL_FRAMES = 298;

function getFrameSrc(index: number, isMobile: boolean): string {
    const safeIndex = Math.max(0, Math.min(index, TOTAL_FRAMES - 1));
    const numString = String(safeIndex + 1).padStart(3, "0");
    const folder = isMobile ? "hero-mobile" : "hero_animacao";
    return `/assets/${folder}/ezgif-frame-${numString}.jpg`;
}

// ============================================================
// TIPOGRAFIA E ESTILOS
// Baseados no Design System que definimos na base da Skill 
// ============================================================
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const headlineVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, ease: easeOutExpo, delay: 0.3 },
    },
};

const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: easeOutExpo, delay: 0.8 },
    },
};

export function HeroSection() {
    const prefersReducedMotion = useReducedMotion();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Verificação Client-Side Responsiva
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Hook Framer Motion
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Acompanha a progressão de scroll relativa a este container inteiro
        offset: ["start start", "end end"]
    });

    // Mapeamos scrollYProgress de [0, 1] para os frames inteiros [0, TOTAL_FRAMES - 1]
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Transformações visuais para a Etapa 1: LOGOTIPO GIGANTE
    const etapa1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
    const etapa1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
    const etapa1Pointer = useTransform(scrollYProgress, (progress) => progress < 0.14 ? "auto" : "none");

    // Transformações visuais para a Etapa 2: HEADLINE
    const etapa2Opacity = useTransform(scrollYProgress, [0.12, 0.18, 0.25, 0.3], [0, 1, 1, 0]);
    const etapa2Y = useTransform(scrollYProgress, [0.12, 0.3], [30, -30]);
    const etapa2Pointer = useTransform(scrollYProgress, (progress) => progress > 0.12 && progress < 0.3 ? "auto" : "none");

    // Transformações visuais para a Etapa 3: BODY COPY E BOTÕES CTAs
    const etapa3Opacity = useTransform(scrollYProgress, [0.28, 0.35, 0.45, 0.52], [0, 1, 1, 0]);
    const etapa3Y = useTransform(scrollYProgress, [0.28, 0.52], [30, -30]);
    const etapa3Pointer = useTransform(scrollYProgress, (progress) => progress > 0.28 && progress < 0.52 ? "auto" : "none");

    // Transformações visuais para a seção The Challenge (Cards) - Etapa 4
    const challengeOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
    const challengeY = useTransform(scrollYProgress, [0.55, 0.65], [100, 0]);
    const challengePointerEvents = useTransform(scrollYProgress, (progress) => progress > 0.55 ? "auto" : "none");

    // Fade Out global do Canvas para conectar perfeitamente com a Molten Orange
    const canvasOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

    // 1. CARREGAMENTO DOS FRAMES (Re-roda caso o isMobile mude para trocar a array)
    useEffect(() => {
        if (prefersReducedMotion) {
            setIsLoaded(true);
            return;
        }

        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFrameSrc(i, isMobile);
            img.onload = () => {
                loadedCount++;
                if (i === 0 && canvasRef.current) {
                    renderFrame(0, imgs, canvasRef.current);
                }
                if (loadedCount === TOTAL_FRAMES) {
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
            };
            imgs[i] = img;
        }

        imagesRef.current = imgs;
    }, [prefersReducedMotion, isMobile]);

    // Função pura para renderizar imagem no canvas
    function renderFrame(index: number, imgs: HTMLImageElement[], canvas: HTMLCanvasElement) {
        if (!imgs[index]) return; // Evita falhas se a imagem ainda não carregou
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // As imagens parecem ter aspecto wide, cobrindo o canvas
        ctx.drawImage(imgs[index], 0, 0, canvas.width, canvas.height);
    }

    // 2. ESCUTAR MUDANÇAS DO FRAME E ATUALIZAR CANVAS
    useEffect(() => {
        return frameIndex.on("change", (latest) => {
            const currentFrame = Math.round(latest);
            if (canvasRef.current && imagesRef.current.length > 0) {
                renderFrame(currentFrame, imagesRef.current, canvasRef.current);
            }
        });
    }, [frameIndex]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative w-full bg-[#0F232E]"
            // O container ref é a pista inteira de rolagem. 
            // Aumentei levemente a pista para 350vh para abrigar as 3 etapas novas + challenge
            style={{ height: "350vh" }}
        >
            <div id="challenge" style={{ position: 'absolute', top: '200vh' }} />
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* === CAMADA 1: VÍDEO NO CANVAS === */}
                <motion.canvas
                    ref={canvasRef}
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ willChange: "transform", opacity: canvasOpacity }}
                />

                {/* Gradientes sutis para legibilidade (amarrado ao opacidade do Canvas pra somar natural) */}
                <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0 bg-gradient-to-r from-[#0F232E]/90 via-[#0F232E]/30 to-transparent pointer-events-none" />
                <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0 bg-gradient-to-t from-[#0F232E]/80 via-transparent to-transparent pointer-events-none" />

                {/* === ETAPA 1: O NOME GIGANTE (Conforme MOCKUP 1) === */}
                <motion.div
                    className="absolute inset-0 z-10 w-full px-6 flex flex-col justify-center items-center gap-6"
                    style={{ opacity: etapa1Opacity, scale: etapa1Scale, pointerEvents: etapa1Pointer }}
                >
                    <h1
                        className="font-black text-white px-2 md:px-4 text-center select-none drop-shadow-2xl font-bold w-full mx-auto max-w-[95vw] sm:max-w-none"
                        style={{
                            fontFamily: "'Google Sans Flex', system-ui, sans-serif",
                            fontSize: "clamp(3rem, 13vw, 11rem)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1
                        }}
                    >
                        YIELDWALKER
                    </h1>

                    {/* Ícone de Scroll Animado */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-12 flex flex-col items-center gap-3"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="flex items-center justify-center cursor-pointer hover:brightness-110 transition-all mt-[5vh] md:mt-0"
                        >
                            <img src="/assets/botton-scroll.svg" alt="Scroll Down" className="w-[42px] h-[64px] object-contain drop-shadow-md" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* === ETAPA 2: A HEADLINE & PEQUENO LOGO ACIMA === */}
                <motion.div
                    className="absolute inset-0 z-10 w-full max-w-[1240px] px-6 md:px-12 flex flex-col justify-center mx-auto"
                    style={{ opacity: etapa2Opacity, y: etapa2Y, pointerEvents: etapa2Pointer }}
                >
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        {/* Eyebrow de Marca Pequeno */}
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="font-black text-[18px] text-white tracking-wide flex items-center gap-2 select-none" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                <span className="text-white/60 text-[20px]">▶</span> YIELD<span className="text-[#FF5532]">WALKER</span>
                            </span>
                        </div>

                        {/* Title em duas Linhas */}
                        <h2
                            className="font-black text-white max-w-[24ch] drop-shadow-xl"
                            style={{
                                fontFamily: "'Google Sans Flex', system-ui, sans-serif",
                                fontSize: "clamp(42px, 6vw, 84px)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.02em"
                            }}
                        >
                            <span className="text-white">Intelligence on Legs:</span>
                            <br className="hidden md:block" />
                            <span className="text-[#FF5532]"> High-Value Agriculture, Reimagined.</span>
                        </h2>
                    </div>
                </motion.div>

                {/* === ETAPA 3: BODY COPY + CTA (Conforme Mockup 3) === */}
                <motion.div
                    className="absolute inset-0 z-10 w-full max-w-[1240px] px-6 md:px-12 flex flex-col justify-center mx-auto"
                    style={{ opacity: etapa3Opacity, y: etapa3Y, pointerEvents: etapa3Pointer }}
                >
                    <div className="flex flex-col gap-6 w-[95%] md:w-[60%] items-center md:items-start text-center md:text-left mx-auto md:mx-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-[-10px] w-full">
                            <span className="font-black text-[18px] text-white tracking-wide flex items-center justify-center md:justify-start gap-2 select-none" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                <span className="text-[#FF5532] text-[20px]">▶</span> YIELD<span className="text-[#FF5532]">WALKER</span>
                            </span>
                        </div>
                        <p
                            className="font-mono text-white text-lg md:text-2xl drop-shadow-md pb-2"
                            style={{ lineHeight: 1.6 }}
                        >
                            Empowering the next generation of field management through autonomous quadruped solutions designed for the terrains where traditional machinery fails.
                        </p>

                        <div className="flex gap-4 flex-wrap justify-center md:justify-start w-full">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255, 85, 50, 0.5)" }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-3 rounded-full font-mono font-bold text-white bg-[#FF5532] transition-colors"
                            >
                                Partner with YieldWalker
                            </motion.a>

                            <motion.a
                                href="#solution"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-3 rounded-full font-mono font-medium text-white border-2 border-white/20 bg-black/40 backdrop-blur-md hover:bg-white/10 flex items-center gap-2 transition-colors cursor-pointer"
                            >
                                See how it works <span>↓</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* === CAMADA 4: CHALLENGE OVERLAY (CARDS) === */}
                <motion.div
                    className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 w-full"
                    style={{ opacity: challengeOpacity, y: challengeY, pointerEvents: challengePointerEvents }}
                >
                    {/* DOT PATTERN OVERLAY FOR CHALLENGE */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-30">
                        <DotPattern
                            width={24}
                            height={24}
                            cx={1}
                            cy={1}
                            cr={1}
                            className="fill-white [mask-image:linear-gradient(to_bottom,transparent,white_80%)]"
                        />
                    </div>

                    <div className="max-w-[1240px] w-full flex flex-col xl:flex-row gap-12 xl:gap-8 items-center xl:items-start justify-between relative z-10">
                        {/* Texto The Challenge */}
                        <div className="xl:w-1/3 flex flex-col gap-4 text-center xl:text-left mt-8">
                            <span className="font-mono text-sm text-[#FF5532] tracking-widest uppercase mb-2">The Challenge: Why Now?</span>
                            <h2 className="font-black text-white text-4xl md:text-5xl lg:text-[56px] leading-[1.05] opacity-95" style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}>
                                Solving the Crisis at the Edge of the Field.
                            </h2>
                            <p className="font-mono text-[#D8D8D5] opacity-80 mt-4 text-base md:text-lg leading-relaxed">
                                The agricultural sector is facing a perfect storm: vanishing rural labor, rising ESG pressures, and a 20% slope limit that renders traditional mechanization useless.
                            </p>
                        </div>

                        {/* Cards de Fricção em Glassmorphism Premium C/ Ajuste Mobile P/ Nao cortar */}
                        <div className="xl:w-2/3 flex flex-row overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 w-full pb-8 md:pb-0 px-4 md:px-0">
                            {[
                                { title: "The Labor Gap", text: "Skilled field labor is increasingly scarce as younger generations migrate toward urban centers." },
                                { title: "Data Subjectivity", text: "Human assessments are inherently subjective, leading to inconsistent field data and compromised decision-making." },
                                { title: "The Terrain Barrier", text: "High-value crops often grow on steep or narrow zones that remain dangerously unreachable for standard vehicles." }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.6)", scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="bg-[#161616]/60 backdrop-blur-xl border border-white/5 shadow-2xl p-6 md:p-8 rounded-[32px] flex flex-col gap-3 md:gap-4 min-w-[85vw] md:min-w-0 snap-center"
                                >
                                    <div className="w-14 h-14 rounded-full border border-[#FF5532]/30 bg-[#FF5532]/10 flex items-center justify-center mb-2">
                                        <span className="font-mono text-[#FF5532] text-xl font-bold">0{i + 1}</span>
                                    </div>
                                    <h3 style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }} className="text-white font-bold text-2xl tracking-tight">{card.title}</h3>
                                    <p className="text-[#D8D8D5] text-[15px] opacity-85 leading-relaxed font-mono">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
