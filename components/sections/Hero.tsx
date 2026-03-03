"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-20 pb-10 overflow-hidden">
            <div className="container max-w-6xl mx-auto flex flex-col items-center text-center z-10">

                {/* Badge / Start Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-md text-sm font-semibold tracking-wider text-purple-200 uppercase"
                >
                    🚀 Старт потока: 10 Марта
                </motion.div>

                {/* Main Headline - Text Gradient & Anton Font */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight mb-8"
                >
                    <span className="text-gradient-hero block uppercase">Курс по созданию</span>
                    <span className="text-gradient-hero block uppercase">ИИ мультфильмов</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-12 font-medium leading-relaxed drop-shadow-lg"
                >
                    Создавай <span className="text-purple-400 font-bold">вирусный контент</span>, который продает за тебя.
                    Освой нейросети для Reels, Shorts и TikTok за 4 недели.
                </motion.p>

                {/* Buttons - Exact Reference Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center px-4 sm:px-0"
                >
                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-gradient group relative w-full sm:w-[300px] py-6 text-white font-bold text-lg rounded-xl transition-transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <span>КУПИТЬ КУРС</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a href="#program" className="w-full sm:w-[300px]">
                        <button className="w-full py-6 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-lg rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                            <Play className="w-5 h-5 fill-current" />
                            <span>СМОТРЕТЬ ПРОГРАММУ</span>
                        </button>
                    </a>
                </motion.div>

                {/* User Provided Foreground Elements */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] z-0 pointer-events-none opacity-60 mix-blend-screen hidden md:block"
                >
                    <Image
                        src="/hero-foreground-1.png"
                        alt="Neon Sphere Left"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-[-10%] right-[-5%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] z-0 pointer-events-none opacity-60 mix-blend-screen hidden md:block"
                >
                    <Image
                        src="/hero-foreground-2.png"
                        alt="Neon Sphere Right"
                        fill
                        className="object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
}
